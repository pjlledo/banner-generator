<template>
    <div class="nav">
      <div class="nav-back" ><button @click="cancel">x Tornar Enrere</button></div>
      <p class='nav-centered' >Generador de Targes / Tarja titular</p>
    </div>
</template>

<script>
import { EventBus } from '../event-bus.js'

export default {
  name: 'app-nav',
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
    padding: 1rem;
    display: flex;

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
