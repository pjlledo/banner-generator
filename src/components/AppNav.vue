<template>
  <div class="nav">
    <div class="nav-back"><b-button size="is-small" rounded inverted outlined type="is-primary" @click="isCardModalActive = true">x Tornar Enrere</b-button></div>
    <p class="nav-centered">{{ templateName }}</p>
    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
      <div class="card content">
          <h2>Atenció</h2>
          <p>Vols tancar l'editor i tornar a la pantalla d'escollir tarja?
          Es perdran els canvis no guardats.</p>
          <b-button type="is-primary" @click="cancel">Si, tancar.</b-button>
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
    padding: .75rem 2rem;
    display: flex;

    .card {
      padding: 2rem;
      border-radius: 1rem;

      .button {
        margin-right: 1rem;
      }

      p {
        display: block;
      }
    }

    &-back {
      width: 21rem;
      flex-shrink: 0;
    }

    &-centered {
      justify-self: center;
      width: 100%;
      text-align: center;
    }
  }
</style>
