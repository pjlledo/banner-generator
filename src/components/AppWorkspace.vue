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
      :is="bannerComponents[`${selectedTemplate.id}Pane`]"
      @updated="(props) => bannerProperties = props"
      @updateIsDownloadable="setIsDownloadable" />
    <canvas-container
      class="canvas-container"
      :canvas-component="bannerComponents[`${selectedTemplate.id}Canvas`]"
      :template="selectedTemplate"
      :banner="bannerProperties"
      :is-downloadable="isDownloadable" />
  </div>
</template>

<script>
import AppNav from './AppNav'
import CanvasContainer from './CanvasContainer'
import templates from './templates/templates'

/* Templates */
const bannerComponents = {}
templates.map(template => {
  const canvas = `${template.id}Canvas`
  const pane = `${template.id}Pane`
  bannerComponents[canvas] = () => import(`./templates/${template.id.toLowerCase()}/${canvas}`)
  bannerComponents[pane] = () => import(`./templates/${template.id.toLowerCase()}/${pane}`)
})

export default {
  name: 'app-workspace',

  components: {
    AppNav,
    CanvasContainer,
    ...bannerComponents
  },

  data () {
    return {
      templates: templates,
      bannerComponents: bannerComponents,
      bannerProperties: null,
      selectedTemplate: null,
      isCardModalActive: false,
      isDownloadable: false
    }
  },

  created () {
    // Find and set selected template based on route param
    this.selectedTemplate = this.templates.find(template => template.id.toLowerCase() === this.$route.params.pathMatch)
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

<style lang="scss" scoped>
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
    z-index: 100;
 }

  .nav {
    grid-area: nav;
  }

  .pane {
    grid-area: pane;
    padding: 2rem;
    background-color: $white;
    box-shadow: 0 7px 25px -16px;
    overflow-y: scroll;
    height: 100%;
  }

  .canvas-container {
    grid-area: canvas;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
