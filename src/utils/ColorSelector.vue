<template>
  <div class="field">
    <label class="label" v-show="label">{{ label }}</label>
    <ul :class="{'color-selector': true, 'rounded' : isRounded }">
      <li v-if="colors.includes('black')" :class="{'black-bg' : true, 'active': value === 'black' }" @click="$emit('input', 'black')"><span v-if="!isRounded">Aa</span></li>
      <li v-if="colors.includes('white')" :class="{'white-bg' : true, 'active': value === 'white' }" @click="$emit('input', 'white')"><span v-if="!isRounded">Aa</span></li>
      <li v-if="colors.includes('orange')" :class="{'orange-bg' : true, 'active': value === 'orange' }" @click="$emit('input', 'orange')"><span v-if="!isRounded">Aa</span></li>
      <li v-if="colors.includes('lgbt')" :class="{'lgbt-bg' : true, 'active': value === 'lgbt' }" @click="$emit('input', 'lgbt')"><span v-if="!isRounded">Aa</span></li>
      <li v-if="colors.includes('feminism')" :class="{'feminism-bg' : true, 'active': value === 'feminism' }" @click="$emit('input', 'feminism')"><span v-if="!isRounded">Aa</span></li>
      <li v-if="colors.includes('green')" :class="{'green-bg' : true, 'active': value === 'green' }" @click="$emit('input', 'green')"><span v-if="!isRounded">Aa</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'color-selector',

  props: {
    value: {
      type: String,
      default: 'black'
    },
    label: {
      type: String,
      default: ''
    },
    colors: {
      type: Array,
      default: () => ['black', 'white', 'orange']
    },
    isRounded: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "../sass/variables";

.color-selector {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: .5rem;

  li {
    cursor: pointer;
    border: .2rem $white solid;
    border-radius: .5rem;
    box-shadow: 0 0 0 2px $gray-200;
    transition: .25s ease-in-out;
    font-weight: bold;
    line-height: 1;

    span {
      display: block;
      padding: .5rem;
      border-radius: .4rem;
    }

    &:hover {
      box-shadow: 0 0 0 2px $gray-400;
    }

    &.active {
      box-shadow: 0 0 0 2px $primary;
    }
  }

  .black-bg {
    background: $gray-darkest;
    color: $white;
  }

  .orange-bg {
    background: $gradient;
    color: $white;
  }

  .white-bg {
    color: $gray-900;
    background: $white;
  }

  .lgbt-bg {
    background: $gradient-lgtb;
    color: $white;
  }

  .feminism-bg {
    background: $gradient-feminista;
    color: $white;
  }

  .green-bg {
    background: $gradient-green;
  }
}

.rounded {
  display: flex;

  li {
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 50%;
    margin-right: .25rem;
    flex-shrink: 0;
  }
}
</style>
