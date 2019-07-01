<template>
  <div id="bannerCanvas" :class="{ 'banner-canvas': true, 'aspect-11': aspect === '1:1', 'aspect-916': aspect === '9:16' }" v-if="bannerProperties">
    <div class="blob blob-image">
      <div class="blob-image-wrapper" v-if="bannerProperties">
        <img :src="bannerProperties.picturePreview" alt="Imatge" v-if="bannerProperties.picturePreview" />
      </div>
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div :class="sourceClass">
      <div class="headline-source headline-source--custom" v-if="bannerProperties.source === 'other'">
        <span :style="{ 'color': bannerProperties.customSourceColor }">{{ bannerProperties.customSource }}</span>
      </div>
      <div class="headline-source" v-else>
        <img :src="bannerProperties.source.logo" :alt="bannerProperties.source.name" :style="{ height: bannerProperties.source.logoHeight + 'px' }" />
      </div>
      <div class="headline-text" contenteditable :style="{ fontFamily: bannerProperties.source.fontFamily }">
        {{ bannerProperties.headline }}
      </div>
    </div>
    <div class="logo">
      <img :src="logo" alt="Compromís" />
    </div>
    <div class="hashtag" v-if="bannerProperties.hashtag">
      {{ bannerProperties.hashtag }}
    </div>
  </div>
</template>

<script>
import Logo from '../../../assets/logo-compromis.svg'

export default {
  name: 'HeadlineBanner',

  props: {
    bannerProperties: Object,
    aspect: String
  },

  data () {
    return {
      logo: Logo
    }
  },

  computed: {
    sourceClass: function () {
      if (!this.bannerProperties) return
      const name = this.bannerProperties.source === 'other' ? 'other' : this.bannerProperties.source.id
      return {
        'headline': true,
        [name]: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../variables";
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:700&display=swap');

  @font-face {
    font-family: 'Tiempos Headline';
    src: url('../../../assets/fonts/TiemposHeadline-Medium.eot');
    src: url('../../../assets/fonts/TiemposHeadline-Medium.eot?#iefix') format('embedded-opentype'),
        url('../../../assets/fonts/TiemposHeadline-Medium.woff2') format('woff2'),
        url('../../../assets/fonts/TiemposHeadline-Medium.woff') format('woff'),
        url('../../../assets/fonts/TiemposHeadline-Medium.svg#TiemposHeadline-Medium') format('svg');
    font-weight: 700;
    font-style: normal;
  }

  .banner-canvas {
    box-sizing: content-box;
    position: relative;
    width: 720px;
    height: 720px;
    border: 1px $white solid;
    outline: 1px $gray-900 solid;
    overflow: hidden;
  }

  .aspect-916 {
    width: 405px;
  }

  .headline {
    position: absolute;
    top: 460px;
    left: 0;
    z-index: 100;
    padding: 0 40px;
    font-family: 'Tiempos Headline', serif;
    font-weight: 700;

    &-source {
      margin-bottom: .25rem;

      &--custom {
        margin-bottom: 4px;
      }
    }

    &-text {
      font-size: 30px;
      line-height: 1.1;
      word-wrap: break-word;
    }
  }

  .blob {
    position: absolute;
    width: 720px;
    height: 720px;
    overflow: hidden;
    border-radius: $border-radius;
    background: linear-gradient(45deg,$gradient-start,$gradient-end);
    transform: rotate($rotation);

    &-1 {
      top: -42%;
      right: -55%;
      z-index: 10;
    }

    &-2 {
      left: -42%;
      bottom: -91%;
      z-index: 10;
    }

    &-image {
      top: -55px;
      left: -140px;
      height: 440px;
      z-index: 20;
      background: $gray-300;

      &-wrapper {
        margin: -10px;
        transform: rotate(-$rotation);

        img {
          width: 100%;
          height: 100%;
          // object-fit: cover;
        }
      }
    }
  }

  .logo {
    position: absolute;
    right: 35px;
    bottom: 15px;

    img {
      height: 30px;
    }
  }

  .hashtag {
    position: absolute;
    z-index: 30;
    bottom: 20px;
    left: 35px;
    color: $white;
    font-weight: bold;
    font-size: 20px;
  }
</style>
