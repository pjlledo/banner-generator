<template>
  <div>
    <!-- Disposition -->
    <transition name="slide">
      <b-tabs type="is-toggle" size="is-small" v-model="properties.disposition" v-if="!aspect" class="banner-disposition" expanded>
        <b-tab-item label="Frase esquerra"></b-tab-item>
        <b-tab-item label="Frase dalt"></b-tab-item>
      </b-tabs>
    </transition>

    <!-- Quote -->
    <b-field label="Frase" :type="properties.quote ? '' : displayErrors ? 'is-danger' : ''" :message="properties.quote ? '' : displayErrors ? `Has d'omplir la frase` : ''">
      <b-input type="textarea" placeholder="Un tren descarrila..." v-model="properties.quote" maxlength="120"></b-input>
    </b-field>

    <!-- Author -->
    <b-field label="Autor i/o mitjà">
      <b-input type="textarea" class="textarea-small" placeholder="Mónica Oltra a l'entrevista de La Sexta" v-model="properties.author" maxlength="80"></b-input>
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
import PaneMixin from '@/mixins/pane-mixin.js'

export default {
  name: 'quote-pane',

  mixins: [PaneMixin],

  data () {
    return {
      properties: {
        quote: '',
        author: ''
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
  }
}
</script>

<style lang="scss" scoped>
  .local-label {
    margin-top: .75rem;
  }
</style>
