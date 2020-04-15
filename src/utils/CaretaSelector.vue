<template>
  <div>
    <ul :class="{'careta-selector': true, 'is-rounded': isRounded }">
      <li :class="{'normal' : true, 'active': value === 'mono'}" @click="$emit('input', 'mono')"
      style=" background: #f4813e;">
          <careta v-if="!isRounded" logo-style="mono"></careta>
      </li>
      <li :class="{'feminista' : true, 'active': value === 'feminista'}" @click="$emit('input', 'feminista')"
      style=" background: #662D91">
          <careta v-if="!isRounded" logo-style="feminista"></careta>
      </li>
      <li :class="{'lgtb' : true, 'active': value === 'lgtb'}" @click="$emit('input', 'lgtb')">
          <careta v-if="!isRounded" logo-style="lgtb"></careta>
      </li>
      <li :class="{'quatri' : true, 'active': value === 'quatri'}" @click="$emit('input', 'quatri')">
        <careta v-if="!isRounded" logo-style="quatri"></careta>
      </li>
    </ul>
    <b-message v-if="value === 'feminista' && isRounded === false" type="is-warning" size="is-small">
      El logo Compromís Feminista està pensat per ser utilitzat a les xarxes únicament
      el 8 de març o altres dates simbòliques del feminisme.
    </b-message>
    <b-message v-if="value === 'lgtb' && isRounded === false" type="is-warning" size="is-small">
      El logo Compromís LGTB està pensat per ser utilitzat a les xarxes únicament
      durant el mes de l'orgull o altres dates simbòliques del moviment LGTB.
    </b-message>
    <b-message v-if="value === 'quatri' && isRounded === false" type="is-warning" size="is-small">
      El logo de la quatribarrada està pensat per ser utilitzat a les xarxes únicament
      durant les dates properes al 9 d'octubre.
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
    isRounded: {
      type: Boolean,
      default: false
    },
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
    &.lgtb {
      background-image: linear-gradient(90deg,
        rgba(234,32,36,1) 0%,
        rgba(234,32,36,1) 16.6%,
        rgba(246,150,30,1) 16.6%,
        rgba(246,150,30,1) 33.2%,
        rgba(244,232,22,1) 33.2%,
        rgba(244,232,22,1) 49.8%,
        rgba(18,153,71,1) 49.8%,
        rgba(18,153,71,1) 66.4%,
        rgba(58,84,162,1) 66.4%,
        rgba(58,84,162,1) 83%,
        rgba(196,39,142,1) 83%,
        rgba(196,39,142,1) 100%);
    }

    &.quatri {
      background-image: linear-gradient(90deg,
        rgba(252,221,9,1) 0%,
        rgba(252,221,9,1) 11.1%,
        rgba(218,18,26,1) 11.1%,
        rgba(218,18,26,1) 22.2%,
        rgba(252,221,9,1) 22.2%,
        rgba(252,221,9,1) 33.3%,
        rgba(218,18,26,1) 33.3%,
        rgba(218,18,26,1) 44.4%,
        rgba(252,221,9,1) 44.4%,
        rgba(252,221,9,1) 55.5%,
        rgba(218,18,26,1) 55.5%,
        rgba(218,18,26,1) 66.6%,
        rgba(252,221,9,1) 66.6%,
        rgba(252,221,9,1) 77.7%,
        rgba(218,18,26,1) 77.7%,
        rgba(218,18,26,1) 88.8%,
        rgba(252,221,9,1) 88.8%,
        rgba(252,221,9,1) 100%);
    }
  }

  &.is-rounded {
    opacity: .5;
    transition: .25s ease-in-out;

    &:hover {
      opacity: 1;
    }
    li {
      height: 2.25rem;
      width: 2.25rem;
      background: $gradient;
      border-radius: 50%;
      border-color: $white;
      border-width: .2rem;
      box-shadow: 0 0 0 2px $gray-400;
      &:hover {
        box-shadow: 0 0 0 2px $gray-600;
      }
      &.active {
        box-shadow: 0 0 0 2px $orange;
      }
      &.feminista {
        background: $gradient-feminista;
      }
      &.lgtb {
        background: $gradient-lgtb;
      }
      &.quatri {
        background: $gradient-quatri;
      }
    }
  }
}

.message-body {
  font-size: .85rem;
  margin-top: 1rem;
}
</style>
