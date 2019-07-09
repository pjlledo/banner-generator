<template>
  <div class="nav">
    <div class="nav-back">
      <b-button type="is-text" @click="isCardModalActive = true" class="back-button">
        <b-icon icon="chevron-left" />
        <span class="button-text">Enrere</span>
      </b-button>
    </div>
    <p class="nav-centered">{{ templateName }}</p>
    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
      <div class="card content">
          <b-icon icon="exclamation-triangle" size="is-large" /><h2>Atenció</h2>
          <p>Vols tancar l'editor i tornar a la pantalla d'escollir tarja?
          Es perdran els canvis no guardats.</p>
          <b-button type="is-primary" @click="cancel">Si, tancar</b-button>
          <b-button type="is-light" @click="isCardModalActive = false">No, seguir editant</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'

export default {
  name: 'app-nav',

  props: {
    templateName: String
  },

  data () {
    return {
      isCardModalActive: false
    }
  },

  methods: {
    cancel () {
      EventBus.$emit('closeBanner', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

  .nav {
    color: $white;
    background-color: $gray-900;
    padding: .25rem 2rem;
    display: flex;

    .back-button {
      margin-left: -.75rem;
    }

    .button {
      &-text {
        position: relative;
        top: -6px;
      }

      &.is-text {
        color: $white;
        text-decoration: none;
        transition: .2s ease-in-out;

        &:hover {
          background-color: rgba($white, 0.15);
          text-decoration: none;
        }

        &:active {
          background-color: rgba($white, 0.35);
        }

        &:focus {
          background-color: rgba($white, 0.35);
        }
      }

      .icon {
        transition: .2s ease-in-out;
      }

      &:hover {
        .icon {
          transform: translateX(-3px);
        }
      }
    }

    .card {
      padding: 2rem;
      border-radius: 1rem;

      .button {
        margin-right: 1rem;
      }

      p {
        display: block;
      }

      h2 {
        display: inline;
      }

      .icon.is-large {
      margin-left: -.75rem;
      }
    }

    &-back {
      width: 21rem;
      flex-shrink: 0;
    }

    &-centered {
      display: flex;
      align-items: center;
      justify-content: center;
      justify-self: center;
      width: 100%;
      text-align: center;
    }
  }
</style>
