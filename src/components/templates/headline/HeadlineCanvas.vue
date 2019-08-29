<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel ? 'has-local-label' : '',
      banner.headline.length > 95 ? 'has-long-headline' : ''
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div :class="sourceClass">
      <div class="headline-source headline-source--custom" v-if="banner.source === 'other'">
        <span :style="{ 'color': banner.customSourceColor }">{{ banner.customSource }}</span>
      </div>
      <div class="headline-source" v-else>
        <img :src="banner.source.logo" :alt="banner.source.name" :style="{ height: banner.source.logoHeight + 'px' }" />
      </div>
      <div class="headline-text" contenteditable :style="{ fontFamily: banner.source.fontFamily }">
        {{ banner.headline | formatString }}
      </div>
    </div>
    <div class="logo">
      <img :src="logo" alt="Compromís" />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': banner.localLabel.length > 18 }" v-if="banner.localLabel && banner.hasLocalLabel">{{ banner.localLabel }}</div>
    </div>
    <div class="hashtag" v-if="banner.hashtag && aspect === '11'">
      {{ banner.hashtag }}
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'

export default {
  name: 'headline-canvas',

  mixins: [CanvasMixin],

  computed: {
    sourceClass: function () {
      if (!this.banner) return
      const name = this.banner.source === 'other' ? 'other' : this.banner.source.id
      return {
        'headline': true,
        [name]: true
      }
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
