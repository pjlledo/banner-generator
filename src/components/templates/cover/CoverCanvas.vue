<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      'blobs-' + color
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img class="picture" :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="estrela" v-if="aspect === 'coverfb'">
      <careta class="careta" :logo-style="'mono'"></careta>
    </div>
    <div class="llagrimes" v-if="aspect === 'covertw'">
      <Llagrimes class="llagri"></llagrimes>
    </div>
    <div class="logotext">
      <logotext class="logotext" :logoStyle="banner.name"></logotext>
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'
import Careta from '@/utils/Estrela'
import logotext from '@/utils/logotext'
import Llagrimes from '@/utils/llagrimes'

export default {
  name: 'generic-canvas',

  mixins: [CanvasMixin],
  components: {
    Careta,
    logotext,
    Llagrimes
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";
  .banner-canvas .blob-image {
    background:#e85d0f;
  }
  .estrela {
    position: absolute;
    width: 30rem;
    height: 25rem;
    top: 35%;
    left: -6rem;
    z-index: 10;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));

  }
  .blob {
    &-image {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
      transform: rotate(0);
      border-radius: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: rotate(0);
        filter: grayscale(100%);
        mix-blend-mode: luminosity;
      }
    }
  }

  .logotext {
    z-index: 10;
    width: 45rem;
    bottom: 8%;
    position: absolute;
    left: 13rem;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.3));
  }

  .llagrimes {
    position: absolute;
    z-index: 10;
    width: 22rem;
    bottom: 37%;
    left: 2%;
    filter: drop-shadow(0px 0px 10px rgba(0,0,0,.5));
  }

  // CoverTW
  .aspect-covertw {
      .logotext {
        z-index: 10;
        width: 45rem;
        bottom: 8%;
        position: absolute;
        left: 19%;
        filter: drop-shadow(0px 0px 10px rgba(0,0,0,.3));
      }
  }
</style>
