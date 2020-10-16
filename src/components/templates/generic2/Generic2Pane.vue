<template>
  <div :class="{ 'pane generic-pane': true, 'pane-dimmed': paneDimmed, 'pane-916': aspect === 1 }">
    <!-- Text -->
    <div class="text-wrapper">
      <b-field label="Text">
        <b-input type="textarea" placeholder="48152342 usuaris de bicicleta en 2023" v-model="properties.text" maxlength="150"></b-input>
      </b-field>

      <!-- Text Color
      <color-selector v-model="properties.textColor" /> -->

      <!-- Text align -->
      <b-field label="Alineació del text" class="text-align-group">
        <b-tabs @change="updateTextAlign" :value="1" class="text-align" type="is-toggle" size="is-small" expanded>
          <b-tab-item icon="align-left"></b-tab-item>
          <b-tab-item icon="align-center"></b-tab-item>
          <b-tab-item icon="align-right"></b-tab-item>
        </b-tabs>

        <!-- Text position
        <b-tabs @change="updateTextPosition" :value="1" class="text-position" type="is-toggle" size="is-small" expanded>
          <b-tab-item icon="arrow-to-top"></b-tab-item>
          <b-tab-item icon="grip-lines"></b-tab-item>
          <b-tab-item icon="arrow-to-bottom"></b-tab-item>
        </b-tabs> -->
      </b-field>

      <!-- Text size -->
      <b-field label="Tamany del text" class="range">
        <range-slider
          name="points"
          :min="80"
          :max="150"
          v-model="properties.textSize"
          @touchstart="dimPane(true)"
          @touchend="dimPane(false)" />
      </b-field>

      <article class="message is-info is-small" v-if="aspect === 1">
        <div class="message-body">
          Es recomana utilitzar la ferramenta de text nativa d'Instragram per a afegir text en aquest model de tarja.
        </div>
      </article>
    </div>

    <!-- Emoji picker -->
    <emoji-picker v-model="properties.emojis" />

    <!-- Picture
    <picture-upload
      :picture="properties.picture"
      :display-errors="displayErrors"
      :errors="errors"
      @upload="updateImage"
      @delete="properties.picture = null; properties.picturePreview = null" />

    Picture position
    <b-field label="Posició de la imatge" class="range">
      <range-slider
        name="points"
        :min="0"
        :max="100"
        v-model="properties.picturePos"
        @touchstart="dimPane(true)"
        @touchend="dimPane(false)" />
    </b-field> -->

    <!-- Hashtag -->
    <transition name="slide">
      <b-field label="Hashtag" >
        <b-input
          placeholder="#"
          @input="updateHashtag"
          :value="properties.hashtag"
          :maxlength="20">
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
  </div>
</template>

<script>
import PaneMixin from '@/mixins/pane-mixin'
import EmojiPicker from '@/utils/EmojiPicker'

export default {
  name: 'generic-pane',

  mixins: [PaneMixin],

  components: {
    EmojiPicker
  },

  data () {
    return {
      properties: {
        text: '',
        textPos: 'center',
        textAlign: 'center',
        textPosI: 1,
        textAlignI: 1,
        textSize: 100,
        emojis: [],
        textColor: 'white',
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
      /* this.pictureRequired() */
    },

    updateTextAlign (i) {
      const values = ['left', 'center', 'right']
      this.properties.textAlign = values[i]
    },

    updateTextPosition (i) {
      const values = ['flex-start', 'center', 'flex-end']
      this.properties.textPos = values[i]
    }
  }
}
</script>

<style lang="scss" scoped>
  .text-align-group {
    flex-direction: column;

    .b-tabs {
      margin-bottom: .25rem;
    }
  }

  .hashtag {
    margin-top: .25rem;
  }

  .local-label {
    margin-top: .75rem;
  }

  .message-body {
    font-size: .85rem;
  }

  .color-selector {
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }

  .pane-916 {
    display: flex;
    flex-direction: column;

    .text-wrapper {
      order: 1;
    }
  }
</style>

<style lang="scss">
  .text-align-group .tab-content {
    height: 0;
    padding: 0;
  }
</style>
