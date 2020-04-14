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
  }

  .careta {
    position: absolute;
    transform: rotate($rotation);
    z-index: 10;
    width: 500px;
    left: 100px;
    top: 100px;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
  }
</style>
