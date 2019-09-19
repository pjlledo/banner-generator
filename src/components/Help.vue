<template>
  <div class="help">
    <b-tooltip label="Ajuda i suggeriments" position="is-left" type="is-dark">
      <b-button type="is-text" class="help-button" @click="toggleForm">
        <b-icon icon="question-circle" size="is-large" />
      </b-button>
    </b-tooltip>

    <b-modal :active.sync="formIsActive" scroll="keep">
      <div class="content">
        <h1>{{ template.name }}</h1>
        <component :is="template.components.help" class="help-content" />
        <hr>
        <help-form />
      </div>
    </b-modal>
  </div>
</template>

<script>
import HelpForm from './HelpForm'

export default {
  name: 'help',

  components: {
    HelpForm,
  },

  props: {
    template: {
      type: Object,
      required: true
    },
  },

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

<style lang="scss">
  @import '../sass/variables';

  .help {
    h1 {
      font-size: 2rem;
    }

    &-content {
      font-size: 1rem;

    }

    &-button {
      opacity: .5;
      transition: .25s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }

    &-examples {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 -1rem;

      img {
        margin: 1rem;
        border: 1px $gray-900 solid;
        max-height: 450px;
      }
    }

    .modal-content {
      background: $white;
      border-radius: 1rem;
      padding: 0 1rem 0 0;

      .content {
        padding: 3rem;
        max-height: 100%;
        overflow: scroll;

        @include scrollbar;
      }
    }
  }

  @media (max-width: $xs-breakpoint) {
    .help {
      &-examples {
        img {
          max-width: 80%;
        }
      }

      .modal-content {
        padding: 0;

        .content {
          padding: 1rem;
        }
      }
    }
  }
</style>
