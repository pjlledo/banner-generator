<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel && banner.hasLocalLabel ? 'has-local-label' : '',
      banner.headline.length > 95 ? 'has-long-headline' : ''
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="headline">
      <div class="headline-source headline-source--custom" v-if="banner.source === 'other'">
        <span :style="{ 'color': banner.customSourceColor }">{{ banner.customSource }}</span>
      </div>
      <div class="headline-source" v-else-if="banner.source">
        <img :src="banner.source.logo" :alt="banner.source.name" :style="{ height: banner.source.logoHeight + 'px' }" />
      </div>
      <div class="headline-text"
        contenteditable
        :style="{
          fontFamily: banner.source ? banner.source.fontFamily : false,
          fontSize: aspect === '11' ? fontSize('headline', 50, 30, 160) : fontSize('headline', 35, 23.5, 160),
          letterSpacing: banner.source ? banner.source['letterSpacing'] : false
        }">
        {{ banner.headline | formatString }}
      </div>
    </div>
    <div class="logo">
      <compromis-logo />
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

  mixins: [CanvasMixin]
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

   @font-face {
    font-family: 'Gotham';
    src: url('../../../assets/fonts/gotham-bold-webfont.eot');
    src: url('../../../assets/fonts/gotham-bold-webfont.eot?#iefix') format('embedded-opentype'),
        url('../../../assets/fonts/gotham-bold-webfont.woff2') format('woff2'),
        url('../../../assets/fonts/gotham-bold-webfont.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  .headline {
    display: flex;
    position: absolute;
    top: 425px;
    left: 0;
    z-index: 30;
    height: 200px;
    padding: 0 40px;
    font-family: 'Tiempos Headline', serif;
    font-weight: 700;
    transition: all .5s ease-in-out;
    flex-direction: column;
    justify-content: center;

    &-source {
      margin-bottom: .25rem;

      &--custom {
        margin-bottom: 4px;
        font-size: 1.35rem;
      }
    }

    &-text {
      font-size: 27px;
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
      top: -25px;
      left: -30px;
      width: 620px;
      height: 410px;
      z-index: 20;
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      img {
        width: 98%;
        height: 100%;
        margin: 27px;
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
        top: -20px;
        left: -12px;
        width: 444px;
        height: 395px;
        border-bottom-right-radius: 0;

        img {
          width: 93%;
          margin: 15px 10px;
        }
      }
    }

    .headline {
      top: 430px;

      &-text {
        font-size: 20px;
      }
    }

    .logo {
      display: none;
    }
  }

  // Headline on top
  .disposition-1 {
    .headline {
      top: 90px;
      height: 172px;
    }

    .blob-image {
      img {
        margin: -29px -14px;
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
        right: 40%;
      }

      &-2 {
        opacity: 0;
      }

      &-image {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        top: 285px;
        left: 130px;
        height: 500px;
      }
    }
  }
</style>
