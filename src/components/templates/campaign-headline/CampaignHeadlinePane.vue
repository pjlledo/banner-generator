<template>
  <div :class="{ 'pane headline-pane': true, 'pane-dimmed': paneDimmed }">
    <!-- Disposition -->
    <transition name="slide">
      <b-field label="Posició del titular">
        <b-tabs
          id="disposition-tabs"
          type="is-toggle"
          size="is-small"
          v-model="properties.disposition"
          class="banner-disposition"
          expanded>
          <b-tab-item icon="arrow-to-bottom"></b-tab-item>
          <b-tab-item icon="grip-lines"></b-tab-item>
          <b-tab-item icon="arrow-to-top"></b-tab-item>
        </b-tabs>
      </b-field>
    </transition>

    <!-- Source -->
    <b-field
      id="source-field"
      label="Font"
      :type="properties.source ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.source ? '' : displayErrors ? `Has se seleccionar una font` : ''">
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
      <div v-if="properties.source === 'other'" class="source-input-group">
        <b-field
          class="source-input-name"
          label="Mitjà de comunicació"
          :type="properties.source === 'other' && properties.customSource ? '' : displayErrors ? 'is-danger' : ''"
          :message="properties.source === 'other' && properties.customSource ? '' : displayErrors ? `Has se seleccionar una font` : ''">
          <b-input placeholder="La Veu" v-model="properties.customSource"></b-input>
        </b-field>
        <b-field label="Color" class="source-input-color">
          <swatches v-model="properties.customSourceColor"></swatches>
        </b-field>
      </div>
    </transition>

    <!-- Headline -->
    <b-field
      id="headline-field"
      label="Titular"
      :type="properties.headline ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.headline ? '' : displayErrors ? `Has d'omplir un titular` : ''">
      <b-input
        type="textarea"
        placeholder="L'ús de la bici està per damunt de 9000..."
        v-model="properties.headline"
        maxlength="160">
      </b-input>
    </b-field>

    <!-- Picture -->
    <picture-upload
      id="picture-field"
      :picture="properties.picture"
      :display-errors="displayErrors"
      @upload="updateImage"
      @delete="properties.picture = null; properties.picturePreview = null" />

    <!-- Picture position -->
    <b-field id="picture-position-field" label="Posició de la imatge" class="range">
      <range-slider
        name="points"
        :min="0"
        :max="100"
        v-model="properties.picturePos"
        @touchstart="dimPane(true)"
        @touchend="dimPane(false)" />
    </b-field>

    <!-- Hashtag -->
    <transition name="slide">
      <b-field label="Hashtag" v-if="!aspect">
        <b-input
          id="hashtag-field"
          v-model="properties.slogan"
          :maxlength="32">
        </b-input>
      </b-field>
    </transition>
  </div>
</template>

<script>
import PaneMixin from '@/mixins/pane-mixin.js'
import presets from './presets'
import Swatches from 'vue-swatches'

export default {
  name: 'campaign-headline-pane',

  components: {
    Swatches
  },

  mixins: [PaneMixin],

  data () {
    return {
      properties: {
        headline: '',
        source: null,
        customSource: '',
        customSourceColor: '#1CA085',
        slogan: 'Acordar, la política útil'
      },
      presets: presets
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        const { headline, picture, source, customSource } = properties
        const sourceIsValid = source === 'other' ? customSource !== '' : source !== null
        this.isDownloadable = (
          headline !== '' &&
          picture !== null &&
          sourceIsValid
        )
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

<style lang="scss">
  @import "../../../sass/variables";

  .headline-pane {
    .hashtag {
      margin-top: .25rem;
    }

    .local-label {
      margin-top: .75rem;
    }

    .source-input {
      &-group {
        display: flex;

        label {
          font-size: .85rem;
          color: $gray-600;
        }
      }

      &-name {
        flex-grow: 1;
        order: 1;
      }

      &-color {
        margin-right: .5rem;
      }
    }

    .vue-swatches__trigger {
      height: 36px !important;
      width: 36px !important;
      border-radius: 4px !important;
    }
  }
</style>
