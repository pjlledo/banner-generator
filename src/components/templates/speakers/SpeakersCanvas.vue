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
    <div class="speakers-items">
      <div class="speakers-item">
        <div class="blob-image blob-image-1">
          <img :src="bannerProperties.picturePreview" alt="Imatge" v-if="bannerProperties.picturePreview" :style="objectPosition" />
        </div>
        <div class="speakers-name">Mónica Oltra</div>
        <div class="speakers-surname">Vicepresidenta de la Generalitat</div>
      </div>
      <div class="blob-image blob-image-2">
        <img :src="bannerProperties.picturePreview" alt="Imatge" v-if="bannerProperties.picturePreview" :style="objectPosition" />
      </div>
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="speakers" contenteditable>
      <div class="speakers-overtitle" contenteditable>
        {{ bannerProperties.title }}
      </div>
      <div class="speakers-title" contenteditable>
        {{ bannerProperties.title }}
      </div>
    </div>
    <div class="speakers-details-wrapper">
      <div class="speakers-details" contenteditable>
        <b-icon icon="calendar-day"/>{{ bannerProperties.date }}
      </div>
      <div class="speakers-details" contenteditable>
        <b-icon icon="clock"/>{{ bannerProperties.time }}
      </div>
      <div class="speakers-details" contenteditable>
        <b-icon icon="map-marker-alt"/>{{ bannerProperties.place }}
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

  .speakers {
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 40;
    padding: 0 45px;
    width: 650px;
    z-index: 20;
    transition: all .5s ease-in-out;
    font-family: 'Compromis', serif;

    &-overtitle {
      font-size: 24px;
      line-height: 1.1;
      color: $gray-700;
      letter-spacing: -1px;
      word-wrap: break-word;
    }

    &-title {
      font-size: 42px;
      line-height: 1.2;
      color: $gray-900;
      letter-spacing: -1px;
      display: inline;
      word-wrap: break-word;
      font-weight: bold;
    }

    &-name {
      padding-top: .75rem;
      font-size: 16px;
      line-height: 1;
      color: $gray-900;
      font-weight: bold;
    }

    &-surname {
      padding-top: .25rem;
      font-size: 14px;
      line-height: 1;
      color: $gray-700;
    }

    &-items {
      position: absolute;
      top: 30%;
      padding: 0 45px;
      display: grid;
      grid-column-gap: 15px;
      grid-template-columns: 188px 188px 188px;
      grid-template-rows: 188px;
    }

    &-details-wrapper {
      display: flex;
      position: absolute;
      bottom: 23%;
      padding: 0 45px;
    }

    &-details {
      display: flex;
      align-items: center;
      font-size: 19px;
      letter-spacing: -0.5px;
      width: auto;
      color: $gray-700;
      padding-right: .5rem;

      .icon {
        padding-right: .3rem;
        svg {
          width: 500px;
          height: 500px;
        }
      }
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
      top: -94%;
      left: 50%;
    }

    &-2 {
      left: -50%;
      bottom: -90%;
      z-index: 10;
    }

    &-image {
      border-radius: 20px;
      height: 100%;
      width: 100%;
      z-index: 20;
      background: $gray-300;

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

    .event {
      top: 360px;

      &-title {
        font-size: 34px;
        line-height: 1.42;
        color: white;
        padding: 0 10px;
        border-radius: 2px;
        background: linear-gradient(45deg,$gradient-start,$gradient-end);
        letter-spacing: -1px;
        display: inline;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
      }
    }

    .logo {
      display: none;
    }
  }

  // Quote on top
  .disposition-1 {
    .speakers {
      top: 38px;

      &-details-wrapper {
        position: absolute;
        bottom: -400px;
        right: -451px;
      }
    }

    &.has-local-label {
      .blob-2 {
        left: -60%;
        top: -88%;
      }
    }

    .hashtag {
      bottom: 668px;
    }

    .blob {
      &-1 {
        left: 69%;
        top: -60%;
      }

      &-2 {
        display: none;
      }

      &-image {
        left: auto;
        top: auto;
        bottom: -108px;
        right: 281px;
        height: 593px;
        width: 650px;
      }
    }
  }
</style>
