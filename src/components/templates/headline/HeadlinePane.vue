<template>
  <div :class="{ 'pane headline-pane': true, 'pane-dimmed': paneDimmed }">
    <!-- <b-field label="Estil"> 
      <b-tabs
        id="style-tabs"
        type="is-toggle"
        size="is-small"
        v-model="properties.card"
        class="tabs-field"
        expanded>
        <b-tab-item label="Fons blanc"></b-tab-item>
        <b-tab-item label="Targeta"></b-tab-item>
      </b-tabs>
    </b-field>

    <transition name="slide">
      <b-field label="Posició del titular" v-if="(!aspect && !properties.card) || (properties.card)">
        <b-tabs
          id="disposition-tabs"
          type="is-toggle"
          size="is-small"
          v-model="properties.disposition"
          class="tabs-field"
          expanded>
          <b-tab-item label="Titular baix"></b-tab-item>
          <b-tab-item label="Titular dalt"></b-tab-item>
        </b-tabs>
      </b-field>
    </transition> -->

    <!-- Source -->
    <b-field
      id="source-field"
      label="Font"
      :type="setFieldType('source')"
      :message="setFieldMessage('source')">
      <b-select placeholder="Selecciona un diari" @input="updateSource" expanded>
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

    <!-- Other source -->
    <transition name="slide">
      <div v-if="properties.source === 'other'" class="source-input-group">
        <b-field
          class="source-input-name"
          label="Mitjà de comunicació"
          :type="setFieldType('customSource')"
          :message="setFieldMessage('customSource')">
          <b-input placeholder="La Veu" v-model="properties.customSource"></b-input>
        </b-field>
        <b-field label="Color" class="source-input-color">
          <swatches v-model="properties.customSourceColor"></swatches>
        </b-field>
      </div>
    </transition>

    <!-- Headline -->
    <b-field
      id="headline-field"
      label="Titular"
      :type="setFieldType('headline')"
      :message="setFieldMessage('headline')">
      <b-input
        type="textarea"
        placeholder="L'ús de la bici està per damunt de 9000..."
        v-model="properties.headline"
        maxlength="160">
      </b-input>
    </b-field>

    <!-- Emoji picker -->
    <transition name="slide">
      <emoji-picker v-model="properties.emojis" v-if="properties.card === 1" />
    </transition>

    <!-- Picture -->
    <picture-upload
      id="picture-field"
      :picture="properties.picture"
      :display-errors="displayErrors"
      :errors="errors"
      @upload="updateImage"
      @delete="properties.picture = null; properties.picturePreview = null" />

    <!-- Picture position -->
    <b-field id="picture-position-field" label="Posició de la imatge" class="range">
      <range-slider
        name="points"
        :min="0"
        :max="100"
        v-model="properties.picturePos"
        @touchstart="dimPane(true)"
        @touchend="dimPane(false)" />
    </b-field>

    <!-- Hashtag -->
    <transition name="slide">
      <b-field label="Hashtag" v-if="!aspect">
        <b-input
          id="hashtag-field"
          placeholder="#"
          @input="updateHashtag"
          :value="properties.hashtag"
          :maxlength="properties.hasLocalLabel ? 18 : 32">
        </b-input>
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

    <!-- Local label
    <transition name="slide">
      <div v-if="!aspect" class="field" id="local-label-field">
        <b-switch v-model="properties.hasLocalLabel" @input="properties.hashtag = properties.hashtag.substring(0, 18)">
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
    </transition> -->
  </div>
</template>

<script>
import PaneMixin from '@/mixins/pane-mixin.js'
import presets from './presets'
import Swatches from 'vue-swatches'
import EmojiPicker from '@/utils/EmojiPicker'

export default {
  name: 'headline-pane',

  components: {
    Swatches,
    EmojiPicker
  },

  mixins: [PaneMixin],

  data () {
    return {
      properties: {
        headline: '',
        source: null,
        customSource: '',
        customSourceColor: '#1CA085',
        card: 0,
        emojis: [],
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
      },
      presets: presets
    }
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
      const sourceField = this.properties.source === 'other'
        ? { customSource: "Has d'esciure una font" }
        : { source: 'Has de seleccionar una font' }
      this.fieldRequired({
        headline: "Has d'omplir un titular",
        ...sourceField
      })
      this.pictureRequired()
      this.allCapsDisallowed('headline')
    },

    updateSource (source) {
      if (source === 'other') {
        this.properties.source = 'other'
        return
      }

      this.properties.source = this.presets.find(preset => preset.id === source)
    }
  }
}
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .headline-pane {
    .hashtag {
      margin-top: .25rem;
    }

    .local-label {
      margin-top: .75rem;
    }

    .source-input {
      &-group {
        display: flex;

        label {
          font-size: .85rem;
          color: $gray-600;
        }
      }

      &-name {
        flex-grow: 1;
        order: 1;
      }

      &-color {
        margin-right: .5rem;
      }
    }
  }
</style>
