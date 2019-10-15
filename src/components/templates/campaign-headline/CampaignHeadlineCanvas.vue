<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      'disposition-' + banner.disposition
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="headline">
      <div class="headline-source headline-source--custom" v-if="banner.source === 'other'" :style="{ backgroundColor: banner.customSourceColor }">
        <span>{{ banner.customSource }}</span>
      </div>
      <div class="headline-source" v-else-if="banner.source" :style="{ backgroundColor: banner.source.color }">
        <img :src="banner.source.logo" :alt="banner.source.name" :style="{ height: banner.source.logoHeight + 'px' }" />
      </div>
      <div class="headline-text"
        :style="{
          fontFamily: banner.source ? banner.source.fontFamily : false,
          fontSize: aspect === '11' ? fontSize('headline', 50, 30, 160) : fontSize('headline', 35, 23.5, 160),
          letterSpacing: banner.source ? banner.source['letterSpacing'] : false
        }">
        {{ banner.headline | formatString }}
      </div>
    </div>
    <div class="blob-footer">
      <div class="hashtag" v-if="banner.slogan && aspect === '11'">
        {{ banner.slogan }}
      </div>
      <div class="logo">
        <mescompromis-logo />
        <div :class="{ 'logo-local-label': true, 'logo-local-label--long': banner.localLabel.length > 18 }" v-if="banner.localLabel && banner.hasLocalLabel">{{ banner.localLabel }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CampaignMixin from '@/mixins/campaign-mixin.js'
import CanvasMixin from '@/mixins/canvas-mixin.js'

export default {
  name: 'campaign-headline-canvas',

  mixins: [CampaignMixin, CanvasMixin]
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";
  @import "../../../sass/fonts";

  .headline {
    display: flex;
    position: absolute;
    bottom: 128px;
    left: 32px;
    right: 32px;
    z-index: 30;
    padding: 16px 32px;
    font-family: 'Tiempos Headline', serif;
    font-weight: 700;
    transition: all .5s ease-in-out;
    flex-direction: column;
    justify-content: center;
    border-radius: $cpn-sm-radius;
    background: $white;
    overflow: hidden;

    &-source {
      background: $cpn-navy;
      padding: 8px 32px;
      margin: -16px -32px 16px -32px;

      img {
        position: relative;
        top: 3px;
        filter: grayscale(100%) brightness(0) invert(1);
      }

      &--custom {
        font-size: 1.35rem;
        font-family: MesCompromis, sans-serif;
        color: $white;
      }
    }

    &-text {
      font-size: 27px;
      line-height: 1.1;
      word-wrap: break-word;
    }
  }

  .blob {
    &-image {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      border-radius: 0;
      transform: rotate(0);

      img {
        width: 100%;
        height: 100%;
        transform: rotate(0);
      }
    }

    &-footer {
      position: absolute;
      bottom: 32px;
      left: 32px;
      right: 32px;
      border-radius: $cpn-sm-radius;
      z-index: 30;
      background: $white;
      padding: 16px 32px;
      display: flex;

      .logo {
        position: relative;
        width: 290px;
        top: -2px;
        left: auto;
        right: auto;
        margin-left: auto;
      }

      .hashtag {
        position: static;
        color: $cpn-navy;
      }
    }
  }

  // Story aspect
  .aspect-916 {
    .headline {
      &-text {
        font-size: 20px;
      }
    }

    .blob {
      &-footer {
        display: none;
      }
    }
  }

  // Headline on top
  .disposition-1 {
    .headline {
      top: 300px;
      bottom: auto;
    }
  }

  .disposition-2 {
    .headline {
      top: 100px;
      bottom: auto;
    }
  }
</style>
