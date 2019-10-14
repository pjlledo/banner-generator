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
    v-if="banner"
  >
    <div class="blob blob-image">
      <img
        :src="banner.picturePreview"
        alt="Imatge"
        v-if="banner.picturePreview"
        :style="objectPosition"
      />
    </div>
    <div class="event">
      <div :class="['event-title-wrapper', computedComboPrimary]">
        <div class="event-overtitle">
          <span>{{ banner.overtitle | formatString }}</span>
        </div>
        <div
          v-if="banner.title"
          class="event-title"
          :style="{fontSize: aspect === 'event' ? fontSize('title', 155, 130, 60) : fontSize('title', 45, 30, 60)}"
        >
          <h2>{{ banner.title | formatString }}</h2>
        </div>
      </div>
      <div v-if="aspect !== 'event'" :class="['event-details-wrapper', computedComboSecondary]">
        <div class="event-details event-details-first" contenteditable>
          <b-icon icon="calendar-day" />
          {{ banner.date | formatDate }}
        </div>
        <div class="event-details" contenteditable>
          <b-icon icon="clock" />
          {{ banner.time | formatTime }}
        </div>
        <div class="event-details">
          <b-icon icon="map-marker-alt" />
          {{ banner.place }}
        </div>
      </div>
      <div class="event-speakers-wrapper" v-if="banner.speakers.length > 0 && aspect === '11'">
        <ul>
          <li v-for="(speaker, i) in banner.speakers" :key="i">{{ speaker.name }}</li>
        </ul>
      </div>
    </div>
    <div class="logo" v-if="aspect !== 'event'">
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
  name: 'campaign-quote-canvas',

  mixins: [CampaignMixin, CanvasMixin],

  computed: {
    isCrowded: function () {
      return (
        (this.banner.speakers.length > 2 &&
          (this.banner.title.length > 30 || this.banner.place.length > 50)) ||
        this.banner.speakers.length > 4
      )
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
    left: 0;
    height: 415px;
    z-index: 40;
    padding: 0 35px;
    flex-direction: column;
    justify-content: center;
    z-index: 20;
    transition: all 0.5s ease-in-out;
    font-family: "MesCompromis", serif;
    align-items: flex-start;

    &-title {
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -1px;
      display: inline;
      word-wrap: break-word;
      font-family: "MesCompromis", serif;
      font-weight: bold;

      &-wrapper {
        background: $cpn-red;
        padding: 1rem;
        border-radius: $cpn-sm-radius;
        max-width: 350px;
      }
    }

    &-overtitle {
      font-size: 18px;
      letter-spacing: -0.5px;
      line-height: 1.1;
      padding-bottom: 0.25rem;
    }

    &-details {
      padding-top: 0.75rem;
      display: flex;
      align-content: center;
      font-size: 17.5px;
      letter-spacing: -0.5px;

      &:first-child {
        padding-top: 0;
      }

      &-wrapper {
        margin-top: 1rem;
        background: $cpn-turquoise;
        padding: 1rem;
        border-radius: $cpn-sm-radius;
        margin-left: 2rem;
        max-width: 275px;
      }

      .icon {
        padding-right: 0.3rem;
        flex-shrink: 0;

        svg {
          width: 500px;
          height: 500px;
        }
      }
    }

    &-speakers {
      &-wrapper {
        margin-top: 1rem;
        max-width: 400px;

        ul {
          display: flex;
          flex-wrap: wrap;
        }

        li {
          background: $cpn-navy;
          color: $cpn-white;
          padding: 0.25rem 0.5rem;
          border-radius: $cpn-xs-radius;
          margin: 0 0.5rem 0.5rem 0;
        }
      }
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

  .hashtag {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: $cpn-navy;
    font-family: "MesCompromis", sans-serif;
  }

  .logo {
    width: 290px;
  }

  // Story aspect
  .aspect-916 {
    .blob {
      &-image {
        height: 404px;
        width: 431px;
        top: 0;
        left: 0;
        border-radius: 0;
      }
    }

  .event {
    top: 252px;
    width: 100%;
    height: 400px;
    box-sizing: border-box;

    &-overtitle {
      span {
        border-radius: 2px;
        letter-spacing: -1px;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
      }
    }

    &-title {
      font-size: 34px;
      line-height: 1.42;

      span {
        color: $white;
        padding: 0 10px;
        border-radius: 2px;
        background: $gradient;
        letter-spacing: -1px;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
      }
    }
  }

  .logo {
    display: none;
  }
}

// Event aspect
.aspect-event {
  .event {
    display: flex;
    align-items: center;
    top: 200px;
    bottom: 200px;
    width: 100%;
    height: auto;
    padding: 0 100px;
    box-sizing: border-box;

    &-title {
      &-wrapper {
        max-width: 80%;
        padding: 2rem;
      }
    }

    &-overtitle {
      font-size: 3rem;
      letter-spacing: -1px;
      font-weight: bold;
    }
  }

  .blob {
    &-image {
      transform: rotate(0);
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 0rem;

      img {
        transform: rotate(0) scale(1);
        margin: 0;
        height: 100%;
      }
    }
  }
}

// Title on top
.disposition-1 {
  .event {
    left: auto;
    right: 0;
    text-align: right;

    &-details {
      text-align: right;
      justify-content: flex-end;
      .icon {
        order: 1;
        margin-left: 0.25rem;
      }
    }
  }

  .blob-image {
    top: -3%;
    right: 41%;
    height: 550px;
    z-index: 20;
    width: 460px;
    border-radius: 0;
    border-bottom-right-radius: 5rem;
  }
}
</style>
