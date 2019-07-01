<template>
  <div>
    <b-tabs type="is-toggle-rounded" size="is-small" v-model="properties.disposition">
      <b-tab-item label="Titular dalt"></b-tab-item>
      <b-tab-item label="Titular baix"></b-tab-item>
    </b-tabs>
    <b-field label="Font">
        <b-select placeholder="Selecciona un diari" @input="updateSource">
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
    <div v-if="properties.source === 'other'">
      <b-field label="Mitjà de comunicació">
        <b-input placeholder="La Veu" v-model="properties.customSource"></b-input>
      </b-field>
      <b-field label="Color">
        <swatches v-model="properties.customSourceColor"></swatches>
      </b-field>
    </div>
    <b-field label="Titular">
      <b-input type="textarea" placeholder="Un tren descarrila..." v-model="properties.headline"></b-input>
    </b-field>
    <b-field>
      <b-upload @input="updateImage" drag-drop>
        <section class="section">
          <div class="content has-text-centered" v-if="!properties.picture">
            <p>
              <b-icon
                icon="upload"
                size="is-large">
              </b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
          <div v-else>
            {{ properties.picture.name }}
          </div>
        </section>
      </b-upload>
      <button v-if="properties.picture" @click="properties.picture = null; properties.picturePreview = null">Remove image</button>
    </b-field>
    <b-field label="Hashtag">
      <b-input placeholder="#" @input="updateHashtag" :value="properties.hashtag"></b-input>
    </b-field>
    <b-switch v-model="properties.hasLocalLabel">
      Afegir text al logo
    </b-switch>
    <div v-if="properties.hasLocalLabel">
      <b-field label="Text">
        <b-input placeholder="Alacant" v-model="properties.localLabel"></b-input>
      </b-field>
    </div>
  </div>
</template>

<script>
import presets from './presets'
import Swatches from 'vue-swatches'

export default {
  name: 'headline-pane',

  components: {
    Swatches
  },

  data () {
    return {
      properties: {
        disposition: 1,
        picture: null,
        picturePreview: '',
        picturePos: '',
        headline: '',
        hashtag: '',
        hasLocalLabel: false,
        localLabel: '',
        source: null,
        customSource: '',
        customSourceColor: '#1CA085'
      },
      presets: presets,
      imagePreview: ''
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        this.$emit('updated', properties)
      },
      deep: true
    }
  },

  created () {
    // Set first preset as default
    this.properties.source = this.presets[0]
  },

  methods: {
    updateSource (source) {
      if (source === 'other') {
        this.properties.source = 'other'
        return
      }

      this.properties.source = this.presets.find(preset => preset.id === source)
    },

    updateImage (image) {
      this.properties.picture = image
      this.properties.picturePreview = URL.createObjectURL(image)
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
