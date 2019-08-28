<template>
  <div>
    <!-- Disposition -->
    <transition name="slide">
      <b-tabs
        type="is-toggle"
        size="is-small"
        v-model="properties.disposition"
        v-if="!aspect"
        class="banner-disposition"
        expanded>
        <b-tab-item label="Titular dalt"></b-tab-item>
        <b-tab-item label="Titular baix"></b-tab-item>
      </b-tabs>
    </transition>

    <!-- Source -->
    <b-field label="Font">
      <b-select placeholder="Selecciona un diari" @input="updateSource" expanded>
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

    <!-- Other source -->
    <transition name="slide">
      <div v-if="properties.source === 'other'">
        <b-field label="Mitjà de comunicació">
          <b-input placeholder="La Veu" v-model="properties.customSource"></b-input>
        </b-field>
        <b-field label="Color">
          <swatches v-model="properties.customSourceColor"></swatches>
        </b-field>
      </div>
    </transition>

    <!-- Headline -->
    <b-field
      label="Titular"
      :type="properties.headline ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.headline ? '' : displayErrors ? `Has d'omplir un titular` : ''">
      <b-input
        type="textarea"
        placeholder="Un tren descarrila..."
        v-model="properties.headline"
        maxlength="160">
      </b-input>
    </b-field>

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

    <!-- Hashtag -->
    <transition name="slide">
      <b-field label="Hashtag" v-if="!aspect">
        <b-input
          placeholder="#"
          @input="updateHashtag"
          :value="properties.hashtag"
          :maxlength="properties.hasLocalLabel ? 18 : 32">
        </b-input>
      </b-field>
    </transition>

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
import presets from './presets'
import Swatches from 'vue-swatches'

export default {
  name: 'headline-pane',

  components: {
    Swatches
  },

  mixins: [BannerMixin],

  data () {
    return {
      properties: {
        headline: '',
        source: null,
        customSource: '',
        customSourceColor: '#1CA085'
      },
      presets: presets
    }
  },

  created () {
    // Set first preset as default
    this.properties.source = this.presets[0]
  },

  watch: {
    properties: {
      handler: function (properties) {
        this.isDownloadable = (properties.headline !== '' && properties.picture !== null)
      },
      deep: true
    }
  },

  methods: {
    updateSource (source) {
      if (source === 'other') {
        this.properties.source = 'other'
        return
      }

      this.properties.source = this.presets.find(preset => preset.id === source)
    }
  }
}
</script>

<style lang="scss" scoped>
  .hashtag {
    margin-top: .25rem;
  }

  .local-label {
    margin-top: .75rem;
  }
</style>
