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
    <b-field label="Lloc">
      <b-input placeholder="València" maxlength="30" v-model="properties.overtitle"></b-input>
    </b-field>

    <!-- Speakers -->
    <speaker-list
      :default-speakers="properties.speakers"
      @updated="(speakers) => properties.speakers = speakers"
      :acceptsDescription="false"
      :display-errors="displayErrors"
      :errors="errors"
      :min-speakers="2"
      :max-speakers="4" />

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
  name: 'speakers-pane',

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
        selected: 'Joves PV - Compromís',
        speakers: [
          {
            name: '',
            picture: null
          },
          {
            name: '',
            picture: null
          }
        ]
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
        overtitle: "Has d'escriure un lloc"
      })
      this.allCapsDisallowed('title', 'overtitle')

      // Check speakers
      const speakersAreValid = this.properties.speakers.every((speaker) => speaker.picture !== null && speaker.name !== '')
      if (!speakersAreValid) {
        this.errors.speakers = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/variables";

  .local-label {
    margin-top: .75rem;
  }
</style>
