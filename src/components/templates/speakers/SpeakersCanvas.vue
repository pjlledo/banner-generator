<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel && banner.hasLocalLabel ? 'has-local-label' : '',
      banner.title.length > 30 && banner.speakers.length !== 2 ? 'has-long-title' : 'has-short-title',
      `has-${banner.speakers.length}-speakers`,
      'blobs-' + color
    ]"
    v-if="banner">
    <div class="speakers-items">
      <div v-for="(speaker, i) in banner.speakers" :key="i" :class="['speakers-item','speakers-item' + i]">
        <div class="speakers-image">
          <img :src="speaker.picture" :alt="`Imatge de ${speaker.name}`" v-if="speaker.picture" />
        </div>
      </div>
    </div>
    <div class="blob blob-3"></div>
    <div class="blob blob-2"></div>
    <div class="speakers">
      <div
        class="speakers-title"
        :style="{
          fontSize: aspect === '11'
            ? fontSize(banner.title, 50, 35 , 60)
            : aspect === '916'
            ? fontSize(banner.title, 45, 28 , 60)
            : fontSize(banner.title, 40, 27 , 60)
        }">
        {{ banner.title | formatString }}
      </div>
      <div class="speakers-overtitle">
        {{ banner.overtitle | formatString }}
      </div>
      <div v-for="(speaker, i) in banner.speakers" :key="i" class="speakers-item">
      <div class="speakers-name">{{ speaker.name }}</div>
      </div>
    </div>
    <div class="speakers-details-wrapper" v-if="aspect !== 'event'">
      <div class="speakers-details speakers-date" contenteditable>
        <font-awesome-icon :icon="['far', 'calendar-day']" fixed-width /> {{ banner.date | formatDate }}
      </div>
      <div class="speakers-details" contenteditable>
        <font-awesome-icon :icon="['far', 'clock']" fixed-width /> {{ banner.time | formatTime }}
      </div>
    </div>
    <svg width="0" height="0">
      <radialGradient id="compromisGradient" r="150%" cx="30%" cy="107%">
        <stop class="gradient-start" offset="0" />
        <stop class="gradient-end" offset="1" />
      </radialGradient>
    </svg>
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
  components: {
    TextColectiu
  },

  mixins: [CanvasMixin]
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .speakers {
    position: absolute;
    top: 90px;
    left: 33px;
    padding: 20px 17px;
    transition: all .5s ease-in-out;
    font-family: $family-primary;
    z-index: 20;
    background-color: white;

    &-overtitle {
      font-size: 24px;
      line-height: 1;
      color: $gray-700;
      letter-spacing: -1px;
      margin-top: 8px;
    }

    &-title {
      font-size: 42px;
      line-height: 1;
      color: $gray-900;
      letter-spacing: -1px;
      word-wrap: break-word;
      font-weight: bold;
      width: 325px;
    }

    &-name {
      padding-top: 12px;
      font-size: 18px;
      line-height: 1;
      color: $gray-900;
      font-weight: lighter;
      letter-spacing: -0.5px;
    }

    &-description {
      padding-top: 4px;
      font-size: 14px;
      line-height: 1;
      letter-spacing: -0.5px;
      color: $gray-700;
    }

    &-image {
      height: 155px;
      width: 155px;
      border-radius: 16px;
      overflow: hidden;
      background: $gray-200;
      box-shadow: 6px 6px 6px 8px var(--shadow-color, rgba($gray-900, .15)),
    0 .9rem 1.4rem -.5rem var(--shadow-color, rgba($gray-900, .2)),
    0 -.75rem 1.4rem -.4rem var(--shadow-color, rgba($gray-900, .015));

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-items {
      z-index: 30;
      position: absolute;
      top: 5%;
      left: 530px;
      right: 45px;
      display: grid;
      margin-top: 40px;
      grid-row-gap: 80px;
      justify-content: start;
      grid-template-columns: repeat(auto-fit, var(--image-size, 200px));
    }

    &-details-wrapper {
      display: grid;
      grid-row-gap: 12px;
      position: absolute;
      bottom: 38%;
      left: 40px;
      padding: 0 45px;
    }

    &-details {
      display: flex;
      align-items: center;
      font-size: 18px;
      letter-spacing: -1px;
      width: auto;
      color: $gray-700;
      padding-right: 20px;
      line-height: 1.1;
      z-index: 30;

      svg {
        padding-right: 8px;
        font-size: 20px;

        * {
          fill: $gray-700;
        }
      }
    }

    &-date {
      white-space: nowrap;
      flex-shrink: 0;
    }
  }

  .blob {
    &-3 {
      background: $white !important;
      width: 70%;
      height: 90%;
      transform: none;
      left: -15%;
      border-radius: 3rem;
      z-index: 10;
      box-shadow: 6px 6px 6px 8px var(--shadow-color, rgba($gray-900, .15)),
    0 .9rem 1.4rem -.5rem var(--shadow-color, rgba($gray-900, .2)),
    0 -.75rem 1.4rem -.4rem var(--shadow-color, rgba($gray-900, .015));
    }

    &-2 {
      top: 0%;
      left: 0%;
      transform: none;
      border-radius: 0;
    }
  }

  .has-long-title {

    .speakers {
      top: 90px;
    }
  }

  .has-2-speakers {
    .blob-3 {
      background: $white;
      top: 1;
      width: 70%;
      height: 90%;
      transform: none;
      left: -15%;
      border-radius: 3rem;
      z-index: 10;
    }
  }
  .has-3-speakers
  {
    .speakers{
      &-items {
        margin-top: 20px;
        grid-row-gap: 65px;
        --image-size: 150px;
      }

      &-image {
        height: 155px;
        width: 155px;
      }
    }
  }
  .has-4-speakers {
    .speakers {
      &-items {
        margin-top: 0px;
        --image-size: 140px;
        grid-row-gap: 20px;
      }

      &-image {
        height: 140px;
        width: 140px;
      }
    }
  }

  .has-local-label {
    .blob-2 {
      left: -60%;
    }
  }

  .blobs-lgtb.has-2-speakers .blob-3 {
    background-size: 100% 68%;
  }

  .marc {
    display: none;
    top: 50px;
    left: 50px;
    width: 60%;
    position: absolute;
    transform: rotate(90deg) scaleX(-1);
    z-index: 15;
  }

  .marc2 {
      width: 430px;
      height: 430px;
      top: 50px;
      left: 52px;
      border-style: solid;
      position: absolute;
      border-radius: 3rem;
      z-index: 15;
    }

    #marc2normal {
      border-color: #e7600c;
      filter: drop-shadow(2px 2px 1px #8a3908);
      }

    #marc2lgtb {
      border-color: $gray-700;
      filter: drop-shadow(2px 2px 1px $gray-900);
    }

    #marc2feminista {
      border-color: #6D237F;
      filter: drop-shadow(2px 2px 1px #6D237F);
    }

    #marc2red {
      border-color: #e00e18;
      filter: drop-shadow(2px 2px 1px #9c0c13);
    }

    #marc2green {
      border-color: #098037;
      filter: drop-shadow(2px 2px 1px #065223);
    }

  .logo {
      bottom: 120px;
      left: 30px;
      z-index: 30;
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
      &-3 {
        width: 365px;
        height: 375px;
        bottom: -40px;
        left: 20px;
      }

      &-2 {
        left: 0;
        bottom: 0;
        --gradient-orientation: -45deg;
      }

      &-image {
        height: 540px;
        top: -160px;
        left: -12px;
        border-bottom-right-radius: 0;
      }
    }

    .speakers {
      top: 395px;
      left: 73px;
      width: 100%;
      height: 200px;
      width: 225px;
      display: grid;
      justify-content: center;
      z-index: 50;
      padding: 0 17px;

      &-title {
        width:100%;
        text-align: center;

      }
      &-overtitle{
        font-size: 22px;
        text-align: center;
      }

      &-items {
        top: 100px;
        left: 30px;
        right: 30px;
        grid-row-gap: 10px;
        grid-column-gap: 0;
        justify-content: start;
        grid-template-columns: 1fr 1fr;
        height: 250px;
        align-content: center;
      }

      &-item {
        display: grid;
        grid-template-rows: 1fr;
        grid-row-gap: 5px;
      }

      &-name {
        grid-area: name;
        align-self: center;
        padding-top: 3px;
        font-size: 16px;
      }

      &-image {
        grid-area: image;
        height: 75px;
      }

      &-details-wrapper {
        display: inline-flex;
        align-items: center;
        padding: 0 60px;
        width: 80%;
        box-sizing: border-box;
        bottom: 10%;
      }

      &-details {
        margin: 7px 0;
        font-size: 10px;

        svg {
          margin-right: 4px;
        }
      }
    }

    &.has-2-speakers {
      .speakers {
        &-item {
          --image-size: 90px;
        }

        &-image {
          height: 130px;
          width: 130px;
        }
      }
    }

    &.has-3-speakers {
      .speakers {
        &-items {
        display: flex;
        align-content: space-between;
        align-items: flex-end;
        justify-content: center;
        top: 170px;
        left: 40px;
        right: 40px;
        height: 150px;
      }

      &-item1{
        align-items: baseline;
      }
        &-item {
          height: 150px;
          width: 110px;
          --image-size: 90px;
          display:flex;
          align-items: end;
        }

        &-image {
          height: 90px;
          width: 90px;
        }
      }
    }

    &.has-4-speakers {
      .speakers {
        &-item {
          --image-size: 90px;
        }

        &-image {
        height: 120px;
        width: 120px;
      }
      }
    }

    .logo {
      width:250px;
      left: 80px;
      bottom: 40px;
    }
  }
</style>
