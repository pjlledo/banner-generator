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
    <label class="label">Ponents</label>
    <ul class="speakers">
      <li v-for="(speaker, i) in properties.speakers" :key="i" class="speaker-item">
        <b-field class="speaker-name">
          <b-input placeholder="Nom del ponent" v-model="speaker.name" size="is-small" icon="user"></b-input>
        </b-field>
        <b-field class="speaker-description">
          <b-input placeholder="Càrrec" v-model="speaker.description" size="is-small" icon="credit-card-blank"></b-input>
        </b-field>
        <b-field class="speaker-picture">
          <b-upload @input="(image) => addSpeakerPicture(image, i)" drag-drop>
            <div class="content has-text-centered" v-if="!speaker.picture">
              <b-icon icon="upload" size="is-small"></b-icon>
            </div>
            <div v-else class="content has-image-centered">
              <img :src="speaker.picture" alt="Imatge" />
            </div>
          </b-upload>
        </b-field>
        <div class="speaker-remove">
          <b-button
            @click="deleteSpeaker(i)"
            size="is-small"
            type="is-danger"
            icon-right="times"
            v-if="properties.speakers.length > 1">
            </b-button>
        </div>
      </li>
    </ul>
    <div v-if="properties.speakers.length < 4" class="speakers-add">
      <b-button @click="addSpeaker" size="is-small" rounded icon-left="plus">Afegeix ponent</b-button>
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
    },

    addSpeakerPicture (image, i) {
      const img = new Image()
      this.properties.speakers[i].picture = URL.createObjectURL(image)
      img.src = this.properties.speakers[i].picture
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .field {
    position: relative;
  }

  .section {
    padding: 2rem 1.5rem;
  }

  .speakers {
    margin-bottom: .75rem;

    &-add {
      margin-bottom: .75rem;
    }
  }

  .speaker {
    &-item {
      display: grid;
      grid-template-columns: 4.35rem 1fr auto;
      grid-template-areas: 
        "picture name remove"
        "picture description remove";
      grid-gap: .75rem;
      border-bottom: 1px $gray-200 solid;
      padding: .75rem 0;

      .field {
        margin-bottom: 0;
      }
    }

    &-name {
      grid-area: name;
    }

    &-description {
      grid-area: description;
    }

    &-picture {
      grid-area: picture;
      align-self: stretch;
      display: grid;
      align-items: stretch;

      .control {
        display: flex;
        align-items: stretch;
      }

      .has-text-centered {
        padding-top: 1rem;
      }

      .has-image-centered {
        margin: .15rem;
        border-radius: .25rem;
        overflow: hidden;
        height: 3.15rem;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }

    &-remove {
      grid-area: remove;
    }
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
