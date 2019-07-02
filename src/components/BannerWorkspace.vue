<template>
  <div class="banner-workspace">
    <b-tabs class="banner-aspect" type="is-toggle-rounded" position="is-centered" v-model="aspect">
      <b-tab-item label="1:1" icon="square">
        <component :is="componentBanner" :banner-properties="bannerProperties" aspect="11" />
      </b-tab-item>
      <b-tab-item label="9:16" icon="mobile-android">
        <component :is="componentBanner" :banner-properties="bannerProperties" aspect="916" />
      </b-tab-item>
    </b-tabs>

    <b-button @click="download">Descarrega</b-button>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

export default {
  name: 'banner-workspace',

  props: {
    componentBanner: Object,
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
    }
  }
}
</script>
