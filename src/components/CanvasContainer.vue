<template>
  <div class="banner-workspace" v-if="banner">
    <b-tabs :class="['banner-aspect', `banner-aspect-${template.aspects[aspect]}`]" type="is-toggle-rounded" position="is-centered" v-model="aspect" @change="resize">
      <b-tab-item id="aspect-tabs" v-if="template.aspects.includes('11')" label="1:1" icon="square"></b-tab-item>
      <b-tab-item v-if="template.aspects.includes('916')" label="9:16" icon="mobile-android"></b-tab-item>
      <b-tab-item v-if="template.aspects.includes('event')" label="Portada" icon="rectangle-landscape"></b-tab-item>
      <div :class="['canvas-wrapper', `template-${template.id.toLowerCase()}`]" :style="{transform: `scale(${scale})`, margin: `${margin}rem`}">
        <component :is="canvasComponent" :banner="banner" :aspect="template.aspects[aspect]" />
      </div>
    </b-tabs>

    <div id="download-button" class="primary-download-button">
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
      margin: 0,
      aspects: {
        '11': { width: 720, height: 720, minScale: 0.35, maxScale: 1, minMargin: -15, maxMargin: 0 },
        '916': { width: 405, height: 720, minScale: 0.35, maxScale: 1, minMargin: -15, maxMargin: 0 },
        'event': { width: 1920, height: 1080, minScale: 0.25, maxScale: 0.5, minMargin: -25, maxMargin: -17 }
      }
    }
  },

  watch: {
    aspect: function () {
      EventBus.$emit('aspectUpdated', this.aspect)
    }
  },

  created () {
    this.resize()
    window.addEventListener('resize', this.handleWindowResize)
    EventBus.$on('download', this.download)
  },

  destroyed () {
    window.removeEventListener('resize', this.handleWindowResize)
  },

  methods: {
    resize () {
      this.handleWindowResize({ srcElement: window })
    },

    handleWindowResize (e) {
      const aspect = this.template.aspects[this.aspect]
      const minHeight = 450
      const maxHeight = 950
      const minScale = this.aspects[aspect].minScale
      const maxScale = this.aspects[aspect].maxScale
      const minMargin = this.aspects[aspect].minMargin
      const maxMargin = this.aspects[aspect].maxMargin
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

      const aspect = this.template.aspects[this.aspect]
      const dimensions = this.aspects[aspect]

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
    overflow: hidden;
    transition: all .5s ease-in-out;
    background: $white;
  }

  .canvas-wrapper {
    display: flex;
    justify-content: center;
    transition: .25 ease-in-out;
    border: 1px $white solid;
    outline: 1px $gray-900 solid;
  }

  .banner-aspect-916 .banner-canvas {
    width: 405px;
  }

  .banner-aspect-event .banner-canvas {
    width: 1920px;
    height: 1080px;
  }

  .primary-download-button {
    position: fixed;
    right: 2rem;
    bottom: 2rem;

    .button {
      transition: .25s ease-in-out;

      &:hover {
        transform: translateY(-4px);
        box-shadow: $raised-shadow;
      }

      &:active {
        transform: translateY(2px);
      }

      &-label {
        position: relative;
        top: -4px;
        overflow: hidden;
      }
    }
  }

  .template-social {
    border-radius: 100%;
    overflow: hidden;
    outline: 0;
    border-color: $gray-900;
  }

  @media (max-width: $xs-breakpoint) {
    .canvas-wrapper {
      transform: scale(0.4321) !important;
      margin: -12.49rem !important;
    }

    .banner-aspect-event {
      .canvas-wrapper {
        transform: scale(0.1871) !important;
        margin: -24.49rem !important;
      }
    }

    .b-tabs,
    .tab-content {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  @media (max-width: $xl-breakpoint) {
    .primary-download-button {
      top: 3.65rem;
      bottom: auto;

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
