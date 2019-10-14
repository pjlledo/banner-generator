<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : ''
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="quote">
      <div :class="['quote-glyph', `has-${currentPrimaryCombo}-text`]">“</div>
      <div :class="['quote-text-wrapper', computedComboPrimary]">
        <div class="quote-text" :style="{fontSize: aspect === '11' ? fontSize('quote', 47, 30, 140) : fontSize('quote', 47, 20, 140)}">
          {{ banner.quote | formatString }}<span v-if="banner.quote.substring(banner.quote.length - 1, banner.quote.length) !== '.'">.</span><span>”</span>
        </div>
      </div>
      <div :class="['quote-author', computedComboSecondary]">
        {{ banner.author | formatString }}
      </div>
    </div>
    <div class="logo">
      <mescompromis-logo />
    </div>
    <div class="hashtag" v-if="banner.hashtag && aspect === '11'">
      {{ banner.hashtag }}
    </div>
  </div>
</template>

<script>
import CampaignMixin from '@/mixins/campaign-mixin.js'
import CanvasMixin from '@/mixins/canvas-mixin.js'

export default {
  name: 'quote-canvas',

  mixins: [CampaignMixin, CanvasMixin]
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .quote {
    display: flex;
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 40;
    box-sizing: border-box;
    padding: 0 45px;
    width: 420px;
    height: 550px;
    z-index: 20;
    flex-direction: column;
    justify-content: center;
    transition: all .5s ease-in-out;
    font-family: 'MesCompromis', serif;
    align-items: flex-start;

    &-text {
      font-size: 32px;
      line-height: 1.1;
      color: white;
      padding: 0 10px;
      letter-spacing: -1px;
      word-wrap: break-word;
      font-weight: bold;

      &-wrapper {
        position: relative;
        border-radius: $cpn-sm-radius;
        padding: 10px;
      }
    }

    &-glyph {
      font-size: 170px;
      font-weight: bold;
      margin-bottom: -134px;
      margin-left: -10px;
      margin-top: -58px;
      transform: scaleX(-1) rotate(-180deg);
      transform-origin: 0 85px;
    }

    &-author {
      font-size: 19px;
      letter-spacing: -0.5px;
      margin-top: .75rem;
      line-height: 1.2;
      color: $gray-600;
      overflow: hidden;
      margin-left: 32px;
      padding: 10px;
      border-radius: $cpn-sm-radius;
      max-width: 220px;
    }
  }

  .blob {
    &-image {
      top: 30px;
      right: 30px;
      height: 580px;
      z-index: 20;
      width: 560px;
      border-radius: $cpn-bg-radius;
      transform: rotate(0);

      img {
        width: 100%;
        height: 100%;
        margin: 0;
        transform: rotate(0);
      }
    }
  }

  .logo {
    width: 290px;
  }

  .hashtag {
    position: absolute;
    left: 30px;
    bottom: 20px;
    color: $cpn-navy;
  }

  // Story aspect
  .aspect-916 {
    .quote {
      bottom: 153px;
      top: 221px;
      padding: 0 30px;
      height: 415px;
      justify-content: flex-end;
      width: 95%;

      &-text {
        font-size: 28px;
      }

      &-author {
        width: 100%;
        max-height: 120px;
      }

      &-glyph {
        margin-left: -2px;
      }
    }

    .blob {
      &-image {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0;

        img {
          width: 100%;
          margin: 0;
        }
      }
    }

    .logo {
      display: none;
    }
  }

  // Quote on top
  .disposition-1 {
    .quote {
      align-items: flex-end;
      right: 0;
      left: auto;
    }

    .blob {
      &-image {
        left: 30px;
        right: auto;
      }
    }
  }
</style>
