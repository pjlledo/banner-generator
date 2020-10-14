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
    <div :id="'image' + color" class="blob blob-image">
      <img class="picture" :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
      <div class="quatribarrada" v-if="this.color == 'red'">
        </div>
    </div>
    <div class="marc">
      <Marc class="marcgeneric" :mono="true"></Marc>
    </div>
    <div class="text text-wysiwyg" v-if="banner.text">
      <div v-html="banner.text"></div>
        <div class="hashtag" v-if="aspect">
        {{ banner.hashtag }}
        </div>
    </div>
    <emojis-on-canvas v-model="banner.emojis" />
    <div class="logo">
      <compromis-logo :mono="true" v-if="!banner.name"/>
    </div>
    <div class="logo" v-if="banner.name && aspect == '11'" style="bottom: 15px; right: 17px;" >
      <TextColectiu class="nomcolectiu" :mono="true" :logoStyle="banner.name" style="height: 80px;"></TextColectiu>
    </div>
    <div class="logo" v-if="banner.name && aspect == '916'" style="bottom: 55px; left: 55px; width: 300px;" >
      <TextColectiu class="nomcolectiu" :mono="true" :logoStyle="banner.name" style="height: 80px;"></TextColectiu>
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'
import EmojisOnCanvas from '@/utils/EmojisOnCanvas'
import TextColectiu from '@/utils/ColectiuLogo'
import Marc from '@/utils/generic2'

export default {
  name: 'text-canvas',

  mixins: [CanvasMixin],

  components: {
    EmojisOnCanvas,
    TextColectiu,
    Marc
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .text {
    position: absolute;
    color: $white;
    bottom: 150px;
    top: 230px;
    left: 80px;
    right: 80px;
    z-index: 30;
    padding: 24px 24px;
    max-height: 340px;
    overflow: hidden;
    text-align: center;
  }

  .marc {
    z-index: 30;
    top: 105px;
    left: 300px;
    width: 15%;
    position: absolute;
    transform: rotate(-60deg);
    filter: drop-shadow(-2px 4px 1px #111111);

  }

  .blob {
    &-1 {
      left: -58%;
      top: -82%;
      z-index: 20;
    }

    &-2 {
      right: -57%;
      bottom: -81%;
      z-index: 20;
      --gradient-orientation: -45deg;
    }

    &-image {
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

    &-local-label {
      color: $white;
    }
  }

  .hashtag {
    color: $white;
    width: 480px;
    text-align: center;
    bottom: unset;
  }

  .has-local-label {
    .blob-2 {
      right: -40%;
    }
  }

  #imagenormal{
    background: radial-gradient(circle at top left, rgba(232,93,15,1) 0%, rgba(232,93,15,0.60) 50%, rgba(232,93,15,0) 100%);
    height: 720px;

    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: multiply;
    }
  }

  #imagefeminista{
    background: radial-gradient(circle at top left, rgba(109,35,127,1) 0%, rgba(109,35,127,0.60) 50%, rgba(109,35,127,0) 100%);
    height: 720px;

    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: multiply;
    }
  }

  #imagegreen{
    background: radial-gradient(circle at top left, rgba(9,128,55,1) 0%, rgba(9,128,55,0.60) 50%, rgba(19,128,55,0) 100%);
    height: 720px;

    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: multiply;
    }
  }

  #imagered{
    background: radial-gradient(circle at top left, rgba(224,14,24,1) 0%, rgba(224,14,24,0.60) 50%, rgba(19,128,55,0) 100%);
    height: 720px;

    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: multiply;
    }
  }

  #imagelgtb{
    background: linear-gradient(135deg, rgba(109,35,127,1) 0%, rgba(48,87,161,1) 21%, rgba(9,128,55,1) 41%, rgba(248,231,32,1) 62%, rgba(239,134,26,1) 82%, rgba(224,14,24,1) 100%);
    height: 720px;

    .picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: multiply;
    }
  }

  // Story aspect
  .aspect-916 {

    .text {
      left: 30px;
      right: 30px;
      top: 190px;
      bottom: 300px;
      padding: 16px;
    }

    .logo {
      width:250px;
      left: 80px;
      bottom: 80px;
    }

    .marc {
      z-index: 30;
      top: 105px;
      left: 160px;
      width: 20%;
      position: absolute;
    }

    .hashtag {
    color: $white;
    left: 86px;
    width: 167px;
    text-align: center;
  }
  }

</style>

<style lang="scss">
  @import "../../../sass/variables";

  .text-wysiwyg {
    font-size: 20px;

    & > div > *:first-child {
      margin-top: 0;
    }

    & > div > *:last-child {
      margin-bottom: 0;
    }

    & > div > h2:first-child {
      margin-top: -24px;
    }

    & > div > h2:last-child {
      margin-bottom: -24px;
    }

    h1 {
      font-size: 40px;
      letter-spacing: -1px;
      font-weight: bold;
      margin: 16px 0;
      line-height: 1.1;
    }

    h2 {
      padding: 16px 24px;
      margin: 16px -24px;
      font-size: 24px;
      font-weight: bold;
      letter-spacing: -.5px;
      line-height: 1.1;
    }

    p {
      line-height: 1.1;
      margin: 16px 0;
    }

    ol {
      margin: 16px 0;

      li {
        margin-left: 30px;
        line-height: 1;
        margin-bottom: 12px;
      }
    }

    ul {
      margin: 16px 0;

      li {
        padding-left: 30px;
        line-height: 1;
        margin-bottom: 12px;

        &::before {
          position: absolute;
          content: '➡️';
          color: $white;
          font-weight: bold;
          left: 24px;
        }
      }

      &[data-checked] {
        li::before {
          content: '✅';
        }
      }
    }

    u {
      color: $orange;
    }
  }

  .aspect-916 {
    .text-wysiwyg {
      & > div > h2:first-child {
        margin-top: -16px;
      }

      & > div > h2:last-child {
        margin-bottom: -16px;
      }

      h2 {
        padding: 16px;
        margin: 16px -16px;
        font-size: 20px;
      }

      ul {
        li {
          padding-left: 28px;

          &::before {
            left: 16px;
          }
        }
      }
    }
  }
</style>
