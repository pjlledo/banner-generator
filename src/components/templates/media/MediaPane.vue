<template>
  <div :class="{ 'pane': true, 'pane-dimmed': paneDimmed }">
    <!-- Title -->
    <b-field
      label="Titol"
      :type="properties.title ? '' : displayErrors ? 'is-danger' : ''"
      :message="properties.title ? '' : displayErrors ? `Has d'omplir el títol` : ''">
      <b-input
        placeholder="Mónica Oltra"
        v-model="properties.title"
        maxlength="30">
      </b-input>
    </b-field>

    <!-- Overtitle -->
    <b-field label="Tipus d'acte">
      <b-input
        placeholder="Debat"
        v-model="properties.overtitle"
        maxlength="30">
      </b-input>
    </b-field>

    <!-- Subtitle -->
    <b-field label="Subtítol">
      <b-input
        placeholder="Models de finançament"
        v-model="properties.subtitle"
        maxlength="40">
      </b-input>
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
    <b-field label="Posició de la imatge" class="range">
      <range-slider
        name="points"
        :min="0"
        :max="100"
        v-model="properties.picturePos"
        @touchstart="dimPane(true)"
        @touchend="dimPane(false)" />
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
      label="Programa" v-if="properties.source && properties.source !== 'other'"
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
        <option
          value="other"
          :selected="properties.programme === 'other'">
          Altre...
        </option>
      </b-select>
    </b-field>

    <div v-if="properties.source === 'other'">
      <b-field label="Nom del canal">
        <b-input
          placeholder="TeleElx"
          v-model="properties.customSource"
          maxlength="30">
        </b-input>
      </b-field>
      <b-field label="Color">
        <swatches v-model="properties.customSourceColor"></swatches>
      </b-field>
    </div>

    <div v-if="properties.programme === 'other'">
      <b-field label="Nom del programa">
        <b-input
          placeholder="TeleElx"
          v-model="properties.customProgramme"
          maxlength="30">
        </b-input>
      </b-field>
      <b-field label="Color del programa">
        <swatches v-model="properties.customProgrammeColor"></swatches>
      </b-field>
    </div>

    <!-- Local label -->
    <transition name="slide">
      <div v-if="!aspect" class="field">
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
import Swatches from 'vue-swatches'

export default {
  name: 'media-pane',

  components: {
    Swatches
  },

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
        programme: null,
        customSource: '',
        customSourceColor: '#1CA085',
        customProgramme: '',
        customProgrammeColor: '#1CA085'
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
        this.properties.programme = 'other'
        return
      }

      const channel = this.presets.find(preset => preset.id === source)

      this.properties.source = channel

      if (!channel.programmes.length) {
        this.properties.programme = 'other'
      } else {
        this.properties.programme = null
      }
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
