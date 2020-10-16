<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel && banner.hasLocalLabel ? 'has-local-label' : '',
      'blobs-' + color
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="marc">
      <Marc class="marcgeneric" v-if="this.color == 'normal'">></Marc>
    </div>
    <div class="marc">
      <Marc class="marcgeneric" v-if="this.color == 'feminista'" :feminista="true"></Marc>
    </div>
    <div class="marc">
      <Marc class="marcgeneric" v-if="this.color == 'lgtb'" :lgtb="true">> </Marc>
    </div>
    <div class="marc">
      <Marc class="marcgeneric" v-if="this.color == 'green'" :green="true">> </Marc>
    </div>
    <div class="marc">
      <Marc class="marcgeneric" v-if="this.color == 'red'" :red="true">> </Marc>
    </div>

    <div class="blob blob-2"></div>
    <div class="text" v-if="banner.text" :style="{ alignItems: banner.textPos, textAlign: banner.textAlign }">
      <text-in-pills
        v-if="banner.text"
        :text="$options.filters.formatString(banner.text)"
        :pill-style="banner.textColor"
        :text-align="banner.textAlign"
        :font-size="fontSizePrimary"
        :width="820" />
    </div>
    <emojis-on-canvas v-model="banner.emojis" />
    <div class="logo" v-if="!banner.name">
      <compromis-logo :mono="false" />
    </div>
    <div class="logo" v-if="banner.name && aspect == '11'" style="bottom: 5px; left: 17px;" >
      <TextColectiu class="nomcolectiu" :mono="false" :logoStyle="banner.name" style="height: 80px;"></TextColectiu>
    </div>
    <div class="logo" v-if="banner.name && aspect == '916'" style="bottom: 55px; left: 55px; width: 300px;" >
      <TextColectiu class="nomcolectiu" :mono="false" :logoStyle="banner.name" style="height: 80px;"></TextColectiu>
    </div>
    <div class="hashtag">
      {{ banner.hashtag }}
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin'
import EmojisOnCanvas from '@/utils/EmojisOnCanvas'
import TextInPills from '@/utils/TextInPills'
import TextColectiu from '@/utils/ColectiuLogo'
import Marc from '@/utils/generic2'

export default {
  name: 'generic-canvas',

  mixins: [CanvasMixin],

  components: {
    EmojisOnCanvas,
    TextInPills,
    TextColectiu,
    Marc
  },

  computed: {
    fontSizePrimary () {
      const { aspect, banner, fontSize } = this
      return aspect === '11'
        ? fontSize(banner.text, 70, 40, 90, banner.textSize)
        : fontSize(banner.text, 40, 25, 90, banner.textSize)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .text {
    display: flex;
    position: absolute;
    top: 150px;
    bottom: 150px;
    left: 100px;
    right: 100px;
    z-index: 30;
    transition: all .5s ease-in-out;
  }

  .marc {
    z-index: 30;
    top: -100px;
    right: -170px;
    width: 60%;
    position: absolute;

  }

  .blob {
    &-1 {
      left: -58%;
      top: -82%;
      z-index: 20;
      display: none;
    }

    &-2 {
      right: -57%;
      bottom: -81%;
      z-index: 20;
      --gradient-orientation: -45deg;
      display: none;

    }

    &-image {
      display: none;
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
  }

  .logo {
    color: $white;
    z-index: 20;
    left: 35px;

    &-local-label {
      color: $white;
    }
  }

.nomcolectiu {
    color: $white;
    z-index: 20;
  }

  .hashtag {
    color: $orange;
    bottom: 60px;
    left: 40px;
    width: 245px;
    text-align: left;
  }

  .has-local-label {
    .blob-2 {
      right: -40%;
    }
  }

  // Story aspect
  .aspect-916 {
  .text {
    display: flex;
    position: absolute;
    top: 200px;
    bottom: 300px;
    left: 60px;
    right: 60px;
    z-index: 30;
    transition: all .5s ease-in-out;
  }

.lines {
        font-size: 35px;

  }

    .marc {
      z-index: 30;
      top: -10px;
      right: -110px;
      width: 65%;
      position: absolute;
  }

    .quote {
      top: 370px;

      &-glyph {
        top: -105px;
        font-size: 140px;
      }

      &-text {
        font-size: 150px;
      }
    }

    .logo {
      width:250px;
      left: 80px;
      bottom: 80px;
    }

  .hashtag {
    color: $orange;
    bottom: 105px;
    width: 245px;
    left: 83px;
    text-align: center;
  }
  }

</style>
