<template>
  <div>
    <!-- Title -->
    <b-field
      label="Titol"
      :type="properties.title ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.title ? '' : displayErrors ? `Has d'omplir el títol` : ''">
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
    <picture-upload
      :picture="properties.picture"
      :display-errors="displayErrors"
      @upload="updateImage"
      @delete="properties.picture = null; properties.picturePreview = null" />

    <!-- Picture position -->
    <b-field label="Posició de la imatge">
      <range-slider name="points" :min="0" :max="100" v-model="properties.picturePos" />
    </b-field>

    <!-- Channel -->
    <b-field
      label="Canal"
      :type="properties.source ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.source ? '' : displayErrors ? `Has de seleccionar un canal` : ''">
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
    <b-field
      label="Programa" v-if="properties.source"
      :type="properties.programme ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.programme ? '' : displayErrors ? `Has de seleccionar un programa` : ''">
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
import PaneMixin from '@/mixins/pane-mixin.js'
import presets from './presets'

export default {
  name: 'media-pane',

  mixins: [PaneMixin],

  data () {
    return {
      properties: {
        title: '',
        overtitle: '',
        subtitle: '',
        date: new Date(),
        time: new Date(),
        source: null,
        programme: null
      },
      presets: presets
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        // Check if canvas can be downloaded
        this.isDownloadable = (
          properties.title !== '' &&
          properties.source !== null &&
          properties.programme !== null &&
          properties.picture !== null
        )
      },
      deep: true
    }
  },

  created () {
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
  .local-label {
    margin-top: .75rem;
  }
</style>
