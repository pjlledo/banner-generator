<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      banner.localLabel ? 'has-local-label' : '',
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      isCrowded ? 'is-crowded' : ''
    ]"
    v-if="banner">
    <div class="blob blob-image">
      <img :src="banner.picturePreview" alt="Imatge" v-if="banner.picturePreview" :style="objectPosition" />
    </div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="event">
      <div v-if="banner.title" class="event-title" :style="{fontSize: aspect === 'event' ? fontSize(banner.title, 75, 40, 60) : fontSize(banner.title, 45, 30, 60)}">
        <span>{{ banner.title | formatString }}</span>
      </div>
      <div class="event-overtitle">
        <span>{{ banner.overtitle | formatString }}</span>
      </div>
      <div class="event-details event-details--speakers" v-if="banner.speakers.length > 0 ">
          <ul>
            <li v-for="(speaker, i) in banner.speakers" :key="i">
              {{ speaker.name }}
            </li>
          </ul>
        </div>
      <div class="event-details-wrapper" v-if="aspect !== 'event'">
        <div class="event-details" contenteditable>
          <b-icon icon="calendar-day"/> {{ banner.date | formatDate }}
        </div>
        <div class="event-details" contenteditable>
          <b-icon icon="clock"/> {{ banner.time | formatTime }}
        </div>
        <!-- <div class="event-details">
          <b-icon icon="map-marker-alt"/> {{ banner.place }}
        </div> -->
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
    </div>

  <div :id="'marc2' + color" class ="marc2">
    </div>
  </div>
</template>

<script>
import CanvasMixin from '@/mixins/canvas-mixin.js'
import TextColectiu from '@/utils/ColectiuLogo'

export default {
  name: 'quote-canvas',

  mixins: [CanvasMixin],
  components: {
    TextColectiu
  },

  computed: {
    isCrowded: function () {
      return (this.banner.speakers.length > 2 && (this.banner.title.length > 30 || this.banner.place.length > 50)) ||
        this.banner.speakers.length > 4
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .event {
    display: flex;
    position: absolute;
    top: 90px;
    left: 16px;
    height: 380px;
    z-index: 40;
    padding: 0 35px;
    width: 260px;
    flex-direction: column;
    justify-content: center;
    z-index: 20;
    transition: all .5s ease-in-out;
    font-family: $family-primary;

    &-title {
      font-size: 40px;
      line-height: 1.1;
      color: $gray-900;
      letter-spacing: -1px;
      display: inline;
      word-wrap: break-word;
      font-family: $family-primary;
      font-weight: bold;
      background: $white;
    }

    &-overtitle {
      font-size: 22px;
      letter-spacing: -0.5px;
      color: $gray-700;
      line-height: 1.1;
      padding-bottom: 4px;
      background: $white;
    }

    &-details {
      padding-top: 12px;
      display: flex;
      align-content: center;
      font-size: 17.5px;
      letter-spacing: -0.5px;
      color: $gray-700;

      &-wrapper {
        margin-top: 16px;
        padding-left: 40px;
      }

      .icon {
        padding-right: 5px;
        flex-shrink: 0;

        svg {
          width: 500px;
          height: 500px;
        }
      }

      &--speakers {
        align-items: flex-start;
        background: $white;
        z-index: 300;
      }
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
      left: -60%;
      bottom: -74%;
      z-index: 10;
    }

    &-image {
      img {
        width: 100%;
        height: 100%;
        transform: none;
      }

      img {
        transform: rotate(-$rotation);
        width: 100%;
        height: 100%;
      }
    }
  }

  .marc {
    display: none;
    top: 50px;
    left: 50px;
    width: 60%;
    position: absolute;
    transform: rotate(90deg) scaleX(-1);
  }

  .marc2 {
      width: 430px;
      height: 430px;
      top: 50px;
      left: 52px;
      border-style: solid;
      z-index: 30;
      position: absolute;
      border-radius: 3rem;
      z-index:1;
    }

    #marc2normal {
      border-color: #e7600c;
      filter: drop-shadow(2px 2px 1px #e7600c);
      }

    #marc2lgtb {
      border-image: linear-gradient(135deg, rgba(109,35,127,1) 0%, rgba(48,87,161,1) 21%, rgba(9,128,55,1) 41%, rgba(248,231,32,1) 62%, rgba(239,134,26,1) 82%, rgba(224,14,24,1) 100%);
      filter: drop-shadow(2px 2px 1px #e3e3e3);
    }

    #marc2feminista {
      border-color: #6D237F;
      filter: drop-shadow(2px 2px 1px #6D237F);
    }

    #marc2red {
      border-color: #e00e18;
      filter: drop-shadow(2px 2px 1px #e00e18);
    }

    #marc2green {
      border-color: #098037;
      filter: drop-shadow(2px 2px 1px #098037);
    }

  .is-crowded {
    .event {
      height: auto;
      top: 100px;
    }
    .blob-2 {
      bottom: -88%;
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
    .marc2 {
      width: 330px;
      top: 400px;
      left: 35px;
      border-style: solid;
      z-index: 30;
      position: absolute;
      border-radius: 3rem;
      border-color: #e7600c;
      filter: drop-shadow(2px 2px 1px #e7600c);
    }

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

    .event {
      top: 395px;
      left: 40px;
      width: 100%;
      height: 240px;
      width: 330px;
      box-sizing: border-box;
      justify-content: flex-start;
      z-index: 50;

      &-overtitle {
        text-align: center;
        span{
          padding: 0 10px;
          border-radius: 2px;
          letter-spacing: -1px;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }
      }

      &-title {
        font-size: 34px;
        line-height: 1;
        text-align: center;

        span {
          color: $gray-900;
          padding: 0 10px;
          border-radius: 2px;
          background: $white;
          letter-spacing: -1px;
          box-decoration-break: clone;
          -webkit-box-decoration-break: clone;
        }
      }
      &-details {
        align-content: center;
        display: grid;
        padding-top: 5px;

        &--speakers {
          text-align: center;
          line-height: 1.1;
        }
      }
    }

    .marc {
      display: none;
    }

    .logo {
      width:250px;
      left: 80px;
      bottom: 40px;
    }
  }

</style>
