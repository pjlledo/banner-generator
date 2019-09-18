<template>
  <div>
    <b-tooltip label="Ajuda i suggeriments" position="is-left" type="is-dark">
      <b-button type="is-text" class="help-button" @click="toggleForm">
        <b-icon icon="question-circle" size="is-large" />
      </b-button>
    </b-tooltip>

    <b-modal :active.sync="formIsActive" scroll="keep">
      <div class="card content">
        dsdsad
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'help-form',

  data () {
    return {
      formIsActive: false
    }
  },

  methods: {
    toggleForm () {
      this.formIsActive = !this.formIsActive
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .help-button {
    opacity: .5;
    transition: .25s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  .card {
    padding: 2rem;
    border-radius: 1rem;
    max-width: 640px;
    margin: 0 auto;
  }

  @media (max-width: $xs-breakpoint) {
    .card {
      margin: 0 1rem;
      padding: 1.25rem;
    }
  }
</style>
