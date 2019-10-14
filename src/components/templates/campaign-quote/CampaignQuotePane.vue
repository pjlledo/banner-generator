<template>
  <div :class="{ 'pane': true, 'pane-dimmed': paneDimmed }">
    <campaign-randomizer />

    <!-- Disposition -->
    <transition name="slide">
      <b-tabs type="is-toggle" size="is-small" v-model="properties.disposition" v-if="!aspect" class="banner-disposition" expanded>
        <b-tab-item label="Frase esquerra"></b-tab-item>
        <b-tab-item label="Frase dreta"></b-tab-item>
      </b-tabs>
    </transition>

    <!-- Quote -->
    <b-field
      label="Frase"
      :type="properties.quote ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.quote ? '' : displayErrors ? `Has d'omplir la frase` : ''">
      <b-input type="textarea" placeholder="Tenim de 30 a 50 ciclistes passant cada segon pel carril bici." v-model="properties.quote" maxlength="140"></b-input>
    </b-field>

    <!-- Author -->
    <b-field
      label="Autor i/o mitjà"
      :type="properties.author ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.author ? '' : displayErrors ? `Has d'omplir la frase` : ''">
      <b-input type="textarea" class="textarea-small" placeholder="Giuseppe Grezzi a l'entrevista de La Sexta" v-model="properties.author" maxlength="70"></b-input>
    </b-field>

    <!-- Picture -->
    <picture-upload
      :picture="properties.picture"
      :display-errors="displayErrors"
      @upload="updateImage"
      @delete="properties.picture = null; properties.picturePreview = null" />

    <!-- Picture position -->
    <b-field label="Posició de la imatge" class="range">
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
          placeholder="#"
          @input="updateHashtag"
          :value="properties.hashtag"
          :maxlength="32">
        </b-input>
      </b-field>
    </transition>
  </div>
</template>

<script>
import PaneMixin from '@/mixins/pane-mixin.js'
import CampaignRandomizer from '@/utils/CampaignRandomizer'

export default {
  name: 'quote-pane',

  mixins: [PaneMixin],

  components: {
    CampaignRandomizer
  },

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
        this.isDownloadable = (
          properties.quote !== '' &&
          properties.author !== '' &&
          properties.picture !== null
        )
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
