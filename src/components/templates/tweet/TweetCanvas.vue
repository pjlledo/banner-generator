<template>
  <div
    :id="'bannerCanvas' + aspect"
    :class="[
      'banner-canvas',
      'aspect-' + aspect,
      `card-${banner.card}`,
      `background-${banner.backgroundColor}`,
      banner.localLabel && banner.hasLocalLabel ? 'has-local-label' : '',
    ]"
    v-if="banner">
    <div class="background">
      <img
        :src="banner.tweetEmbed.entities.media[0].media_url_https"
        v-if="banner.tweetEmbed && banner.tweetEmbed.entities['media'] && banner.showMedia"
        alt="Imatge"
        :style="objectPosition" />
    </div>
    <div class="tweet-wrapper">
      <div class="tweet" v-if="banner.tweetEmbed">
        <div class="tweet-user">
          <div class="tweet-user-pic">
            <img :src="banner.tweetEmbed.user.profile_image_url_https" />
          </div>
          <div class="tweet-user-name">
            <div class="tweet-user-full_name">
              {{ banner.tweetEmbed.user.name }}
              <span v-if="banner.tweetEmbed.user.verified" class="verified">
                <b-icon icon="badge-check" pack="fas" size="is-small" />
              </span>
            </div>
            <div class="tweet-user-screen_name">
              @{{ banner.tweetEmbed.user.screen_name }}
            </div>
          </div>
          <div class="tweet-icon">
            <b-icon icon="twitter" pack="fab" />
          </div>
        </div>
        <div class="tweet-text" :style="{ fontSize: textFontSize }" contenteditable v-html="tweetText"></div>
        <div class="tweet-quote" v-if="banner.tweetEmbed.is_quote_status">
          <div class="tweet-quote-user">
            <img :src="banner.tweetEmbed.quoted_status.user.profile_image_url_https" />
            <strong>{{ banner.tweetEmbed.quoted_status.user.name }}</strong>
            <b-icon icon="badge-check" pack="fas" size="is-small" v-if="banner.tweetEmbed.quoted_status.user.verified" class="verified" />
            <span class="tweet-quote-user-screen_name">@{{ banner.tweetEmbed.quoted_status.user.screen_name }}</span>
          </div>
          <div class="tweet-quote-text">{{ banner.tweetEmbed.quoted_status.full_text }}</div>
        </div>
        <div class="tweet-date">
          {{ banner.tweetEmbed.created_at | formatFullDate }}
        </div>
        <div class="tweet-counts">
          <div class="tweet-counts-rts">
            <b-icon icon="retweet" />
            <span v-if="banner.showCounts">{{ banner.tweetEmbed.retweet_count | formatNumber }}</span>
          </div>
          <div class="tweet-counts-faves">
            <b-icon icon="heart" />
            <span v-if="banner.showCounts">{{ banner.tweetEmbed.favorite_count | formatNumber }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="logo">
      <compromis-logo :mono="banner.backgroundColor === 'white' ? false : true" v-if="!banner.name"/>
    </div>
    <div class="logo" v-if="banner.name && aspect == '11'" style="bottom: 15px; right: 17px;" >
      <TextColectiu class="nomcolectiu" :mono="banner.backgroundColor === 'white' ? false : true" :logoStyle="banner.name" style="height: 80px;"></TextColectiu>
    </div>
    <div class="logo" v-if="banner.name && aspect == '916'" style="bottom: 55px; left: 55px; width: 300px;" >
      <TextColectiu class="nomcolectiu" :mono="banner.backgroundColor === 'white' ? false : true" :logoStyle="banner.name" style="height: 80px;"></TextColectiu>
    </div>
    <div>
      <Llagrimes class="llagrimes" :mono="banner.backgroundColor === 'white' ? false : true"></Llagrimes>
    </div>
    <div class="cta" v-if="banner.showCta && banner.cta && !banner.showHashtag">
      <span>{{ banner.cta }}</span>
        <div>
        <img src="./images/point-down.png" alt="" />
      </div>

    </div>
    <div class="hashtag" v-if="!banner.name && !banner.showCta && banner.showHashtag">
      {{ banner.hashtag }}
    </div>
    <div class="hashtag2" v-if="aspect && banner.name && !banner.showCta && banner.showHashtag">
      {{ banner.hashtag }}
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import CanvasMixin from '@/mixins/canvas-mixin.js'
import TextColectiu from '@/utils/ColectiuLogo'
import Llagrimes from '@/utils/generic2'

export default {
  name: 'tweet-canvas',

  mixins: [CanvasMixin],
  components: {
    TextColectiu,
    Llagrimes
  },

  computed: {
    textFontSize () {
      return this.fontSize(this.banner.tweetEmbed.full_text, 40, 24, 280, this.banner.textSize)
    },

    tweetText () {
      const text = this.banner.tweetEmbed.full_text
      const urlRegex = /(https?:\/\/[^\s]+)/g
      const hashtagRegex = /(^|\B)#(?![0-9_]+\b)([A-Za-zÀ-ÖØ-öø-ÿñ0-9_]{1,30})(\b|\r)/g
      const mentionRegex = /@[A-Za-z0-9_-]*/g
      return text
        .replace(urlRegex, '')
        .replace(hashtagRegex, (text) => `<span class="ht">${text}</span>`)
        .replace(mentionRegex, (text) => `<span class="ht">${text}</span>`)
    }
  },

  filters: {
    formatFullDate (date) {
      return moment(date).format('D MMMM [a les] H:mm')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .banner-canvas {
    --background: #{$gray-900};
    --base-color: #{$white};
    --quote-border-color: #{rgba($white, .75)};
    --twitter-color: #{$white};
    --link-color: #{$primary};
    --card-background: transparent;

    &.background-black {
      --shadow-color: rgba(0, 0, 0, .15);
    }

    &.background-white {
      --background: #{$white};
      --base-color: #{$gray-900};
      --quote-border-color: #{rgba($gray-900, .5)};
      --twitter-color: #1DA1F2;
    }

    &.background-orange {
      --background: #{$gradient};
      --link-color: #{$white};
      --link-decoration: underline;
    }

    &.background-lgbt {
      --background: #{$gradient-lgtb};
      --gradient-orientation: 153.5deg;
      --link-color: #{$white};
      --link-decoration: underline;
    }

    &.background-feminism {
      --background: #{$gradient-feminista};
      --link-color: #{$white};
      --link-decoration: underline;
    }

    &.background-green {
      --background: #{$gradient-green};
      --link-color: #{$white};
      --link-decoration: underline;
    }

    &.card-1 {
      --base-color: #{$gray-900};
      --twitter-color: #1DA1F2;
      --quote-border-color: #{$gray-300};
      --link-color: #{$primary};
      --link-decoration: none;
      --card-background: #{$white};
    }

    &.card-2 {
      --base-color: #{$white};
      --twitter-color: #{$white};
      --quote-border-color: #{$gray-600};
      --link-color: #{$primary};
      --link-decoration: none;
      --card-background: #{$gray-900};
    }
  }

  .hashtag {
    position: absolute;
    z-index: 30;
    bottom: 25px;
    left: 35px;
    color: $white;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.3px;
  }
  .hashtag2 {
    position: absolute;
    z-index: 30;
    bottom: 25px;
    left: 35px;
    color: $white;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.3px;
    bottom: 40px;
  }
  .background {
    background: var(--background);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      width: 100%;
      height: 100%;
      opacity: .15;
      object-fit: cover;
    }
  }

  .tweet {
    color: var(--base-color);
    border: px var(--base-color) solid;
    background-color: var(--card-background);
    border-radius: 3rem;
    padding: 30px;
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;

    &-wrapper {
      position: absolute;
      display: flex;
      align-items: center;
      top: 130px;
      left: 120px;
      right: 120px;
      bottom: 130px;
      z-index: 200;
    }

    &-user {
      display: flex;
      margin-bottom: 16px;
      line-height: 1.25;

      &-pic img {
        border-radius: 50%;
        margin-right: 12px;
      }

      &-name {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-weight: bold;
      }

      &-full_name {
        display: flex;
        align-items: center;
        font-size: 17px;

        .verified {
          display: flex;
          align-items: center;
          margin-left: 6px;
          color: var(--twitter-color);
        }
      }

      &-screen_name {
        font-weight: normal;
        opacity: .5;
      }
    }

    &-text {
      font-size: 28px;
      line-height: 1.25;
      white-space: pre-wrap;
    }

    &-quote {
      border: 1px var(--quote-border-color) solid;
      border-radius: .5rem;
      margin-top: 16px;
      padding: 12px;

      &-user {
        display: flex;
        align-items: center;
        margin-bottom: 6px;

        img {
          border-radius: 50%;
          width: 25px;
          height: 25px;
          margin-right: 8px;
        }

        strong {
          color: var(--base-color);
          margin-right: 6px;
        }

        &-screen_name {
          margin-left: 8px;
          opacity: .5;
        }

        .verified {
          color: var(--twitter-color);
        }
      }
    }

    &-date {
      margin: 16px 0 32px;
      opacity: .5;
    }

    &-icon {
      margin-left: auto;
      color: var(--twitter-color);
    }

    &-counts {
      display: flex;

      &-rts,
      &-faves {
        display: flex;
        align-items: center;
        margin-right: 26px;

        .icon {
          margin-right: 6px;
        }
      }
    }
  }

  .cta {
    display: flex;
    position: absolute;
    bottom: 18px;
    right: 490px;
    color: var(--base-color);
    font-size: 25px;
    align-items: center;
    font-weight: bold;
    letter-spacing: -.02em;

    img {
      display: block;
      width: 45px;
      height: 45px;
      margin-right: 10px;
    }

    div {
      display: flex;
      align-items: flex-end;
      height: 100%;
    }

    span {
      display: block;
      max-width: 130px;
      line-height: 1;
      text-align: right;
    }
  }
  .llagrimes {
    z-index: 30;
    top: 50px;
    right: 70px;
    width: 10%;
    position: absolute;
    transform: rotate(-7deg);
    filter: drop-shadow(3px 3px 1px $gray-900);
  }

  .logo {
    color: $white;
    z-index: 20;

    &-local-label {
      color: $white;
    }
  }

  .background-white .logo-local-label {
    color: $gray-600;
  }

  .card-1,
  .card-2 {
    .tweet {
      border: 0;
      box-shadow: 6px 6px 6px 8px var(--shadow-color, rgba($gray-900, .15)),
    0 .9rem 1.4rem -.5rem var(--shadow-color, rgba($gray-900, .2)),
    0 -.75rem 1.4rem -.4rem var(--shadow-color, rgba($gray-900, .015));
    }

    .cta {
      color: $white;
    }

    &.background-white .hashtag {
      color: $gray-900;
    }

    &.background-white .hashtag2{
      color: $gray-900;
    }

    &.background-white .cta {
      color: $gray-900;
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

    .llagrimes {
      z-index: 30;
      top: 140px;
      right: 10px;
      width: 12%;
      position: absolute;
      transform: rotate(-7deg);
      filter: drop-shadow(3px 3px 1px $gray-900);
  }

    .hashtag {
    color: $white;
    left: 80px;
    bottom: 110px;
    width: 250px;
    text-align: center;
    }

    .hashtag2 {
    color: $white;
    left: 80px;
    bottom: 110px;
    width: 250px;
    text-align: center;
    }

    .cta {
      right: 95px;
    }

    .tweet {
    color: var(--base-color);
    border: px var(--base-color) solid;
    background-color: var(--card-background);
    border-radius: 3rem;
    padding: 30px;
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;

    &-wrapper {
      position: absolute;
      display: flex;
      align-items: center;
      top: 200px;
      left: 40px;
      right: 40px;
      bottom: 250px;
      z-index: 200;
    }

    &-user {
      display: flex;
      margin-bottom: 16px;
      line-height: 1.25;

      &-pic img {
        border-radius: 50%;
        margin-right: 12px;
      }

      &-name {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-weight: bold;
      }

      &-full_name {
        display: flex;
        align-items: center;
        font-size: 13px;

        .verified {
          display: flex;
          align-items: center;
          margin-left: 6px;
          color: var(--twitter-color);
        }
      }

      &-screen_name {
        font-weight: normal;
        opacity: .5;
      }
    }

    &-text {
      font-size: 14px;
      line-height: 1.25;
      white-space: pre-wrap;
    }

    &-quote {
      border: 1px var(--quote-border-color) solid;
      border-radius: .5rem;
      margin-top: 16px;
      padding: 12px;

      &-text {
        font-size:10px;
      }

      &-user {
        display: flex;
        align-items: center;
        margin-bottom: 6px;

        img {
          border-radius: 50%;
          width: 25px;
          height: 25px;
          margin-right: 8px;
        }

        strong {
          color: var(--base-color);
          margin-right: 6px;
        }

        &-screen_name {
          margin-left: 8px;
          opacity: .5;
        }

        .verified {
          color: var(--twitter-color);
        }
      }
    }

    &-date {
      margin: 6px 0 6px;
      opacity: .5;
    }

    &-icon {
      margin-left: auto;
      color: var(--twitter-color);
    }

    &-counts {
      display: flex;

      &-rts,
      &-faves {
        display: flex;
        align-items: center;
        margin-right: 26px;

        .icon {
          margin-right: 6px;
        }
      }
    }
  }
  }

</style>
<style lang="scss">
.tweet {
  &-icon svg {
    width: 28px !important;
    height: 28px !important;
  }

  .ht {
    color: var(--link-color);
    text-decoration: var(--link-decoration, none);
  }
}
</style>
