<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' || banner.card ? 'disposition-' + banner.disposition : '',
      banner.card ? 'cards' : 'no-cards',
      banner.localLabel && banner.hasLocalLabel ? 'has-local-label' : '',
      'blobs-' + color
    ]"
    v-if="banner">
    <div class="comparison-images">
      <img :src="banner.pictureBeforePreview" alt="Imatge" v-if="banner.pictureBeforePreview" :style="objectPositionBefore" />
      <img :src="banner.pictureAfterPreview" alt="Imatge" v-if="banner.pictureAfterPreview" :style="objectPositionAfter" />
    </div>
    <div class="blob blob-1">
      <div class="headline-source headline-source--custom" v-if="banner.source === 'other'" :style="banner.card ? { backgroundColor: banner.customSourceColor } : null">
        <span :style="banner.card ? { color: 'white' } : { color: banner.customSourceColor }">{{ banner.customSource }}</span>
      </div>
      <div class="headline-source" v-else-if="banner.source" :style="banner.card ? { backgroundColor: banner.source.color } : null">
        <img :src="banner.source.logo" :alt="banner.source.name" :style="{ height: banner.source.logoHeight + 'px' }" />
      </div>
    </div>
    <div class="blob blob-2"></div>
    <div class="comparison">
      <div class="comparison-text comparison-text-before"
        :style="{
          fontSize: fontSize('textBefore', 50, 30, 160),
        }">
        {{ banner.textBefore | formatString }}
      </div>
      <div class="comparison-text comparison-text-after"
        :style="{
          fontSize: fontSize('textAfter', 50, 30, 160),
        }">
        {{ banner.textAfter | formatString }}
      </div>
    </div>
    <div class="logo">
      <compromis-logo :mono="banner.card ? true : false" />
      <div :class="{ 'logo-local-label': true, 'logo-local-label--long': banner.localLabel.length > 18 }" v-if="banner.localLabel && banner.hasLocalLabel">{{ banner.localLabel }}</div>
    </div>
    <div class="hashtag" v-if="banner.hashtag && aspect === '11'">
      {{ banner.hashtag }}
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'

export default {
  name: 'headline-canvas',

  mixins: [CanvasMixin],

  computed: {
    objectPositionAfter: function () {
      const objectPosition = (100 - this.banner.pictureAfterPos) + '% 0%'
      return { objectPosition }
    },
    objectPositionBefore: function () {
      const objectPosition = (100 - this.banner.pictureBeforePos) + '% 0%'
      return { objectPosition }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";
  @import "../../../sass/fonts";

  .comparison {
    display: flex;
    position: absolute;
    top: 425px;
    left: 0;
    z-index: 30;
    height: 200px;
    padding: 0 40px;
    font-family: 'Compromis', sans-serif;
    font-weight: 700;
    transition: all .5s ease-in-out;
    flex-direction: column;
    justify-content: center;

    &-source {
      margin-bottom: .25rem;

      &--custom {
        margin-bottom: 4px;
        font-size: 1.35rem;
      }
    }

    &-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: .75rem;
      align-items: stretch;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      img {
        object-fit: cover;
      }
    }

    &-text {
      line-height: 1.1;
      word-wrap: break-word;
      background: $white;
      width: 265px;
      padding: 1rem;
      border-radius: $card-radius;
      box-shadow: $raised-shadow;
      position: absolute;
      top: -176%;

      &-after {
        top: auto;
        bottom: -3%;
        left: 490%;
      }
    }
  }

  .blob {
    &-1 {
      top: -83%;
      right: 50%;
      z-index: 10;
    }

    &-2 {
      left: 50%;
      bottom: -83%;
      z-index: 10;
    }
  }


  .has-local-label {
    .blob-2 {
      left: 48%;
      bottom: -81%;
    }
  }

  .logo {
   color: white;
    z-index: 20;
  }

</style>
