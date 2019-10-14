<template>
  <div :class="{ 'pane generic-pane': true, 'pane-dimmed': paneDimmed, 'pane-916': aspect === 1 }">
    <!-- Randomizer -->
    <campaign-randomizer />

    <!-- Text -->
    <div class="text-wrapper">
      <b-field label="Text">
        <b-input type="textarea" placeholder="48152342 usuaris de bicicleta en 2023" v-model="properties.text" maxlength="100"></b-input>
      </b-field>

        <!-- Text position -->
        <b-tabs @change="updateTextPosition" :value="1" class="text-position" type="is-toggle" size="is-small" expanded>
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
          placeholder="#"
          @input="updateHashtag"
          :value="properties.hashtag"
          :maxlength="25">
        </b-input>
      </b-field>
    </transition>
  </div>
</template>

<script>
import PaneMixin from '@/mixins/pane-mixin.js'
import CampaignRandomizer from '@/utils/CampaignRandomizer'

export default {
  name: 'campaign-generic-pane',

  mixins: [PaneMixin],

  components: {
    CampaignRandomizer
  },

  data () {
    return {
      properties: {
        text: '',
        textPos: 'center',
        textAlign: 'center',
        textPosI: 1,
        textAlignI: 1
      }
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        // Check if canvas can be downloaded
        this.isDownloadable = (
          properties.picture !== null
        )
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
      margin-bottom: .25rem;
    }
  }

  .hashtag {
    margin-top: .25rem;
  }

  .local-label {
    margin-top: .75rem;
  }

  .message-body {
    font-size: .85rem;
  }

  .pane-916 {
    display: flex;
    flex-direction: column;

    .text-wrapper {
      order: 1;
    }
  }
</style>

<style lang="scss">
  .text-align-group .tab-content {
    height: 0;
    padding: 0;
  }
</style>
