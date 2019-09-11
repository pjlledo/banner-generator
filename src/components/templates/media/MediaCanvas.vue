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
    <div class="medium">
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
        <div class="medium-broadcast">
          <div v-if="banner.source" class="medium-channel" :style="{ backgroundImage: `url(${banner.source.logo$})`, backgroundColor: banner.source['color'], padding: banner.source['padding'] }"></div>
          <div v-if="banner.programme" class="medium-programme" :style="{ backgroundColor: banner.programme['color'], padding: `${banner.programme['padding']}rem` }">
            <img :src="banner.programme.logo" />
          </div>
        </div>
      </div>
    </div>
    <div class="logo">
      <compromis-logo />
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

  .medium {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 40;
    padding: 0 45px;
    width: 240px;
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

    &-channel, &-programme {
      display: inline-flex;
      margin: 1rem .5rem 0 0;
      background-color: $gray-800;
      border-radius: 5px;
      width: 50px;
      height: 50px;
      overflow: hidden;
      box-sizing: border-box;
    }

    &-broadcast {
      display: flex;
    }

    .icon {
        padding-right: .3rem;
    }
  }

  .blob {
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
