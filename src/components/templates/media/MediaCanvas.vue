<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel ? 'has-local-label' : ''
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="medium" contenteditable>
      <div class="medium-overtitle" contenteditable>
        {{ banner.overtitle | formatString }}
      </div>
      <div class="medium-title" contenteditable>
        {{ banner.title | formatString }}
      </div>
      <div class="medium-subtitle" contenteditable>
        {{ banner.subtitle | formatString }}
      </div>
      <div class="medium-details">
        <div class="medium-day" contenteditable>
          <b-icon icon="calendar-day"/>{{ banner.date | formatDate }}
        </div>
        <div class="medium-time" contenteditable>
          <b-icon icon="clock"/>{{ banner.time | formatTime }}
        </div>
        <div v-if="banner.source" class="medium-channel" :style="{ backgroundImage: 'url(' + banner.source.logo + ')' }"></div>
        <div v-if="banner.programme" class="medium-programme" :style="{ backgroundColor: banner.programme.color }">
          <img :src="banner.programme.logo" />
        </div>
      </div>
    </div>
    <div class="logo">
      <img :src="logo" alt="Compromís" />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': banner.localLabel.length > 18 }" v-if="banner.localLabel && banner.hasLocalLabel">{{ banner.localLabel }}</div>
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'

export default {
  name: 'quote-canvas',

  mixins: [CanvasMixin]
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

  .medium {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 40;
    padding: 0 45px;
    width: 260px;
    z-index: 20;
    transition: all .5s ease-in-out;
    font-family: 'Compromis', serif;

    &-title {
      font-size: 30px;
      line-height: 1.2;
      color: $gray-900;
      letter-spacing: -1px;
      display: inline;
      word-wrap: break-word;
      font-family: 'Compromis', serif;
      font-weight: bold;
    }

    &-subtitle {
      display: flex;
      align-items: center;
      font-size: 19px;
      letter-spacing: -0.5px;
      color: $gray-700;
    }

    &-overtitle {
      display: flex;
      align-items: center;
      font-size: 19px;
      letter-spacing: -0.5px;
      color: $gray-700;
    }

    &-details {
      padding-top: 3rem;
    }

    &-day, &-time {
      display: flex;
      align-content: center;
      padding-top: .25rem;
    }

    &-channel, &-programme{
      display: inline-block;
      margin: 1rem .5rem 0 0;
      background-color: $gray-800;
      border-radius: 5px;
      width: 50px;
      height: 50px;
    }

    .icon {
        padding-right: .3rem;
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
      top: -87%;
      left: -74%;
    }

    &-2 {
      left: -63%;
      bottom: -74%;
      z-index: 10;
    }

    &-image {
      top: -15%;
      right: -32%;
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
    bottom: 25px;
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
        display: none;
      }

      &-2 {
        left: -110%;
        bottom: -94%;
      }

      &-image {
        height: 540px;
        top: -160px;
        left: -12px;
        border-bottom-right-radius: 0;
      }
    }

    .medium {
      top: 330px;

      &-title {
        font-size: 34px;
      }

      &-details {
        padding-top: 1.5rem;
      }

      &-title, &-subtitle, &-overtitle {
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
        color: white;
        border-radius: 2px;
        background: linear-gradient(45deg,$gradient-start,$gradient-end);
        letter-spacing: -1px;
        display: inline;
        line-height: 1.42;
        padding: 0 10px;
      }
    }

    .logo {
      display: none;
    }
  }

</style>
