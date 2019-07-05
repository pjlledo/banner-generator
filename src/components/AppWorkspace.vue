<template>
  <div class="composer">
    <transition name="fade">
      <app-nav class="nav" v-if="selectedTemplate !== null" />
    </transition>
    <template v-if="selectedTemplate">
      <component class="pane" :is="bannerComponents[selectedTemplate.id + 'Pane']" @updated="(props) => { bannerProperties = props }" />
      <canvas-container class="canvas-container" :canvas-component="bannerComponents[selectedTemplate.id + 'Canvas']" :banner-properties="bannerProperties" />
    </template>
    <template v-else>
      <ul>
        <li v-for="template in templates" :key="template.id">
          <a href="#" @click="selectedTemplate = template">{{ template.name }}</a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
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
      selectedTemplate: null,
      bannerProperties: null
    }
  },

  created () {
    EventBus.$on('closeBanner', () => { this.selectedTemplate  = null })
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

 .composer {
    display: grid;
    grid-template-columns: 21rem 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "nav nav"
      "pane canvas";
    align-items: center;
    height: calc(100vh - 4rem);
 }

  .nav {
    grid-area: nav;
  }

  .pane {
    grid-area: pane;
    margin: 1rem 1rem 0 0;
    border-radius: 0 1.25rem 1.25rem 0;
    padding: 2rem 2rem 2rem 3.5rem;
    background-color: $white;
    box-shadow: 0 7px 25px -16px;
  }

  .canvas-container {
    grid-area: canvas;
    margin: 1rem 0 0 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
