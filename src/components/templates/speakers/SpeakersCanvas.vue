<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel ? 'has-local-label' : '',
      banner.title.length > 30 ? 'has-long-title' : 'has-short-title'
    ]"
    v-if="banner">
    <div class="speakers-items">
      <div v-for="(speaker, i) in banner.speakers" :key="i" class="speakers-item">
        <div class="speakers-image">
          <img :src="speaker.picture" :alt="`Imatge de ${speaker.name}`" v-if="speaker.picture" />
        </div>
        <div class="speakers-name">{{ speaker.name }}</div>
        <div class="speakers-description">{{ speaker.description }}</div>
      </div>
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="speakers" contenteditable>
      <div class="speakers-overtitle" contenteditable>
        {{ banner.overtitle | formatString }}
      </div>
      <div class="speakers-title" contenteditable>
        {{ banner.title | formatString }}
      </div>
    </div>
    <div class="speakers-details-wrapper" v-if="aspect !== 'event'">
      <div class="speakers-details" contenteditable>
        <b-icon icon="calendar-day"/>{{ banner.date | formatDate }}
      </div>
      <div class="speakers-details" contenteditable>
        <b-icon icon="clock"/>{{ banner.time | formatTime }}
      </div>
      <div class="speakers-details" contenteditable>
        <b-icon icon="map-marker-alt"/>{{ banner.place }}
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

  .speakers {
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 40;
    padding: 0 45px;
    z-index: 20;
    transition: all .5s ease-in-out;
    font-family: 'Compromis', serif;

    &-overtitle {
      font-size: 24px;
      line-height: 1;
      color: $gray-700;
      letter-spacing: -1px;
      margin-bottom: .5rem;
    }

    &-title {
      font-size: 42px;
      line-height: 1;
      color: $gray-900;
      letter-spacing: -1px;
      word-wrap: break-word;
      font-weight: bold;
      width: 325px;
    }

    &-name {
      padding-top: .75rem;
      font-size: 18px;
      line-height: 1;
      color: $gray-900;
      font-weight: bold;
    }

    &-description {
      padding-top: .25rem;
      font-size: 14px;
      line-height: 1;
      color: $gray-700;
    }

    &-image {
      height: 200px;
      border-radius: 1rem;
      overflow: hidden;
      background: $gray-200;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-items {
      position: absolute;
      top: 30%;
      left: 45px;
      right: 45px;
      display: grid;
      grid-column-gap: 15px;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, 200px);
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
    &-1 {
      top: -83%;
      left: 50%;
    }

    &-2 {
      left: -50%;
      bottom: -90%;
      z-index: 10;
    }
  }

  .has-long-title {
    .blob-1 {
      top: -93%;
    }

    .speakers {
      top: 80px;

      &-title {
        width: auto;
      }
    }
  }

  .has-local-label {
    .blob-2 {
      left: -60%;
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

    // Event aspect
  .aspect-event {
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
</style>
