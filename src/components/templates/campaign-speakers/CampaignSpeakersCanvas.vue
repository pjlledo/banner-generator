<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      aspect === '11' ? 'disposition-' + banner.disposition : '',
      banner.localLabel && banner.hasLocalLabel ? 'has-local-label' : '',
      banner.title.length > 30 && banner.speakers.length !== 2 ? 'has-long-title' : 'has-short-title',
      `has-${banner.speakers.length}-speakers`
    ]"
    v-if="banner">
    <div class="speakers-items">
      <div v-for="(speaker, i) in banner.speakers" :key="i" class="speakers-item">
        <div class="speakers-image">
          <img :src="speaker.picture" :alt="`Imatge de ${speaker.name}`" v-if="speaker.picture" />
        </div>
        <div class="speakers-name-wrapper">
          <div class="speakers-name">{{ speaker.name }}</div>
          <div class="speakers-description">{{ speaker.description }}</div>
        </div>
      </div>
    </div>
    <div :class="['speakers', computedComboPrimary]">
      <div class="speakers-overtitle">
        {{ banner.overtitle | formatString }}
      </div>
      <h2 class="speakers-title" :style="{ fontSize: aspect === '11' ? fontSize('title', 50, 35 , 60) : aspect === 'event' ? fontSize('title', 110, 80 , 60) : fontSize('title', 40, 27 , 60) }">
        {{ banner.title | formatString }}
      </h2>
    </div>
    <div  :class="['speakers-details-wrapper', computedComboSecondary]" v-if="aspect !== 'event'">
      <div class="speakers-details speakers-date" contenteditable>
        <font-awesome-icon :icon="['far', 'calendar-day']" fixed-width /> {{ banner.date | formatDate }}
      </div>
      <div class="speakers-details" contenteditable>
        <font-awesome-icon :icon="['far', 'clock']" fixed-width /> {{ banner.time | formatTime }}
      </div>
      <div class="speakers-details" contenteditable>
        <font-awesome-icon :icon="['far', 'map-marker-alt']" fixed-width /> {{ banner.place }}
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
  name: 'campaign-speaker-canvas',

  mixins: [CampaignMixin, CanvasMixin]
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .speakers {
    position: absolute;
    top: 45px;
    left: 30px;
    z-index: 40;
    padding: 24px;
    z-index: 20;
    transition: all .5s ease-in-out;
    font-family: 'MesCompromis', serif;
    border-radius: $cpn-sm-radius;
    max-width: 510px;

    &-overtitle {
      font-size: 24px;
      line-height: 1;
      letter-spacing: -1px;
      margin-bottom: .5rem;
    }

    &-title {
      font-size: 42px;
      line-height: 1;
      letter-spacing: -1px;
      word-wrap: break-word;
      font-weight: bold;
    }

    &-name {
      font-size: 18px;
      line-height: 1;
      font-weight: bold;
      letter-spacing: -0.5px;

      &-wrapper {
        background: $cpn-navy;
        color: $white;
        padding: 8px 10px;
        border-radius: $cpn-xs-radius;
        margin-top: -26px;
        margin-left: 16px;
        margin-right: 10px;
      }
    }

    &-description {
      padding-top: .25rem;
      font-size: 14px;
      line-height: 1;
      letter-spacing: -0.5px;
    }

    &-image {
      height: 200px;
      width: 100%;
      border-radius: $cpn-xs-radius;
      overflow: hidden;
      background: $gray-200;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-items {
      position: absolute;
      top: 30%;
      left: 60px;
      right: 45px;
      display: grid;
      margin-top: 1rem;
      grid-column-gap: 15px;
      justify-content: start;
      grid-template-columns: repeat(auto-fit, var(--image-size, 180px));
    }

    &-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &-details-wrapper {
      display: flex;
      position: absolute;
      bottom: 18%;
      padding: 16px;
      right: 45px;
      border-radius: $cpn-sm-radius;
      font-family: 'MesCompromis', sans-serif;
      max-width: 520px;
    }

    &-details {
      display: flex;
      align-items: center;
      font-size: 18px;
      letter-spacing: -1px;
      width: auto;
      padding-right: 1.25rem;
      line-height: 1.1;

      svg {
        padding-right: .5rem;
        font-size: 1.75rem;
      }
    }

    &-date {
      white-space: nowrap;
      flex-shrink: 0;
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

  .has-4-speakers {
    .speakers {
      &-items {
        --image-size: 135px;
      }

      &-image {
        height: 145px;
      }

      &-name {
        font-size: 13px;

        &-wrapper {
          margin-top: 10px;
          padding: 4px 6px;
        }
      }

      &-description {
        font-size: 11px;
      }
    }
  }

  // Story aspect
  .aspect-916 {
    .speakers {
      padding: 14px 20px;
      box-sizing: border-box;
      top: 88px;
      left: 20px;
      max-width: 340px;

      &-overtitle {
        font-size: 20px;
      }

      &-items {
        top: 215px;
        left: 45px;
        right: 30px;
        grid-row-gap: 10px;
        grid-column-gap: 0;
        justify-content: start;
        grid-template-columns: 1fr;
        height: 250px;
        align-content: center;
      }

      &-item {
        display: grid;
        grid-template-columns: var(--image-size, 75px) auto;
        grid-template-rows: 1fr;
        grid-template-areas:
          "image name";
        grid-column-gap: 10px;
        grid-row-gap: 5px;
      }

      &-name-wrapper {
        grid-area: name;
        align-self: center;
        margin: 0;
        margin-left: -25px;
        justify-self: start;
      }

      &-image {
        grid-area: image;
        height: 75px;
      }

      &-details-wrapper {
        padding: 14px 20px;
        left: 20px;
        right: 20px;
        box-sizing: border-box;
        flex-direction: column;
        bottom: 10%;
        max-width: 350px;
      }

      &-details {
        margin: .2rem 0;
        font-size: 17px;

        svg {
          margin-right: .25rem;
        }
      }
    }

    &.has-2-speakers {
      .speakers {
        &-item {
          --image-size: 90px;
        }

        &-image {
          height: 90px;
        }
      }
    }

    &.has-4-speakers {
      .speakers {
        &-item {
          --image-size: 60px;
          grid-row-gap: 0;
        }

        &-image {
          height: 60px;
        }
      }
    }

    .logo {
      display: none;
    }
  }

    // Event aspect
  .aspect-event {
    .blob {
      border-radius: 9rem;

      &-1 {
        top: -50%;
        left: 70%;
        z-index: 20;
      }

      &-2 {
        left: auto;
        bottom: -50%;
        right: 70%;
        z-index: 20;
      }
    }

    .speakers {
      padding: 40px;
      max-width: 1300px;
      border-radius: 1.5rem;
      margin: 2.5rem;

      &-title {
        line-height: 1.1;
      }

      &-items {
        --image-size: 415px;
        grid-column-gap: 35px;
        left: 80px;
        top: 45%;
      }

      &-image {
        height: 415px;
        border-radius: 1.2rem;
      }

      &-name-wrapper {
        max-width: 17rem;
        padding: 1rem;
        margin-top: -3rem;
      }

      &-name, &-description {
        font-size: 1.7rem;;
      }

      &-overtitle {
        font-size: 3rem;
      }
    }

    .logo {
      display: none;
    }

    &.has-2-speakers {
      .speakers-items {
        transform: scale(1.2) translateX(650px) translateY(20px);
      }
    }
  }
</style>
