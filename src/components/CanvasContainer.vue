<template>
  <div class="banner-workspace" v-if="banner">
    <b-tabs :class="['banner-aspect', `banner-aspect-${template.aspects[aspect]}`]" type="is-toggle-rounded" position="is-centered" v-model="aspect">
      <b-tab-item v-if="template.aspects.includes('11')" label="1:1" icon="square"></b-tab-item>
      <b-tab-item v-if="template.aspects.includes('916')" label="9:16" icon="mobile-android"></b-tab-item>
      <b-tab-item v-if="template.aspects.includes('event')" label="Portada" icon="rectangle-landscape"></b-tab-item>
      <div class="canvas-container" :style="{transform: `scale(${scale})`, margin: `${margin}rem`}">
        <component :is="canvasComponent" :banner="banner" :aspect="template.aspects[aspect]" />
      </div>
    </b-tabs>

    <div class="download-button">
      <b-tooltip label="Has d'emplenar tots els camps necessaris" position="is-left" type="is-dark" :active="!isDownloadable && displayTooltip">
        <b-button type="is-primary" size="is-large" rounded @click="download">
          <b-icon icon="arrow-to-bottom" />
          <span class="button-label">Descarrega</span>
        </b-button>
      </b-tooltip>
    </div>
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
      displayTooltip: false,
      scale: 1,
      margin: 0
    }
  },

  watch: {
    aspect: function () {
      EventBus.$emit('aspectUpdated', this.aspect)
    }
  },

  created () {
    this.handleWindowResize({ srcElement: window })
    window.addEventListener("resize", this.handleWindowResize)
  },

  destroyed () {
    window.removeEventListener("resize", this.handleWindowResize)
  },

  methods: {
    handleWindowResize (e) {
      const minHeight = 450
      const maxHeight = 950
      const minScale = .35
      const maxScale = 1
      const minMargin = -15
      const maxMargin = 0
      const height = e.srcElement.innerHeight
      const propHeight = (height - minHeight) / (maxHeight - minHeight)

      if (height > maxHeight) { // Max scale
        this.scale = maxScale
        this.margin = maxMargin
      } else if (height < minHeight) { // Min scale
        this.scale = minScale
        this.margin = minMargin
      } else { // In-between
        this.scale = minScale + propHeight * (maxScale - minScale)
        this.margin = minMargin + propHeight * (maxMargin - minMargin)
      }
    },

    download () {
      if (!this.banner) return
      this.displayTooltip = true
      EventBus.$emit('checkForErrors', true)

      const aspects = {
        '11': { width: 720, height: 720 },
        '916': { width: 405, height: 720 },
        'event': { width: 1920, height: 1080 }
      }
      const aspect = this.template.aspects[this.aspect]
      const dimensions = aspects[aspect]

      if (this.isDownloadable) {
        domtoimage.toPng(document.getElementById('bannerCanvas' + aspect), { bgcolor: '#fff', ...dimensions })
          .then(function (blob) {
            saveAs(blob, 'banner.png')
          })
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../sass/variables";
  @import "../sass/banner";

  .banner-canvas {
    box-sizing: content-box;
    position: relative;
    width: 720px;
    height: 720px;
    border: 1px $white solid;
    outline: 1px $gray-900 solid;
    overflow: hidden;
    transition: all .5s ease-in-out;
    background: $white;
  }

  .banner-aspect-916 .banner-canvas {
    width: 405px;
  }

  .banner-aspect-event .banner-canvas {
    width: 1920px;
    height: 1080px;
  }

  .banner-aspect.banner-aspect-event .tab-content {
    transform: scale(.5);
    margin: -16rem -27rem;
  }

  .download-button {
    position: fixed;
    right: 2rem;
    bottom: 2rem;

    .button-label {
      position: relative;
      top: -4px;
      overflow: hidden;
    }
  }

  @media (max-width: 1400px) {
    .download-button {
      top: 3.65rem;

      .button {
        &-label {
          display: inline;
        }

        &.is-large {
          font-size: .85rem;
        }
        
        .icon {
          position: relative;
          top: 3px;
          height: .85rem;
          width: .85rem;
          margin-right: .35rem !important;
        }
      }
    }
  }
</style>
