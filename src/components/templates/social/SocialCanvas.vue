<template>
  <div
    :id="'bannerCanvas' + aspect"
    class='banner-canvas'
    v-if="banner">
     <img class="picture" :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
     <careta class="careta" :logo-style="banner.logoStyle"></careta>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin'
import Careta from '@/utils/Careta'

export default {
  name: 'social-canvas',

  mixins: [CanvasMixin],

  components: {
    Careta
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
     background-image: linear-gradient(180deg,
      rgba(239,64,77,1) 0%,
      rgba(239,64,77,1) 12.5%,
      rgba(247,146,38,1) 12.5%,
      rgba(247,146,38,1) 25%,
      rgba(255,209,15,1) 25%,
      rgba(255,209,15,1) 37.5%,
      rgba(127,195,71,1) 37.5%,
      rgba(127,195,71,1) 50%,
      rgba(85,164,219,1) 50%,
      rgba(85,164,219,1) 62,5%,
      rgba(161,74,156,1) 62,5%,
      rgba(161,74,156,1) 75%);
    background-blend-mode: multiply;
  }

  .careta {
    position: absolute;
    transform: rotate($rotation);
    z-index: 10;
    width: 500px;
    left: 100px;
    top: 100px;
  }

  .banner-canvas {
   

  }
</style>
