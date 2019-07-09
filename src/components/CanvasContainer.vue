<template>
  <div class="banner-workspace">
    <b-tabs class="banner-aspect" type="is-toggle-rounded" position="is-centered" v-model="aspect">
      <b-tab-item label="1:1" icon="square"></b-tab-item>
      <b-tab-item label="9:16" icon="mobile-android"></b-tab-item>
      <component :is="canvasComponent" :banner-properties="bannerProperties" :aspect="aspect ? '916' : '11'" />
    </b-tabs>

    <b-button type="is-primary" size="is-large" @click="download">Descarrega</b-button>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

export default {
  name: 'canvas-container',

  props: {
    canvasComponent: Function,
    bannerProperties: Object
  },

  data () {
    return {
      aspect: 0
    }
  },

  watch: {
    aspect: function () {
      EventBus.$emit('aspectUpdated', this.aspect)
    }
  },

  methods: {
    download () {
      const aspect = this.aspect === 1 ? '916' : '11'
      const dimensions = this.aspect === 1 ? { width: 405, height: 720 } : { width: 720, height: 720 }
      domtoimage.toPng(document.getElementById('bannerCanvas' + aspect), { bgcolor: '#fff', ...dimensions })
        .then(function (blob) {
          saveAs(blob, 'banner.png')
        })
    },

    cancel () {
      this.$emit('cancel', true)
    }
  }
}
</script>

<style lang="scss">
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
