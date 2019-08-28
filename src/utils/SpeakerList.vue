<template>
  <div :class="{
    'accepts-description': acceptsDescription,
    'accepts-picture': acceptsPicture
    }">
    <label class="label">Ponents</label>
    <ul class="speakers">
      <li v-for="(speaker, i) in speakers" :key="i" class="speaker-item">
        <b-field class="speaker-name">
          <b-input placeholder="Nom del ponent" v-model="speaker.name" size="is-small" icon="user"></b-input>
        </b-field>
        <b-field class="speaker-description" v-if="acceptsDescription">
          <b-input placeholder="Càrrec" v-model="speaker.description" size="is-small" icon="credit-card-blank"></b-input>
        </b-field>
        <b-field class="speaker-picture" v-if="acceptsPicture">
          <b-upload @input="(image) => addSpeakerPicture(image, i)" drag-drop>
            <div class="content has-text-centered" v-if="!speaker.picture">
              <b-icon icon="upload" size="is-small"></b-icon>
            </div>
            <div v-else class="content has-image-centered">
              <img :src="speaker.picture" alt="Imatge" />
            </div>
          </b-upload>
        </b-field>
        <div class="speaker-remove">
          <b-button
            @click="deleteSpeaker(i)"
            size="is-small"
            type="is-danger"
            icon-right="times"
            v-if="speakers.length > 1">
            </b-button>
        </div>
      </li>
    </ul>
    <div v-if="speakers.length < maxSpeakers" class="speakers-add">
      <b-button @click="addSpeaker" size="is-small" rounded icon-left="plus">Afegeix ponent</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'speaker-list',

  props: {
    acceptsPicture: {
      type: Boolean,
      default: true
    },
    acceptsDescription: {
      type: Boolean,
      default: true
    },
    maxSpeakers: {
      type: Number,
      default: 4
    }
  },

  data () {
    return {
      speakers: [
        {
          name: 'Mónica Oltra',
          description: 'Vicepresidenta',
          picture: null
        },
        {
          name: 'Fran Ferri',
          description: 'Síndic',
          picture: null
        }
      ]
    }
  },

  created () {
    this.$emit('updated', this.speakers)
  },

  watch: {
    speakers: {
      handler: function () {
        this.$emit('updated', this.speakers)
      },
      deep: true
    }
  },

  methods: {
    addSpeaker () {
      this.speakers.push({ name: '', description: '', picture: null })
    },

    deleteSpeaker (i) {
      this.speakers.splice(i, 1)
    },

    updateSpeakerPicture (image, i) {
      const img = new Image()
      this.speakers[i].picture = URL.createObjectURL(image)
      img.src = this.speakers[i].picture
    }
  }
}
</script>

<style lang="scss">
  @import "../sass/variables";

  .speakers {
    margin-bottom: .75rem;

    &-add {
      margin-bottom: .75rem;
    }
  }

  .speaker {
    &-item {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-template-areas: "name remove";
      grid-gap: .75rem;
      border-bottom: 1px $gray-200 solid;
      padding: .75rem 0;

      .field {
        margin-bottom: 0;
      }
    }

    &-name {
      grid-area: name;
    }

    &-description {
      grid-area: description;
    }

    &-picture {
      grid-area: picture;
      align-self: stretch;
      display: grid;
      align-items: stretch;

      .control {
        display: flex;
        align-items: stretch;
      }

      .has-text-centered {
        padding-top: 1rem;
      }

      .has-image-centered {
        margin: .15rem;
        border-radius: .25rem;
        overflow: hidden;
        height: 3.15rem;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }

    &-remove {
      grid-area: remove;
    }
  }

  .accepts-picture {
    .speaker-item {
      grid-template-columns: 4.35rem 1fr auto;
      grid-template-areas:
        "picture name remove"
        "picture description remove";
    }
  }

  .accepts-description {
    .speaker-item {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "name remove"
        "description remove";
    }
  }
</style>