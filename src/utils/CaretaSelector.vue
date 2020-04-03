<template>
  <div>
    <ul :class="{'careta-selector': true, 'is-rounded': isRounded }">
      <li :class="{'normal' : true, 'active': value === 'normal'}" @click="$emit('input', 'normal')" 
      style=" background: #f4813e;">
          <careta v-if="!isRounded" logo-style="mono"></careta>
      </li>
      <li :class="{'feminista' : true, 'active': value === 'feminista'}" @click="$emit('input', 'feminista')"
      style=" background: #7D3A81">
          <careta v-if="!isRounded" logo-style="mono"></careta>
      </li>
      <li :class="{'lgtb' : true, 'active': value === 'lgtb'}" @click="$emit('input', 'lgtb')">
          <careta v-if="!isRounded" logo-style="mono"></careta>
      </li>
      <li :class="{'quatri' : true, 'active': value === 'quatri'}" @click="$emit('input', 'mono')">
	      <careta v-if="!isRounded" logo-style="mono"></careta>
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
      background-image: linear-gradient(180deg,
        rgba(239,64,77,1) 0%,
        rgba(239,64,77,1) 16.6%,
        rgba(247,146,38,1) 16.6%,
        rgba(247,146,38,1) 33.2%,
        rgba(255,209,15,1) 33.2%,
        rgba(255,209,15,1) 49.8%,
        rgba(127,195,71,1) 49.8%,
        rgba(127,195,71,1) 66.4%,
        rgba(85,164,219,1) 66.4%,
        rgba(85,164,219,1) 83%,
        rgba(161,74,156,1) 83%,
        rgba(161,74,156,1) 100%);
    }

    &.quatri {
      background-image: linear-gradient(180deg,
        rgba(255,255,0,1) 0%,
        rgba(255,255,0,1) 11.1%,
        rgba(255,0,0,1) 11.1%,
        rgba(255,0,0,1) 22.2%,
        rgba(255,255,0,1) 22.2%,
        rgba(255,255,0,1) 33.3%,
        rgba(255,0,0,1) 33.3%,
        rgba(255,0,0,1) 44.4%,
        rgba(255,255,0,1) 44.4%,
        rgba(255,255,0,1) 55.5%,
        rgba(255,0,0,1) 55.5%,
        rgba(255,0,0,1) 66.6%,
        rgba(255,255,0,1) 66.6%,
        rgba(255,255,0,1) 77.7%,
        rgba(255,0,0,1) 77.7%,
        rgba(255,0,0,1) 88.8%,
        rgba(255,255,0,1) 88.8%,
        rgba(255,255,0,1) 100%);
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
