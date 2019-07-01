<template>
  <div class="banner-workspace">
    <b-tabs class="banner-aspect" type="is-toggle-rounded" position="is-centered">
      <b-tab-item label="1:1" icon="square">
          
      </b-tab-item>
      <b-tab-item label="9:16" icon="mobile-android">
          
      </b-tab-item>
    </b-tabs>
    <component :is="componentBanner" :banner-properties="bannerProperties" aspect="1:1" />
    <button @click="download">Descarrega</button>
  </div>
</template>

<script>
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

export default {
  name: 'banner-workspace',

  props: {
    componentBanner: Object,
    bannerProperties: Object
  },

  methods: {
    download () {
      domtoimage.toPng(document.getElementById('bannerCanvas'), { bgcolor: '#fff', height: 720, width: 720 })
        .then(function (blob) {
          window.saveAs(blob, 'banner.png');
        })
    }
  }
}
</script>
