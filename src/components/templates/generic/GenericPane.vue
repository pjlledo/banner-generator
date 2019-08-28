<template>
  <div>
    <!-- Text -->
    <div class="text-wrapper">
      <b-field label="Text" :type="properties.text ? '' : displayErrors ? 'is-danger' : ''" :message="properties.text ? '' : displayErrors ? `Has d'omplir el text` : ''">
        <b-input type="textarea" placeholder="Un tren descarrila..." v-model="properties.text" maxlength="60"></b-input>
      </b-field>

      <!-- Text align -->
      <b-field label="Alineació del text" class="text-align-group">
        <b-tabs @change="updateTextAlign" class="text-align" type="is-toggle" size="is-small" expanded>
          <b-tab-item icon="align-left"></b-tab-item>
          <b-tab-item icon="align-center"></b-tab-item>
          <b-tab-item icon="align-right"></b-tab-item>
        </b-tabs>

        <!-- Text position -->
        <b-tabs @change="updateTextPosition" class="text-position" type="is-toggle" size="is-small" expanded>
          <b-tab-item icon="arrow-to-top"></b-tab-item>
          <b-tab-item icon="grip-lines"></b-tab-item>
          <b-tab-item icon="arrow-to-bottom"></b-tab-item>
        </b-tabs>
      </b-field>
    </div>

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

export default {
  name: 'generic-pane',

  mixins: [BannerMixin],

  data () {
    return {
      properties: {
        text: '',
        textPos: 'center',
        textAlign: 'center'
      }
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        // Check if canvas can be downloaded
        this.isDownloadable = (properties.quote !== '' && properties.picture !== null)
      },
      deep: true
    }
  },

  methods: {
    updateTextAlign (i) {
      const values = ['left', 'center', 'right']
      this.properties.textAlign = values[i]
    },

    updateTextPosition (i) {
      const values = ['flex-start', 'center', 'flex-end']
      this.properties.textPos = values[i]
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-align-group {
    flex-direction: column;

    .b-tabs {
      margin-bottom: .75rem;
    }
  }

  .hashtag {
    margin-top: .25rem;
  }

  .local-label {
    margin-top: .75rem;
  }
</style>

<style lang="scss">
  .text-align-group .tab-content {
    height: 0;
    padding: 0;
  }
</style>
