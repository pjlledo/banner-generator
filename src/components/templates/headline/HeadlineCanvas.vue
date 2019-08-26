<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + bannerProperties.disposition : '',
      bannerProperties.localLabel ? 'has-local-label' : '',
      bannerProperties.headline.length > 95 ? 'has-long-headline' : ''
    ]"
    v-if="bannerProperties">
    <div class="blob blob-image">
      <img :src="bannerProperties.picturePreview" alt="Imatge" v-if="bannerProperties.picturePreview" :style="objectPosition" />
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
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': bannerProperties.localLabel.length > 18 }" v-if="bannerProperties.localLabel && bannerProperties.hasLocalLabel">{{ bannerProperties.localLabel }}</div>
    </div>
    <div class="hashtag" v-if="bannerProperties.hashtag">
      {{ bannerProperties.hashtag }}
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo-compromis.svg'

export default {
  name: 'headline-canvas',

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
    },

    objectPosition: function () {
      const objectPosition = (this.bannerProperties.pictureAspect === 'vertical')
        ? '0% ' + this.bannerProperties.picturePos + '%'
        : this.bannerProperties.picturePos + '% 0%'
      return { objectPosition }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";
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
    transition: all .5s ease-in-out;
    background: $white;
  }

  .headline {
    position: absolute;
    top: 460px;
    left: 0;
    z-index: 30;
    padding: 0 40px;
    font-family: 'Tiempos Headline', serif;
    font-weight: 700;
    transition: all .5s ease-in-out;

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
    transition: all .5s ease-in-out;

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
      left: -30px;
      height: 440px;
      z-index: 20;
      background: $gray-300;
      width: 620px;

      img {
        transform: rotate(-$rotation) scale(1.15);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .logo {
    display: flex;
    position: absolute;
    right: 35px;
    bottom: 15px;
    align-items: center;

    img {
      height: 30px;
    }

    &-local-label {
      border-left: 1px $gray-400 solid;
      margin-left: .75rem;
      padding-left: .75rem;
      font-size: 1.25rem;
      letter-spacing: -.3px;
      line-height: 1;
      white-space: nowrap;

      &--long {
        font-size: .95rem;
        white-space: normal;
        width: 90px;
      }
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
    letter-spacing: -.3px;
  }

  .has-local-label {
    .blob-2 {
      left: -60%;
    }
  }

  // Square aspect
  .aspect-11 {
    .blob-image {
      border-bottom-left-radius: 0;
    }
  }

  // Story aspect
  .aspect-916 {
    width: 405px;

    .blob {
      &-1 {
        top: -43%;
        right: -120%;
      }

      &-2 {
        left: -110%;
        bottom: -94%;
      }

      &-image {
        top: -65px;
        left: -12px;
        width: 444px;
        border-bottom-right-radius: 0;
      }
    }

    .headline {
      top: 430px;

      &-text {
        font-size: 26px;
      }
    }

    .logo {
      display: none;
    }
  }

  // Headline on top
  .disposition-1 {
    .headline {
      top: 100px;
    }

    &.has-long-headline {
      .blob-image{
        bottom: -130px;
      }
    }

    &.has-local-label {
      .blob-1 {
        left: -60%;
        top: -88%;
      }
    }

    .logo {
      bottom: 666px;
    }

    .hashtag {
      bottom: 668px;
    }

    .blob {
      &-1 {
        top: -90%;
        left: -40%;
        bottom: auto;
        right: auto;
      }

      &-2 {
        display: none;
      }

      &-image {
        left: auto;
        top: auto;
        bottom: -90px;
        right: -80px;
        height: 570px;
      }
    }
  }
</style>
