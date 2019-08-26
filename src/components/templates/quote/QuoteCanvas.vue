<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + bannerProperties.disposition : '',
      bannerProperties.localLabel ? 'has-local-label' : ''
    ]"
    v-if="bannerProperties">
    <div class="blob blob-image">
      <img :src="bannerProperties.picturePreview" alt="Imatge" v-if="bannerProperties.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-2"></div>
    <div class="quote">
      <div class="quote-glyph">“</div>
      <div class="quote-text" contenteditable>
        {{ bannerProperties.quote }}.”
      </div>
      <div class="quote-author" contenteditable>
        {{ bannerProperties.author }}
      </div>
    </div>
    <div class="logo">
      <img :src="logo" alt="Compromís" />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': bannerProperties.localLabel.length > 18 }" v-if="bannerProperties.localLabel && bannerProperties.hasLocalLabel">{{ bannerProperties.localLabel }}</div>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo-compromis.svg'

export default {
  name: 'quote-canvas',

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

  .quote {
    position: absolute;
    top: 200px;
    left: 0;
    z-index: 40;
    padding: 0 45px;
    width: 320px;
    z-index: 20;
    transition: all .5s ease-in-out;
    font-family: 'Compromis', serif;

    &-text {
      font-size: 32px;
      line-height: 1.42;
      color: white;
      padding: 0 10px;
      border-radius: 2px;
      background: linear-gradient(45deg,$gradient-start,$gradient-end);
      letter-spacing: -1px;
      display: inline;
      word-wrap: break-word;
      font-family: 'Compromis', serif;
      font-weight: bold;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
    }

    &-glyph {
      position: absolute;
      top: -123px;
      left: 35px;
      font-size: 170px;
      z-index: -10;
      background: -webkit-linear-gradient(45deg,$gradient-start,$gradient-end);
      font-weight: bold;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &-author {
      font-size: 19px;
      letter-spacing: -0.5px;
      margin-top: .75rem;
      line-height: 1.1;
      width: 150px;
      color: $gray-600;
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
      display: none;
    }

    &-2 {
      left: -67%;
      bottom: -88%;
      z-index: 10;
    }

    &-image {
      top: -15%;
      right: -14%;
      height: 680px;
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
        height: 540px;
        top: -48px;
        left: -12px;
        border-bottom-right-radius: 0;
      }
    }

    .quote {
      top: 370px;

      &-glyph {
        top: -105px;
        font-size: 140px;
      }

      &-text {
        font-size: 28px;
      }
    }

    .logo {
      display: none;
    }
  }

  // Quote on top
  .disposition-1 {
    .quote {
      top: 22%;
      width: 600px;
    }

    &.has-local-label {
      .blob-2 {
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
      &-2 {
        left: -50%;
        bottom: 90%;
      }

      &-image {
        left: auto;
        top: auto;
        bottom: -73px;
        right: -90px;
        height: 570px;
        width: 650px;
      }
    }
  }
</style>
