<template>
  <div>
    <b-tabs type="is-toggle-rounded" size="is-small">
      <b-tab-item label="Titular dalt" @click="properties.disposition = 1"></b-tab-item>
      <b-tab-item label="Titular baix" @click="properties.disposition = 2"></b-tab-item>
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
        </b-select>
    </b-field>
    <b-field label="Titular">
      <b-input placeholder="Un tren descarrila..." v-model="properties.headline"></b-input>
    </b-field>
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
        picturePos: '',
        headline: '',
        hashtag: '',
        local: '',
        source: null,
        customSource: '',
        customSourceColor: '',
      },
      presets: presets
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
      this.properties.source = this.presets.find(preset => preset.id === source)
    }
  }
}
</script>
