<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel && banner.hasLocalLabel ? 'has-local-label' : ''
    ]"
    v-if="banner">
    <div class="blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="text" v-if="banner.text" :style="{ alignItems: banner.textPos, textAlign: banner.textAlign }">
      <div class="text-lines" :style="{ fontSize: aspect === '11' ? fontSize('text', 80, 35, 110) : fontSize('text', 70, 25, 110) }">{{ banner.text | formatString }}</div>
    </div>
    <div class="logo">
      <mescompromis-logo />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': banner.localLabel.length > 18 }" v-if="banner.localLabel && banner.hasLocalLabel">{{ banner.localLabel }}</div>
    </div>
    <div class="hashtag" v-if="aspect === '11'">
      {{ banner.hashtag }}
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'
import CampaignMixin from '@/mixins/campaign-mixin.js'

export default {
  name: 'campaign-generic-canvas',

  mixins: [CanvasMixin, CampaignMixin]
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
    font-family: "MesCompromis", serif;
    background: $cpn-red;
    padding: 1rem;
    border-radius: $cpn-sm-radius;

    &-holder {
      width: 100%;
      padding: 0 45px;
    }
  }

  .blob-image {
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

  .logo {
    color: $white;
    z-index: 20;

    &-local-label {
      border-left: 1px $white solid;
      color: $white;
    }
  }

  .hashtag {
    top: 20px;
    left: 35px;
    bottom: auto;
  }

  // Story aspect
  .aspect-916 {

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
