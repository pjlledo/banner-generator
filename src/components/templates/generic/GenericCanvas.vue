<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + bannerProperties.disposition : '',
      bannerProperties.localLabel && bannerProperties.hasLocalLabel ? 'has-local-label' : ''
    ]"
    v-if="bannerProperties">
    <div class="blob blob-image">
      <img :src="bannerProperties.picturePreview" alt="Imatge" v-if="bannerProperties.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="text" :style="{ alignItems: bannerProperties.textPos, textAlign: bannerProperties.textAlign }">
      <div class="text-holder">
        <div class="text-lines">{{ bannerProperties.text }}</div>
      </div>
    </div>
    <div class="logo">
      <img :src="logo" alt="Compromís" />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': bannerProperties.localLabel.length > 18 }" v-if="bannerProperties.localLabel && bannerProperties.hasLocalLabel">{{ bannerProperties.localLabel }}</div>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo-compromis-mono.svg'

export default {
  name: 'generic-canvas',

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

  .text {
    display: flex;
    position: absolute;
    top: 155px;
    bottom: 175px;
    left: 0;
    z-index: 40;
    width: 100%;
    transition: all .5s ease-in-out;

    &-holder {
      width: 100%;
    }

    &-lines {
      font-size: 45px;
      line-height: 1.42;
      color: white;
      padding: 0 10px;
      border-radius: 2px;
      background: linear-gradient(45deg,$gradient-start,$gradient-end);
      letter-spacing: -1px;
      display: inline;
      white-space: pre-wrap; 
      word-wrap: break-word;
      font-family: 'Compromis', serif;
      font-weight: bold;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      margin: 0 45px;
    }
  }

  .blob {
    position: absolute;
    width: 720px;
    height: 720px;
    overflow: hidden;
    border-radius: $border-radius;
    background: linear-gradient(var(--gradient-orientation, 45deg), $gradient-start, $gradient-end);
    transform: rotate($rotation);
    transition: all .5s ease-in-out;

    &-1 {
      left: -61%;
      top: -84%;
      z-index: 20;
    }

    &-2 {
      right: -57%;
      bottom: -81%;
      z-index: 20;
      --gradient-orientation: -45deg;
    }

    &-image {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
      background: $gray-300;
      transform: rotate(0);
      border-radius: 0;

      img {
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
    bottom: 25px;
    align-items: center;
    z-index: 30;
    color: $white;

    img {
      height: 30px;
    }

    &-local-label {
      border-left: 1px $white solid;
      color: $white;
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
      right: -40%;
    }
  }

  // Story aspect
  .aspect-916 {
    width: 405px;

    .blob {
      &-1 {
        top: -85%;
        left: -120%;
      }

      &-2 {
        right: -120%;
        bottom: -84%;
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
</style>
