<template>
  <div :class="{ 'pane': true, 'pane-dimmed': paneDimmed }">
    <!-- Title -->
    <b-field
      label="Titol"
      :type="setFieldType('title')"
      :message="setFieldMessage('title')">
      <b-input placeholder="Acte Central a València" v-model="properties.title" maxlength="60"></b-input>
    </b-field>

    <!-- Overtitle -->
    <b-field label="Tipus d'acte">
      <b-input placeholder="Debat" maxlength="20" v-model="properties.overtitle"></b-input>
    </b-field>

    <!-- Date -->
    <transition name="slide">
      <b-field label="Data" v-if="aspect !== 2">
        <date-picker v-model="properties.date" />
      </b-field>
    </transition>

    <!-- Time -->
    <transition name="slide">
      <b-field label="Hora" v-if="aspect !== 2">
        <b-timepicker
          rounded
          inline
          :increment-minutes="15"
          v-model="properties.time"
          icon="clock">
        </b-timepicker>
      </b-field>
    </transition>

    <!-- Speakers -->
    <transition name="slide">
      <speaker-list
        :accepts-picture="false"
        :accepts-description="false"
        :min-speakers="0"
        :max-speakers="6"
        :max-length-name="25"
        :max-length-description="50"
        @updated="(speakers) => properties.speakers = speakers" />
    </transition>

    <!-- Picture -->
    <picture-upload
      :picture="properties.picture"
      :display-errors="displayErrors"
      :errors="errors"
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

    <!-- Logo de col·lectiu -->
    <transition name="slide">
      <b-switch v-model="properties.ColectiuLocal">
        Logo de col·lectiu
      </b-switch>
    </transition>

    <!-- col·lectiu comarcal -->
    <div v-if="properties.ColectiuLocal" class="logoColectiu" id="logoColectiu">
      <b-field label="Escriu i selecciona el teu col·lectiu">
        <b-autocomplete
            rounded
            v-model="properties.name"
            :data="filteredDataArray"
            placeholder="Joves PV - Compromís"
            icon="magnify"
            clearable
            @select="option => selected = option">
            <template slot="empty">Col·lectiu no trobat</template>
        </b-autocomplete>
      </b-field>
    </div>
  </div>
</template>

<script>
import PaneMixin from '@/mixins/pane-mixin'
import DatePicker from '@/utils/DatePicker'
import SpeakerList from '@/utils/SpeakerList'

export default {
  name: 'quote-pane',

  mixins: [PaneMixin],

  components: {
    DatePicker,
    SpeakerList
  },

  data () {
    return {
      properties: {
        title: '',
        overtitle: '',
        date: new Date(),
        time: new Date(),
        place: '',
        speakers: [],
        data: [
          'Joves PV - Compromís',
          'el Maestrat - els Ports',
          'la Plana Alta - l’Alcalatén',
          'la Plana Baixa - l’Alt Millars',
          'el Camp de Morvedre - l’Alt Palància',
          'el Camp de Túria - els Serrans - el Racó d’Ademús',
          'l’Horta Nord',
          'l’Horta Sud',
          'València',
          'la Foia de Bunyol - la Plana d’Utiel - la Vall de Cofrents',
          'la Ribera Alta',
          'La Ribera Baixa',
          'la Costera - la Canal de Navarrés',
          'la Safor - Valldigna',
          'la Vall d’Albaida',
          'l’Alcoià - el Comtat - les Foies',
          'la Marina',
          'l’Alacantí',
          'el Vinalopó Mitjà - l’Alt Vinalopó',
          'el Baix Vinalopó - el Baix Segura',
          'Xeraco',
          'Tavernes de la Valldigna',
          'Gandia',
          'Algemesí',
          'Castelló de la Ribera',
          'Xàtiva'
        ],
        name: '',
        selected: 'Joves PV - Compromís'
      }
    }
  },

  created () {
    // Set a default time
    this.properties.time.setHours(10)
    this.properties.time.setMinutes(0)
  },
  computed: {
    filteredDataArray () {
      return this.properties.data.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.properties.name.toLowerCase()) >= 0
      })
    }
  },
  methods: {
    validate () {
      this.fieldRequired({
        title: "Has d'escriure un títol",
        place: "Has d'escriure un lloc"
      })
      this.pictureRequired()
      this.allCapsDisallowed('title', 'place')
    }
  }
}
</script>

<style lang="scss" scoped>
  .local-label {
    margin-top: .75rem;
  }
</style>
