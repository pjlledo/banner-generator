<template>
  <div>
    <!-- Disposition -->
    <transition name="slide">
      <b-tabs
        v-model="properties.disposition"
        v-if="!aspect"
        type="is-toggle"
        size="is-small"
        class="banner-disposition"
        expanded>
        <b-tab-item label="Frase esquerra"></b-tab-item>
        <b-tab-item label="Frase dalt"></b-tab-item>
      </b-tabs>
    </transition>

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

    <!-- Date -->
    <b-field label="Data" v-if="aspect !== 2">
      <b-datepicker
        v-model="properties.date"
        placeholder="Dia d'emissió"
        icon="calendar-alt">
      </b-datepicker>
    </b-field>

    <!-- Time -->
    <b-field label="Hora" v-if="aspect !== 2">
      <b-timepicker
        rounded
        inline
        :increment-minutes="15"
        v-model="properties.time"
        icon="clock">
      </b-timepicker>
    </b-field>

    <!-- Venue -->
    <b-field label="Lloc" v-if="aspect !== 2">
      <b-input placeholder="Riu Túria" v-model="properties.place"></b-input>
    </b-field>

    <!-- Speakers -->
    <transition name="slide">
      <speaker-list
        v-if="!aspect"
        :accepts-picture="false"
        :accepts-description="false"
        :min-speakers="0"
        :max-speakers="6"
        @updated="(speakers) => properties.speakers = speakers" />
    </transition>

    <!-- Picture -->
    <picture-upload
      :picture="properties.picture"
      :display-errors="displayErrors"
      @upload="updateImage"
      @delete="properties.picture = null; properties.picturePreview = null" />

    <!-- Picture position -->
    <b-field label="Posició de la imatge">
      <range-slider name="points" :min="0" :max="100" v-model="properties.picturePos" />
    </b-field>

    <!-- Local label -->
    <transition name="slide">
      <div v-if="!aspect">
        <b-switch v-model="properties.hasLocalLabel">
          Afegir text al logo
        </b-switch>
        <transition name="slide">
          <div v-if="properties.hasLocalLabel" class="local-label">
            <b-field>
              <b-input placeholder="Alacant" v-model="properties.localLabel" maxlength="48"></b-input>
            </b-field>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import BannerMixin from '@/mixins/banner-mixin.js'
import SpeakerList from '@/utils/SpeakerList.vue'

export default {
  name: 'quote-pane',

  mixins: [BannerMixin],

  components: {
    SpeakerList
  },

  data () {
    return {
      properties: {
        title: '',
        overtitle: '',
        date: new Date(),
        time: new Date(),
        place: '',
        speakers: []
      }
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        this.isDownloadable = (this.properties.title !== '' && this.properties.picture !== null)
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

<style lang="scss" scoped>
  .local-label {
    margin-top: .75rem;
  }
</style>

