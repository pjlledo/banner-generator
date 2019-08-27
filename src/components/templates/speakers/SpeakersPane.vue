<template>
  <div>
    <!-- Title -->
    <b-field label="Titol">
      <b-input placeholder="Acte Central a València" v-model="properties.title" maxlength="60"></b-input>
    </b-field>

    <!-- Overtitle -->
    <b-field label="Tipus d'acte">
      <b-input placeholder="Debat" maxlength="30" v-model="properties.overtitle"></b-input>
    </b-field>

    <!-- Speakers -->
    <label>Ponents</label>
    <ul class="speakers">
      <li v-for="(speaker, i) in properties.speakers" :key="i" :label="`Ponent #${i}`">
        <b-input placeholder="Nom del ponent" v-model="speaker.name"></b-input>
        <b-input placeholder="Càrrec" v-model="speaker.description"></b-input>
        <b-button @click="deleteSpeaker(i)">Esborra</b-button>
      </li>
    </ul>
    <div v-if="properties.speakers.length < 4">
      <b-button @click="addSpeaker">Afegeix ponent</b-button>
    </div>

    <!-- Date -->
    <b-field label="Data">
      <b-datepicker
        v-model="properties.date"
        placeholder="Dia d'emissió"
        icon="calendar-alt">
      </b-datepicker>
    </b-field>

    <!-- Time -->
    <b-field label="Hora">
      <b-timepicker
        rounded
        inline
        :increment-minutes="15"
        v-model="properties.time"
        icon="clock">
      </b-timepicker>
    </b-field>

    <!-- Venue -->
    <b-field label="Lloc">
      <b-input placeholder="Riu Túria" v-model="properties.place"></b-input>
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

export default {
  name: 'quote-pane',

  mixins: [BannerMixin],

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
        this.isDownloadable = (this.properties.quote !== '' && this.properties.picture !== null)
      },
      deep: true
    }
  },

  created () {
    // Set a default time
    this.properties.time.setHours(10)
    this.properties.time.setMinutes(0)
  },

  methods: {
    addSpeaker () {
      this.properties.speakers.push({ name: '', description: '', picture: null })
    },

    deleteSpeaker (i) {
      this.properties.speakers.splice(i, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .field {
    position: relative;
  }

  .section {
    padding: 2rem 1.5rem;
  }

  .remove-image {
    position: absolute;
    right: 0;
    top: 2rem;
  }

  .hashtag {
    margin-top: .25rem;
  }

  .local-label {
    margin-top: .75rem;
  }

  .image-upload-field {

    &.has-addons {
      flex-direction: column;
      width: 100%;
    }
  }
</style>

<style lang="scss">
  .textarea-small .textarea {
    min-height: 4.3rem;
  }
</style>
