<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      banner.localLabel ? 'has-local-label' : '',
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      isCrowded ? 'is-crowded' : ''
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="event">
      <div class="event-overtitle" contenteditable>
        {{ banner.overtitle | formatString }}
      </div>
      <div class="event-title" contenteditable>
        <span>{{ banner.title | formatString }}</span>
      </div>
      <div class="event-details-wrapper" v-if="aspect !== 'event'">
        <div class="event-details" contenteditable>
          <b-icon icon="calendar-day"/> {{ banner.date | formatDate }}
        </div>
        <div class="event-details" contenteditable>
          <b-icon icon="clock"/> {{ banner.time | formatTime }}
        </div>
        <div class="event-details" contenteditable>
          <b-icon icon="map-marker-alt"/> {{ banner.place }}
        </div>
        <div class="event-details event-details--speakers" v-if="banner.speakers.length > 0 && aspect === '11'" contenteditable>
          <b-icon icon="keynote"/>
          <ul>
            <li v-for="(speaker, i) in banner.speakers" :key="i">
              {{ speaker.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="logo" v-if="aspect !== 'event'">
      <compromis-logo />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': banner.localLabel.length > 18 }" v-if="banner.localLabel && banner.hasLocalLabel">{{ banner.localLabel }}</div>
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'

export default {
  name: 'quote-canvas',

  mixins: [CanvasMixin],

  computed: {
    isCrowded: function () {
      return (this.banner.speakers && this.banner.title.length > 30) ||
        (this.banner.title.length > 40)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

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
      right: -4%;
      height: 618px;
      z-index: 20;
      width: 414px;
      border-radius: 0;
      border-bottom-left-radius: $border-radius;

      img {
        transform: rotate(-$rotation);
        width: 100%;
        height: 98%;
        margin: 28px -28px;
      }
    }
  }

  .is-crowded {
    .blob-2 {
      bottom: -85%;
    }
  }

  // Story aspect
  .aspect-916 {
    .blob {
      &-1 {
        display: none;
      }

      &-2 {
        left: -110%;
        bottom: -94%;
      }

      &-image {
        height: 404px;
        width: 431px;
        top: -23px;
        left: -3px;
        border-bottom-right-radius: 0;

        img {
          margin: 21px -5px;
          width: 98%;
        }
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
        background: $gradient;
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
    .event {
      position: static;

      &-title {
        position: absolute;
        bottom: 300px;
        left: 100px;
        right: 100px;
        z-index: 20;

        span {
          font-size: 10rem;
          background: $white;
          color: $gray-900;
          padding: .25rem 2rem;
          border-radius: 6px;
          line-height: 1.42;
          -webkit-box-decoration-break: clone;
          -webkit-line-break: normal;
          letter-spacing: -4px;
        }
      }

      &-overtitle {
        position: absolute;
        color: $white;
        font-size: 4rem;
        top: 40px;
        left: 100px;
        z-index: 20;
      }
    }

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
        --gradient-orientation: -45deg;
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
          margin: 0;
          height: 100%;
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
