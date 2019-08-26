<template>
  <div>
    <b-field label="Titol">
      <b-input placeholder="Acte Central a València" v-model="properties.title" maxlength="60"></b-input>
    </b-field>
    <b-field v-for="speaker in speakers" :key="speaker.id" :label="speaker.id">
      <b-input placeholder="Mónica Oltra" v-model="properties.speaker.name"></b-input>
      <b-input placeholder="Vicepresidenta del govern" v-model="properties.speaker.surname"></b-input>
    </b-field>
    <ul id="example-1">
      <li v-for="speaker in speakers" :key="speaker.id">
       {{ speaker.value.name }}
      </li>
    </ul>
    <b-field label="Data">
       <b-datepicker
            placeholder="Dia de l'acte"
            icon="calendar-alt">
        </b-datepicker>
    </b-field>
    <b-field label="Hora">
      <b-timepicker
        rounded
        inline
        :increment-minutes="15"
        v-model="properties.time"
        icon="clock">
      </b-timepicker>
    </b-field>
    <b-field label="Lloc">
      <b-input placeholder="Riu Túria" v-model="properties.place"></b-input>
    </b-field>
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
import { EventBus } from '@/event-bus.js'

export default {
  name: 'quote-pane',

  data () {
    return {
      properties: {
        disposition: 0,
        picture: null,
        picturePreview: '',
        picturePos: 50,
        title: '',
        date: '',
        time: new Date(),
        place: '',
        speakers: [
          {
            id: 'speaker1',
            name: '',
            surname: '',
            picture: null
          },
          {
            id: 'speaker2',
            name: '',
            surname: '',
            picture: null
          }
        ],
        hasLocalLabel: false,
        localLabel: '',
        isDownloadable: true
      },
      aspect: 0

    }
  },

  // Emit state to parent component
  watch: {
    properties: {
      handler: function (properties) {
        this.$emit('updated', properties)
      },
      deep: true
    }
  },

  created () {
    // Emit properties to canvas on component load
    this.$emit('updated', this.properties)

    // Update aspect
    EventBus.$on('aspectUpdated', (aspect) => { this.aspect = aspect })

    // Set a default time
    this.properties.time.setHours(10)
    this.properties.time.setMinutes(0)
  },

  methods: {
    updateImage (image) {
      this.properties.picture = image
      this.properties.picturePreview = URL.createObjectURL(image)

      const img = new Image()
      img.onload = () => {
        this.properties.pictureAspect = (img.width / img.height > 1) ? 'horizontal' : 'vertical'
      }
      img.src = this.properties.picturePreview
    },

    updateHashtag (hashtag) {
      if (!hashtag) {
        this.properties.hashtag = ''
        return
      }

      if (hashtag[0] === '#') {
        this.properties.hashtag = hashtag
      } else {
        this.properties.hashtag = '#' + hashtag
      }
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
