<template>
  <b-field
      label="Foto"
      class="image-upload-field"
      :type="picture ? '' : displayErrors ? 'is-danger' : ''"
      :message="picture ? '' : displayErrors ? `Has de seleccionar una foto` : ''">
      <b-upload @input="(picture) => $emit('upload', picture)" drag-drop>
        <section class="section">
          <div class="content has-text-centered" v-if="!picture">
            <b-icon icon="upload" size="is-large" />
            <p>Arrosega la foto</p>
          </div>
          <div class="content has-text-centered" v-else>
            <p>{{ picture.name }}</p>
          </div>
        </section>
      </b-upload>
      <b-button
        v-if="picture"
        @click="$emit('delete')"
        class="remove-image"
        type="is-danger">
        <b-icon icon="times" />
      </b-button>
    </b-field>
</template>

<script>
export default {
  name: 'picture-upload',

  props: {
    picture: File,
    displayErrors: Boolean
  }
}
</script>

<style lang="scss">
.image-upload-field {
  .section {
    padding: 2rem 1.5rem;
  }

  .remove-image {
    position: absolute;
    right: 0;
    top: 2rem;
  }

  &.has-addons {
    flex-direction: column;
    width: 100%;
  }
}
</style>