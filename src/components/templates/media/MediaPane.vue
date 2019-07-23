<template>
  <div>
    <b-field label="Titol">
      <b-input placeholder="Mónica Oltra" v-model="properties.title"></b-input>
    </b-field>
    <b-field label="Tipus d'acte">
      <b-input placeholder="Debat" v-model="properties.overtitle"></b-input>
    </b-field>
    <b-field label="Subtítol">
      <b-input placeholder="Models de finançament" v-model="properties.subtitle"></b-input>
    </b-field>
    <b-field label="Data">
      <b-input placeholder="21 de Febrer" v-model="properties.date"></b-input>
    </b-field>
    <b-field label="Hora">
      <b-input placeholder="19h" v-model="properties.time"></b-input>
    </b-field>
    <b-field label="Foto" class="image-upload-field">
      <b-upload @input="updateImage" drag-drop>
        <section class="section">
          <div class="content has-text-centered" v-if="!properties.picture">
            <b-icon icon="upload" size="is-large" />
            <p>Arrosega la foto</p>
          </div>
          <div class="content has-text-centered" v-else>
            <p>{{ properties.picture.name }}</p>
          </div>
        </section>
      </b-upload>
      <b-button v-if="properties.picture" @click="properties.picture = null; properties.picturePreview = null" class="remove-image" type="is-danger">
        <b-icon icon="times" />
      </b-button>
    </b-field>
    <b-field label="Posició de la imatge">
      <range-slider name="points" :min="0" :max="100" v-model="properties.picturePos" />
    </b-field>
    <b-field label="Font">
      <b-select placeholder="Selecciona un canal" @input="updateSource" expanded>
        <option
          v-for="source in presets"
          :value="source.id"
          :key="source.id"
          :selected="properties.source === source.id">
          {{ source.name }}
        </option>
        <option
          value="other"
          :selected="properties.source === 'other'">
          Altre...
        </option>
      </b-select>
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
import RangeSlider from '@/utils/RangeSlider.vue'
import presets from './presets'

export default {
  name: 'quote-pane',

  components: {
    RangeSlider
  },

  data () {
    return {
      properties: {
        disposition: 0,
        picture: null,
        picturePreview: '',
        picturePos: 50,
        title: '',
        overtitle: '',
        subtitle: '',
        date: '',
        time: '',
        hasLocalLabel: false,
        localLabel: ''
      },
      presets: presets,
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
