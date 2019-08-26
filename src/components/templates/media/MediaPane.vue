<template>
  <div>
    <!-- Title -->
    <b-field label="Titol">
      <b-input placeholder="Mónica Oltra" v-model="properties.title"></b-input>
    </b-field>

    <!-- Overtitle -->
    <b-field label="Tipus d'acte">
      <b-input placeholder="Debat" v-model="properties.overtitle"></b-input>
    </b-field>

    <!-- Subtitle -->
    <b-field label="Subtítol">
      <b-input placeholder="Models de finançament" v-model="properties.subtitle"></b-input>
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

    <!-- Picture -->
    <b-field
      label="Foto"
      class="image-upload-field"
      :type="properties.picture ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.picture ? '' : displayErrors ? `Has de seleccionar una foto` : ''">>
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

    <!-- Channel -->
    <b-field label="Canal">
      <b-select placeholder="Selecciona un canal" @input="updateSource" expanded>
        <option
          v-for="source in presets"
          :value="source.id"
          :key="source.id"
          :selected="properties.source === source.id">
          {{ source.name }}
        </option>
        <option
          value="other"
          :selected="properties.source === 'other'">
          Altre...
        </option>
      </b-select>
    </b-field>

    <!-- Programme -->
    <b-field label="Programa" v-if="properties.source">
      <b-select placeholder="Selecciona un programa" expanded @input="updateProgramme">
        <option
          v-for="programme in properties.source.programmes"
          :value="programme.id"
          :key="programme.id"
          :selected="properties.programme === programme.id">
          {{ programme.name }}
        </option>
      </b-select>
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
import presets from './presets'

export default {
  name: 'media-pane',

  mixins: [BannerMixin],

  data () {
    return {
      properties: {
        title: '',
        overtitle: '',
        subtitle: '',
        date: new Date(),
        time: new Date(),
        source: null,
        programme: null,
      },
      presets: presets
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        // Check if canvas can be downloaded
        this.isDownloadable = (this.properties.title !== '' && this.properties.picture !== null)
      },
      deep: true
    }
  },

  created () {
    // Set first preset as default
    this.properties.source = this.presets[0]

    // Set a default time
    this.properties.time.setHours(10)
    this.properties.time.setMinutes(0)
  },

  methods: {
    updateSource (source) {
      if (source === 'other') {
        this.properties.source = 'other'
        return
      }

      this.properties.source = this.presets.find(preset => preset.id === source)
    },

    updateProgramme (programme) {
      if (programme === 'other') {
        this.properties.programme = 'other'
        return
      }

      this.properties.programme = this.properties.source.programmes.find(p => p.id === programme)
    }
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
