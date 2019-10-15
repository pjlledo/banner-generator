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
    <div class='text' v-if="banner.text" :style="{ alignItems: banner.textPos, textAlign: banner.textAlign }">
      <div :class="['text-lines', computedComboPrimary]" :style="{ fontSize: aspect === '11' ? fontSize('text', 70, 35, 110) : fontSize('text', 70, 25, 110) }">{{ banner.text | formatString }}</div>
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
    top: 0;
    bottom: 70px;
    left: 0;
    z-index: 30;
    width: 100%;
    transition: all .5s ease-in-out;

    &-lines {
      width: 100%;
      padding: 0 45px;
      margin: 3rem;
      font-family: "MesCompromis", serif;
      background: $cpn-red;
      padding: 1rem;
      border-radius: $cpn-sm-radius;
      text-align: left;
      line-height: 1;
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

  .blob-footer {
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

  // Story aspect
  .aspect-916 {
    .blob-footer {
      display: none;
    }
    .text {
      top: 60px;
      bottom: 60px;
    }
  }
</style>
