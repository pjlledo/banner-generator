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
        Color
      </b-field>
    </div>
    <b-field label="Titular">
      <b-input placeholder="Un tren descarrila..." v-model="properties.headline"></b-input>
    </b-field>
    <b-field>
      <label class="label">Imatge</label>
      <b-upload @input="updateImage" drag-drop>
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon
                icon="upload"
                size="is-large">
              </b-icon>
            </p>
            <p>Drop your files here or click to upload</p>
          </div>
        </section>
      </b-upload>
    </b-field>
    <b-switch v-model="properties.hasLocalLabel">
      Afegir text al logo
    </b-switch>
    <div v-if="properties.hasLocalLabel">
      <b-field label="Text">
        <b-input placeholder="Alacant" v-model="properties.headline"></b-input>
      </b-field>
    </div>
  </div>
</template>

<script>
import presets from './presets'

export default {
  name: 'headline-pane',

  data () {
    return {
      properties: {
        disposition: 1,
        picture: '',
        picturePreview: '',
        picturePos: '',
        headline: '',
        hashtag: '',
        hasLocalLabel: false,
        localLabel: '',
        source: null,
        customSource: '',
        customSourceColor: '',
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
      console.log(image)
      this.properties.picture = image
      this.properties.picturePreview = URL.createObjectURL(image)
    }
  }
}
</script>
