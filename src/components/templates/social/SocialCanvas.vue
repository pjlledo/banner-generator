<template>
  <div
    :id="'bannerCanvas' + aspect"
    class='banner-canvas'
    v-if="banner">
    <div :id="'bannerCanvas' + aspect + banner.logoStyle">
      <img class="picture" :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
      <careta class="careta" :logo-style="banner.logoStyle"></careta>
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin'
import Careta from '@/utils/Estrela'
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

  .careta {
    position: absolute;
    z-index: 10;
    width: 500px;
    left: 109px;
    top: 100px;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
  }

  #bannerCanvas11mono {
    background-color: #e85d0f;
    height: 720px;

    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: multiply;
      filter: grayscale(100%);
    }
  }

  #bannerCanvas11feminista {
    background-color: #662D91;
    height: 720px;
    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: soft-light;
      filter: grayscale(100%);
    }
  }

  #bannerCanvas11lgtb {
    background-image: linear-gradient(90deg,
    rgba(234,32,36,1) 0%,
    rgba(234,32,36,1) 16.6%,
    rgba(246,150,30,1) 16.6%,
    rgba(246,150,30,1) 33.2%,
    rgba(244,232,22,1) 33.2%,
    rgba(244,232,22,1) 49.8%,
    rgba(18,153,71,1) 49.8%,
    rgba(18,153,71,1) 66.4%,
    rgba(58,84,162,1) 66.4%,
    rgba(58,84,162,1) 83%,
    rgba(196,39,142,1) 83%,
    rgba(196,39,142,1) 100%);
    height: 720px;
    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: hard-light;
      filter: grayscale(100%);
    }
  }

#bannerCanvas11quatri {
  background-image: linear-gradient(90deg,
  rgba(252,221,9,1) 0%,
  rgba(252,221,9,1) 11.1%,
  rgba(218,18,26,1) 11.1%,
  rgba(218,18,26,1) 22.2%,
  rgba(252,221,9,1) 22.2%,
  rgba(252,221,9,1) 33.3%,
  rgba(218,18,26,1) 33.3%,
  rgba(218,18,26,1) 44.4%,
  rgba(252,221,9,1) 44.4%,
  rgba(252,221,9,1) 55.5%,
  rgba(218,18,26,1) 55.5%,
  rgba(218,18,26,1) 66.6%,
  rgba(252,221,9,1) 66.6%,
  rgba(252,221,9,1) 77.7%,
  rgba(218,18,26,1) 77.7%,
  rgba(218,18,26,1) 88.8%,
  rgba(252,221,9,1) 88.8%,
  rgba(252,221,9,1) 100%);
  height: 720px;
    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: hard-light;
      filter: grayscale(100%);
    }
  }

</style>
