<template>
  <div>
    <!-- Disposition -->
    <transition name="slide">
      <b-tabs
        v-model="properties.disposition"
        v-if="!aspect"
        type="is-toggle"
        size="is-small"
        class="banner-disposition"
        expanded>
        <b-tab-item label="Frase esquerra"></b-tab-item>
        <b-tab-item label="Frase dalt"></b-tab-item>
      </b-tabs>
    </transition>

    <!-- Title -->
    <b-field
      label="Titol"
      :type="properties.title ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.title ? '' : displayErrors ? `Has d'omplir un títol` : ''">
      <b-input placeholder="Acte Central a València" v-model="properties.title" maxlength="60"></b-input>
    </b-field>

    <!-- Date -->
    <b-field label="Data">
      <b-datepicker
        v-model="properties.date"
        placeholder="Dia d'emissió"
        icon="calendar-alt">
      </b-datepicker>
    </b-field>

    <!-- Time -->
    <b-field label="Hora">
      <b-timepicker
        rounded
        inline
        :increment-minutes="15"
        v-model="properties.time"
        icon="clock">
      </b-timepicker>
    </b-field>

    <!-- Venue -->
    <b-field label="Lloc">
      <b-input placeholder="Riu Túria" v-model="properties.place"></b-input>
    </b-field>

    <!-- Picture -->
    <b-field
      label="Foto"
      class="image-upload-field"
      :type="properties.picture ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.picture ? '' : displayErrors ? `Has de seleccionar una foto` : ''">
      <b-upload @input="updateImage" drag-drop>
        <section class="section">
          <div class="content has-text-centered" v-if="!properties.picture">
            <b-icon icon="upload" size="is-large" />
            <p>Arrosega la foto</p>
          </div>
          <div class="content has-text-centered" v-else>
            <p>{{ properties.picture.name }}</p>
          </div>
        </section>
      </b-upload>
      <b-button
        v-if="properties.picture"
        @click="properties.picture = null; properties.picturePreview = null"
        class="remove-image"
        type="is-danger">
        <b-icon icon="times" />
      </b-button>
    </b-field>

    <!-- Picture position -->
    <b-field label="Posició de la imatge">
      <range-slider name="points" :min="0" :max="100" v-model="properties.picturePos" />
    </b-field>

    <!-- Local label -->
    <transition name="slide">
      <div v-if="!aspect">
        <b-switch v-model="properties.hasLocalLabel">
          Afegir text al logo
        </b-switch>
        <transition name="slide">
          <div v-if="properties.hasLocalLabel" class="local-label">
            <b-field>
              <b-input placeholder="Alacant" v-model="properties.localLabel" maxlength="48"></b-input>
            </b-field>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import BannerMixin from '@/mixins/banner-mixin.js'

export default {
  name: 'quote-pane',

  mixins: [BannerMixin],

  data () {
    return {
      properties: {
        title: '',
        date: new Date(),
        time: new Date(),
        place: '',
      }
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        this.isDownloadable = (this.properties.title !== '' && this.properties.picture !== null)
      },
      deep: true
    }
  },

  created () {
    // Set a default time
    this.properties.time.setHours(10)
    this.properties.time.setMinutes(0)
  }
}
</script>

<style lang="scss" scoped>
  .field {
    position: relative;
  }

  .section {
    padding: 2rem 1.5rem;
  }

  .remove-image {
    position: absolute;
    right: 0;
    top: 2rem;
  }

  .hashtag {
    margin-top: .25rem;
  }

  .local-label {
    margin-top: .75rem;
  }

  .image-upload-field {

    &.has-addons {
      flex-direction: column;
      width: 100%;
    }
  }
</style>

<style lang="scss">
  .textarea-small .textarea {
    min-height: 4.3rem;
  }
</style>
