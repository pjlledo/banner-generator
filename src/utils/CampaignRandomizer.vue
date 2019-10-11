<template>
  <div>
    <b-button @click="getNewColor" :class="`combo-${buttonColor}`">
      Dona'm un altre color!
    </b-button>
  </div>
</template>

<script>
import { EventBus } from '@/event-bus.js'

export default {
  data () {
    return {
      buttonColor: 'navy'
    }
  },

  mounted () {
    EventBus.$on('campaignColorUpdated', (newColor) => this.buttonColor = newColor)
  },

  methods: {
    getNewColor () {
      EventBus.$emit('campaignNewColor')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

  .button {
    width: 100%;
    color: $white;
    border: 0;
    margin-bottom: 2rem;
    font-weight: bold;
    font-family: 'MesCompromis';
  }
</style>
