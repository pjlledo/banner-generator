<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      bannerProperties.localLabel ? 'has-local-label' : '',
      aspect === '11' ? 'disposition-' + bannerProperties.disposition : '',
      isCrowded ? 'is-crowded' : ''
    ]"
    v-if="bannerProperties">
    <div class="blob blob-image">
      <img :src="bannerProperties.picturePreview" alt="Imatge" v-if="bannerProperties.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="event" contenteditable>
      <div class="event-overtitle" contenteditable>
        {{ bannerProperties.overtitle }}
      </div>
      <div class="event-title" contenteditable>
        {{ bannerProperties.title }}
      </div>
      <div class="event-details-wrapper" v-if="aspect !== 'event'">
        <div class="event-details" contenteditable>
          <b-icon icon="calendar-day"/> {{ bannerProperties.date | formatDate }}
        </div>
        <div class="event-details" contenteditable>
          <b-icon icon="clock"/> {{ bannerProperties.time | formatTime }}
        </div>
        <div class="event-details" contenteditable>
          <b-icon icon="map-marker-alt"/> {{ bannerProperties.place }}
        </div>
        <div class="event-details event-details--speakers" v-if="bannerProperties.speakers && aspect === '11'" contenteditable>
          <b-icon icon="keynote"/>
          <ul>
            <li v-for="(speaker, i) in bannerProperties.speakers" :key="i">
              {{ speaker.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="logo" v-if="aspect !== 'event'">
      <img :src="logo" alt="Compromís" />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': bannerProperties.localLabel.length > 18 }" v-if="bannerProperties.localLabel && bannerProperties.hasLocalLabel">{{ bannerProperties.localLabel }}</div>
    </div>
  </div>
</template>

<script>
import DateMixin from '@/mixins/date-mixin.js'
import Logo from '@/assets/logo-compromis.svg'

export default {
  name: 'quote-canvas',

  mixins: [DateMixin],

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
    },

    isCrowded: function () {
      return (this.bannerProperties.speakers && this.bannerProperties.title.length > 30) ||
        (this.bannerProperties.title.length > 40)
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

  .event {
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
      font-size: 40px;
      line-height: 1.2;
      color: $gray-900;
      letter-spacing: -1px;
      display: inline;
      word-wrap: break-word;
      font-family: 'Compromis', serif;
      font-weight: bold;
    }

    &-overtitle {
      font-size: 19px;
      letter-spacing: -0.5px;
      color: $gray-700;
    }

    &-details {
      padding-top: .9rem;
      display: flex;
      align-items: center;
      font-size: 19px;
      letter-spacing: -0.5px;
      width: 290px;
      color: $gray-700;

      .icon {
        padding-right: .3rem;
        svg {
          width: 500px;
          height: 500px;
        }
      }

      &--speakers {
        align-items: flex-start;
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
      top: -87%;
      left: -74%;
    }

    &-2 {
      left: -60%;
      bottom: -74%;
      z-index: 10;
    }

    &-image {
      top: -5%;
      right: -5%;
      height: 605px;
      width: 420px;
      z-index: 20;
      background: $gray-300;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;

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

  .is-crowded {
    .blob-2 {
      bottom: -85%;
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
        height: 410px;
        width: 440px;
        border-top-right-radius: 0;
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

  // Event aspect
  .aspect-event {
    width: 1920px;
    height: 1080px;
    transform: scale(.5);
    margin: -16rem -27rem;

    .blob {
      &-1 {
        top: -50%;
        left: -10%;
        z-index: 20;
      }

      &-2 {
        left: auto;
        bottom: -50%;
        right: -10%;
        z-index: 20;
      }

      &-image {
        transform: rotate(0);
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 0;

        img {
          transform: rotate(0) scale(1);
        }
      }
    }
  }

  // Title on top
  .disposition-1 {
    .event {
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
  }
</style>
