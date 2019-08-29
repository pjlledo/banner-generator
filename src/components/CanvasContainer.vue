<template>
  <div class="banner-workspace" v-if="banner">
    <b-tabs class="banner-aspect" type="is-toggle-rounded" position="is-centered" v-model="aspect">
      <b-tab-item v-if="template.aspects.includes('11')" label="1:1" icon="square"></b-tab-item>
      <b-tab-item v-if="template.aspects.includes('916')" label="9:16" icon="mobile-android"></b-tab-item>
      <b-tab-item v-if="template.aspects.includes('event')" label="Portada" icon="rectangle-landscape"></b-tab-item>
      <component :is="canvasComponent" :banner="banner" :aspect="template.aspects[aspect]" />
    </b-tabs>

    <b-tooltip label="Has d'emplenar tots els camps necessaris" position="is-top" type="is-dark" :active="!isDownloadable && displayTooltip">
      <b-button type="is-primary" size="is-large" rounded @click="download">
        <b-icon icon="arrow-to-bottom" />
        <span class="button-label">Descarrega</span>
      </b-button>
    </b-tooltip>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

export default {
  name: 'canvas-container',

  props: {
    canvasComponent: Function,
    banner: Object,
    template: Object,
    isDownloadable: Boolean
  },

  data () {
    return {
      aspect: 0,
      displayTooltip: false
    }
  },

  watch: {
    aspect: function () {
      EventBus.$emit('aspectUpdated', this.aspect)
    }
  },

  methods: {
    download () {
      if (!this.banner) return
      this.displayTooltip = true
      EventBus.$emit('checkForErrors', true)

      if (this.isDownloadable) {
        const aspect = this.aspect === 1 ? '916' : '11'
        const dimensions = this.aspect === 1 ? { width: 405, height: 720 } : { width: 720, height: 720 }
        domtoimage.toPng(document.getElementById('bannerCanvas' + aspect), { bgcolor: '#fff', ...dimensions })
          .then(function (blob) {
            saveAs(blob, 'banner.png')
          })
      }
    },

    cancel () {
      this.$emit('cancel', true)
    }
  }
}
</script>

<style lang="scss">
  .button-label {
    position: relative;
    top: -4px;
  }

  @media (max-height: 900px) {
    .banner-aspect .tab-content {
      transform: scale(.75);
      margin: -5rem 0;
    }
  }

  @media (max-height: 700px) {
    .banner-aspect .tab-content {
      transform: scale(.7);
      margin: -6.5rem 0;
    }
  }
</style>
