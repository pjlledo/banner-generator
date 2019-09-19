<template>
  <div>
    <ul class="careta-selector">
      <li :class="{'active' : value === 'normal'}" @click="$emit('input', 'normal')">
          <careta logo-style="normal"></careta>
      </li>
      <li :class="{'active' : value === 'feminista'}" @click="$emit('input', 'feminista')">
          <careta logo-style="feminista"></careta>
      </li>
      <li :class="{'active' : value === 'lgtb'}" @click="$emit('input', 'lgtb')">
          <careta logo-style="lgtb"></careta>
      </li>
    </ul>
    <b-message v-if="value === 'feminista'" type="is-warning" size="is-small">
      El logo Compromís Feminista està pensat per ser utilitzat a les xarxes únicament
      el 8 de març o altres dates simbòliques del feminisme.
    </b-message>
    <b-message v-if="value === 'lgtb'" type="is-warning" size="is-small">
      El logo Compromís LGTB està pensat per ser utilitzat a les xarxes únicament
      durant el mes de l'orgull o altres dates simbòliques del moviment LGTB.
    </b-message>
  </div>
</template>

<script>
import Careta from './Careta'

export default {
  name: 'careta-selector',

  components: {
    Careta
  },

  props: {
    value: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style lang="scss">
@import "../sass/variables";

.careta-selector {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: .5rem;

  li {
    border: .25rem solid $gray-200;
    border-radius: .5rem;
    background: $gray-200;
    transition: .25s ease-in-out;

    svg {
      display: block;
      width: 100%;
      border: .5rem solid $white;
      border-radius: .3rem;
    }

    &:hover {
      border-color: $gray-400;
    }

    &.active {
      border-color: $primary;
      background: $white;

      svg {
        border-color: $white;
      }
    }
  }
}

.message-body {
  font-size: .85rem;
  margin-top: 1rem;
}
</style>
