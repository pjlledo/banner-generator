<template>
  <div class="workspace">
    <app-nav
      class="nav"
      :is-card-modal-active="isCardModalActive"
      :template-name="selectedTemplate.name"
      @back="back"
      @hide="isCardModalActive = false" />
    <component
      class="pane"
      :is="selectedTemplate.components.pane"
      @updated="(props) => bannerProperties = props"
      @updateIsDownloadable="setIsDownloadable" />
    <canvas-container
      class="canvas"
      :canvas-component="selectedTemplate.components.canvas"
      :template="selectedTemplate"
      :banner="bannerProperties"
      :is-downloadable="isDownloadable" />
    <help
      id="help-button"
      class="help"
      :template="selectedTemplate" />
    <v-tour name="workspaceTour" :steps="workspaceSteps"></v-tour>
  </div>
</template>

<script>
import AppNav from './AppNav'
import CanvasContainer from './CanvasContainer'
import Help from './Help'
import templates from './templates/templates'

export default {
  name: 'app-workspace',

  components: {
    AppNav,
    CanvasContainer,
    Help
  },

  data () {
    return {
      templates: templates,
      bannerProperties: null,
      selectedTemplate: null,
      isCardModalActive: false,
      isDownloadable: false,
      workspaceSteps: [
        {
          target: '.canvas-wrapper',
          content: `<strong>Açò és l'espai de treball</strong>,
          Ací a la dreta veus una vista prèvia de la teua tarja. `,
          params: {
            placement: 'left'
          }
        },
        {
          target: '#aspect-tabs',
          content: `Amb aquest botó pots canviar les dimensions de la tarja. 1:1 fa targes quadrades per xarxes com facebook, twitter o instagram.
          9:16 crea gràfics en format story.`,
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '.pane',
          content: `Ací a l'esquerra està el panell d'edició. Ací introduirem les dades per emplenar la tarja. Ara mateixa està molt buida, anem a introduir alguna cosa!`,
          params: {
            placement: 'right'
          }
        },
        {
          target: '#source-field',
          content: `Comencem per la font. Selecciona un mitjà de comunicació, per exemple 'À Punt'`,
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#headline-field',
          content: `Ara, emplenem el titular. Escriu el que vulgues, per exemple "Les dones prenen els carrers per a declarar l’emergència feminista".`,
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#picture-field',
          content: `A continuació, selecciona o arrosega una imatge del teu ordinador.`,
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#picture-position-field',
          content: `Amb aquest control pots ajustar si cal la posició de la imatge.`,
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#hashtag-field',
          content: `Ací pots escriure un hashtag, si vols.`,
          params: {
            placement: 'bottom'
          }
        },
        {
          target: '#local-label-field',
          content: `També pots afegir el nom del teu col·lectiu local o comarcal.`,
          params: {
            placement: 'top'
          }
        },
        {
          target: '#download-button',
          content: `Revisa que tot estiga bé i descarrega amb aquest botó.`,
          params: {
            placement: 'top'
          }
        },
        {
          target: '#help-button',
          content: `Ja està! Si necessites més informació, teniu algun problema, o suggeriments,
          totes les targes tenen un botó com aquest a la part superior dreta de la pantalla.
          Recomanem que el llegiu abans de crear una tarja.`,
          params: {
            placement: 'bottom'
          }
        },

      ]
    }
  },

  created () {
    // Find and set selected template based on route param
    this.selectedTemplate = this.templates.find(template => template.id.toLowerCase() === this.$route.params.pathMatch)
  },

  mounted () {
    setTimeout(() => { this.$tours['workspaceTour'].start() }, 500)
  },

  watch: {
    '$route': function (newRoute) {
      this.selectedTemplate = this.templates.find(template => template.id.toLowerCase() === newRoute.params.pathMatch)
    }
  },

  methods: {
    back (confirmed) {
      this.$router.push({ name: 'start', params: { confirmed } })
    },

    setIsDownloadable (isDownloadable) {
      this.isDownloadable = isDownloadable
    }
  },

  beforeRouteLeave (to, from, next) {
    // Abort and show modal if going back unless 'confirmed' is explicitly set
    if (to.params.confirmed) {
      next()
    } else {
      this.isCardModalActive = true
      next(false)
    }
  }
}
</script>

<style lang="scss">
  @import "../sass/variables";

 .workspace {
    display: grid;
    grid-template-columns: 21rem 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "nav nav"
      "pane canvas";
    align-items: center;
    position: fixed;
    top: $navbar-height;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
 }

  .nav {
    grid-area: nav;
  }

  .pane {
    grid-area: pane;
    padding: 2rem 1rem 2rem 2rem;
    background-color: $white;
    box-shadow: 0 7px 25px -16px;
    overflow-y: scroll;
    align-self: stretch;

    &::-webkit-scrollbar {
      width: 1rem;
      background-color: $white;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $gray-400;
      border-radius: 4rem;
      transition: .25s ease-in-out;
      border: .25rem $white solid;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: $gray-600;
    }
  }

  .canvas {
    grid-area: canvas;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .help {
    position: absolute;
    top: 4rem;
    right: 1.5rem;
  }

  @media (max-width: $xs-breakpoint) {
    .workspace {
      position: relative;
      margin-top: $navbar-height;
      grid-template-areas:
        "nav"
        "canvas"
        "pane";
      grid-template-columns: 1fr;
      grid-template-rows: 20px 400px 1fr;
    }

    .canvas {
      position: fixed;
      top: 100px;
      z-index: 10;
      width: 100%;
    }

    .nav {
      z-index: 35;
      position: fixed;
      top: $navbar-height;
      width: 100%;
    }

    .pane {
      position: relative;
      z-index: 15;
      box-shadow: 0 -.4rem 1.7rem -.3rem rgba($gray-900, .15),
        0 -.2rem 1rem -.5rem rgba($gray-900, .2),
        0 .4rem 1rem -.4rem rgba($gray-900, .015);
      border-radius: 1.5rem 1.5rem 0 0;
      overflow: visible;
      padding: 1.5rem 1rem;
      width: 100vw;
    }

    .help {
      position: fixed;
      top: 3.25rem;
      right: 10rem;
      z-index: 35;

      .button.is-text {
        color: $white;
      }
    }
  }
</style>
