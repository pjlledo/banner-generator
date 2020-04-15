<template>
  <div :class="{ 'pane': true, 'pane-dimmed': paneDimmed }">
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

    <!-- Logo Style -->
    <b-field label="Logo">
      <careta-selector v-model="properties.logoStyle" />
    </b-field>
  </div>
</template>

<script>
import PaneMixin from '@/mixins/pane-mixin'
import CaretaSelector from '@/utils/CaretaSelector'

export default {
  name: 'social-pane',
  mixins: [PaneMixin],

  data () {
    return {
      properties: {
        logoStyle: 'mono'
      }
    }
  },

  components: {
    CaretaSelector
  },

  // Emit state to parent component
  watch: {
    properties: {
      handler: function (properties) {
        this.isDownloadable = (
          properties.picture !== null
        )
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .local-label {
    margin-top: .75rem;
  }
</style>
