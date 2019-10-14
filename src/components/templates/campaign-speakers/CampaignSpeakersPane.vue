<template>
  <div :class="{ 'pane': true, 'pane-dimmed': paneDimmed }">
    <campaign-randomizer />
    <!-- Title -->
    <b-field
      label="Titol"
      :type="properties.title ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.title ? '' : displayErrors ? `Has d'omplir un títol` : ''">
      <b-input placeholder="Acte Central a València" v-model="properties.title" maxlength="60"></b-input>
    </b-field>

    <!-- Overtitle -->
    <b-field label="Tipus d'acte">
      <b-input placeholder="Debat" maxlength="30" v-model="properties.overtitle"></b-input>
    </b-field>

    <!-- Speakers -->
    <speaker-list
      :default-speakers="properties.speakers"
      @updated="(speakers) => properties.speakers = speakers"
      :display-errors="displayErrors"
      :min-speakers="2"
      :max-speakers="4" />

    <!-- Date -->
    <transition name="slide">
      <b-field label="Data" v-if="aspect !== 2">
        <date-picker v-model="properties.date" />
      </b-field>
    </transition>

    <!-- Time -->
    <transition name="slide">
      <b-field label="Hora" v-if="aspect !== 2">
        <b-timepicker
          rounded
          inline
          :increment-minutes="15"
          v-model="properties.time"
          icon="clock">
        </b-timepicker>
      </b-field>
    </transition>

    <!-- Venue -->
    <transition name="slide">
      <b-field
        label="Lloc"
        v-if="aspect !== 2"
        :type="properties.place ? '' : displayErrors ? 'is-danger' : ''"
        :message="properties.place ? '' : displayErrors ? `Has d'omplir un lloc` : ''">
        <b-input placeholder="Riu Túria" v-model="properties.place" maxlength="60"></b-input>
      </b-field>
    </transition>

    <!-- Hashtag -->
    <transition name="slide">
      <b-field label="Hashtag" v-if="!aspect">
        <b-input
          id="hashtag-field"
          placeholder="#"
          @input="updateHashtag"
          :value="properties.hashtag"
          :maxlength="32">
        </b-input>
      </b-field>
    </transition>
  </div>
</template>

<script>
import PaneMixin from '@/mixins/pane-mixin'
import DatePicker from '@/utils/DatePicker'
import SpeakerList from '@/utils/SpeakerList'
import CampaignRandomizer from '@/utils/CampaignRandomizer'

export default {
  name: 'speakers-pane',

  mixins: [PaneMixin],

  components: {
    DatePicker,
    SpeakerList,
    CampaignRandomizer
  },

  data () {
    return {
      properties: {
        title: '',
        overtitle: '',
        date: new Date(),
        time: new Date(),
        place: '',
        speakers: [
          {
            name: 'Mónica Oltra',
            description: 'Vicepresidenta',
            picture: null
          },
          {
            name: 'Fran Ferri',
            description: 'Síndic',
            picture: null
          }
        ]
      }
    }
  },

  // Emit state to parent component
  watch: {
    properties: {
      handler: function (properties) {
        const speakersAreValid = properties.speakers.every((speaker) => speaker.picture !== null && speaker.name !== '')
        this.isDownloadable = (
          properties.title !== '' &&
          properties.place !== '' &&
          speakersAreValid
        )
      },
      deep: true
    }
  },

  created () {
    // Set a default time
    this.properties.time.setHours(10)
    this.properties.time.setMinutes(0)
  }
}
</script>
