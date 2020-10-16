<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      'blobs-' + color
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="medium">
      <div class="medium-overtitle" v-if="aspect === '11'">
        <span>{{ banner.overtitle | formatString }}</span>
      </div>
      <div class="medium-title" :style="{fontSize: fontSize(banner.title, 60, 40, 30)}" v-if="aspect === '11'">
        <span>{{ banner.title | formatString }}</span>
      </div>
      <div class="medium-title" :style="{fontSize: fontSize(banner.title, 40, 28, 15)}" v-if="aspect === '916'">
        <span>{{ banner.title | formatString }}</span>
      </div>
      <div class="medium-subtitle">
        <span>{{ banner.subtitle | formatString }}</span>
      </div>
      <div class="medium-details">
        <div class="medium-day" contenteditable>
          <b-icon icon="calendar-day"/>{{ banner.date | formatDate }}
        </div>
        <div class="medium-time" contenteditable>
          <b-icon icon="clock"/>{{ banner.time | formatTime }}
        </div>
        <div class="medium-broadcast">
          <div v-if="banner.source"
            :class="{
              'medium-channel': true,
              'medium-channel-custom': banner.source === 'other'
            }"
            :style="{
              backgroundColor: banner.source === 'other' ? banner.customSourceColor : banner.source['color'],
              padding: banner.source['padding']
            }">
            <img v-if="banner.source !== 'other'" :src="banner.source.logo" />
            <span v-else>{{ banner.customSource }}</span>
          </div>
          <div v-if="banner.programme || (banner.programme === 'other' && banner.customProgramme)"
            :class="{
              'medium-programme': true,
              'medium-programme-custom': banner.programme === 'other'
            }"
            :style="{
              backgroundColor: banner.programme === 'other' ? banner.customProgrammeColor : banner.programme['color'],
              padding: banner.programme !== 'other' ? banner.programme['padding'] : null,
              width: banner.programme !== 'other' ? banner.programme['width'] : null,
            }">
            <img v-if="banner.programme !== 'other'" :src="banner.programme.logo" />
            <span v-else>{{ banner.customProgramme }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="logo" v-if="!banner.name">
      <compromis-logo :mono="false" />
    </div>
    <div class="logo" v-if="banner.name && aspect == '11'" style="bottom: 100px; left: 1px;" >
      <TextColectiu class="nomcolectiu" :mono="false" :logoStyle="banner.name" style="height: 76px;"></TextColectiu>
    </div>
    <div class="logo" v-if="banner.name && aspect == '916'" style="bottom: 20px; left: 55px; width: 300px;" >
      <TextColectiu class="nomcolectiu" :mono="false" :logoStyle="banner.name" style="height: 80px;"></TextColectiu>
    </div>

    <div class="marc">
      <Marc class="marcgeneric" v-if="this.color == 'normal'" :noquote="true">></Marc>
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

  <div class ="marc2" v-if="aspect == '916'">
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'
import Marc from '@/utils/generic'
import TextColectiu from '@/utils/ColectiuLogo'

export default {
  name: 'quote-canvas',

  mixins: [CanvasMixin],
  components: {
    Marc,
    TextColectiu
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .marc {
    z-index: 30;
    top: 50px;
    left: 50px;
    width: 60%;
    position: absolute;
    transform: rotate(90deg) scaleX(-1);

  }
  .marc2 {
    width: 330px;
    height: 350px;
    bottom: -40px;
    left: 35px;
    border-style: solid;
    z-index: 30;
    position: absolute;
    border-radius: 3rem;
    border-color: #e7600c;
    filter: drop-shadow(2px 2px 1px #e7600c);
  }

  .medium {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 110px;
    left: 50px;
    z-index: 40;
    padding: 0;
    width: 334px;
    height: 350px;
    z-index: 20;
    transition: all .5s ease-in-out;
    font-family: $family-primary;

    &-title {
      display: block;
      font-size: 33px;
      line-height: 1;
      color: $gray-900;
      letter-spacing: -1px;
      word-wrap: break-word;
      font-family: $family-primary;
      font-weight: bold;
      margin: 10px 0;
    }

    &-subtitle {
      display: flex;
      background: $white;
      font-size: 19px;
      letter-spacing: -0.5px;
      color: $gray-700;
      line-height: 1.1;
    }

    &-overtitle {
      display: flex;
      align-items: center;
      font-size: 19px;
      letter-spacing: -0.5px;
      color: $gray-700;
      line-height: 1.1;
    }

    &-details {
      padding-top: 48px;
      padding-left: 50px;
      font-size: 15px;
      letter-spacing: -0.5px;
    }

    &-day, &-time {
      display: flex;
      align-content: center;
      padding-top: 12px;
      color: $gray-700;
    }

    &-channel, &-programme {
      display: inline-flex;
      margin: 8px 8px 0 0;
      background-color: $gray-800;
      border-radius: 5px;
      width: 50px;
      height: 50px;
      overflow: hidden;
      box-sizing: border-box;
      flex-shrink: 0;

      &-custom {
        padding: 8px 16px;
        color: $white;
        font-weight: bold;
        width: 170px;
        align-items: center;
        height: auto;
        max-height: 50px;
        line-height: 1.1;
      }
    }

    &-broadcast {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      margin-top: 8px;
    }

    .icon {
      padding-right: 5px;
    }
  }

  .blob {
    &-1 {
      background: $white;
      top: 1;
      width: 70%;
      height: 90%;
      transform: none;
      left: -15%;
      border-radius: 3rem;
    }

    &-2 {
      display: none;
    }

    &-image {
      border-radius: 0;
      transform: none;

      img {
        width: 100%;
        height: 100%;
        transform: none;
      }
    }
  }

  .logo {
    bottom: 120px;
    left: 30px;
  }

  // Story aspect
  .aspect-916 {
    .blob {
      &-1 {
        width: 365px;
        height: 375px;
        bottom: -40px;
        left: 20px;
      }

      &-2 {
        left: -110%;
        bottom: -94%;
      }

      &-image {
        height: 100%;
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    .marc {
      display: none;
    }
    .medium {
      display: flex;
      left: 75px;
      top: 390px;
      width: 258px;
      height: 230px;
      box-sizing: border-box;
      background: $white;
      z-index: 40;

      &-title {
        font-size: 15px;
        text-align: center;

      }

      &-subtitle {
        text-align: center;
        display: grid;
      }
      &-details {
        padding-top: 0px;
        padding-left: 15px;
      }

      &-channel-custom, &-programme-custom {
        width: auto;
        flex-grow: 1;
      }

      &-time {
      padding-top: 14px;
    }
      &-day {
        padding-top: 0px;
      }

      &-title, &-subtitle, &-overtitle {
        span {
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
          letter-spacing: -1px;
          display: inline;
          line-height: 1.42;
          padding: 0 10px;
        }
      }

      &-overtitle,
      &-subtitle {
        span {
          background: $white;
          color: $gray-800;
        }
      }

      &-channel-custom ~ .medium-programme-custom,
      &-channel-custom {
        width: 47%;
      }
    }

    .logo {
      width:250px;
      left: 80px;
      bottom: 40px;
    }
  }
</style>
