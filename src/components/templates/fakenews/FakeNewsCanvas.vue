<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel && banner.hasLocalLabel ? 'has-local-label' : '',
      'blobs-' + color
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="text" v-if="banner.text" :style="{ alignItems: banner.textPos, textAlign: banner.textAlign }">
      <div class="text-holder" contenteditable>
        <div class="text-lines" :style="{ fontSize: aspect === '11' ? fontSize('text', 80, 35, 110) : fontSize('text', 70, 25, 110) }">{{ banner.text | formatString }}</div>
      </div>
    </div>
    <div class="logo">
      <compromis-logo :mono="true" />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': banner.localLabel.length > 18 }" v-if="banner.localLabel && banner.hasLocalLabel">{{ banner.localLabel }}</div>
    </div>
    <div class="hashtag" v-if="aspect === '11'">
      {{ banner.hashtag }}
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'

export default {
  name: 'generic-canvas',

  mixins: [CanvasMixin]
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .text {
    display: flex;
    position: absolute;
    top: 155px;
    bottom: 175px;
    left: 0;
    z-index: 30;
    width: 100%;
    transition: all .5s ease-in-out;

    &-holder {
      width: 100%;
      padding: 0 45px;
      -webkit-line-break: normal;
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
      font-family: $family-primary;
      font-weight: bold;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      -webkit-line-break: normal;
    }
  }

  .blob {
    &-1 {
      left: -58%;
      top: -82%;
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
        transform: rotate(0);
      }
    }
  }

  .logo {
    color: $white;
    z-index: 20;

    &-local-label {
      color: $white;
    }
  }

  .hashtag {
    top: 20px;
    left: 35px;
    bottom: auto;
  }

  .has-local-label {
    .blob-2 {
      right: -40%;
    }
  }

  // Story aspect
  .aspect-916 {
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