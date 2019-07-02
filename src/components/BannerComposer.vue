<template>
  <div class="composer">
    <template v-if="selectedTemplate">
      <component class="pane" :is="selectedTemplate.componentPane" @updated="(props) => { bannerProperties = props }" />
      <banner-workspace class="workspace" :component-banner="selectedTemplate.componentBanner" :banner-properties="bannerProperties" />
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
import BannerWorkspace from './BannerWorkspace'

/* Templates */
import HeadlinePane from './templates/headline/HeadlinePane'
import HeadlineBanner from './templates/headline/HeadlineBanner'

const templates = [
  {
    id: 'headline',
    name: 'Titular de premsa',
    componentPane: HeadlinePane,
    componentBanner: HeadlineBanner
  },
  {
    id: 'quote',
    name: 'Frase',
    componentPane: null,
    componentBanner: null
  }
]

export default {
  name: 'BannerComposer',

  components: {
    BannerWorkspace,
    HeadlinePane,
    HeadlineBanner
  },

  data () {
    return {
      templates: templates,
      selectedTemplate: null,
      bannerProperties: null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

 .composer {
    display: grid;
    grid-template-columns: 21rem 1fr;
    grid-template-areas: "pane workspace";
    position: absolute;
    top: 4rem;
    bottom: 0;
    left: 0;
    right: 0;
 }

  .pane {
    grid-area: pane;
    margin: 1rem 1rem 0 0;
    border-radius: 0 1.25rem 0 0;
    padding: 2rem 2rem 2rem 3.5rem;
    background-color: $white;
  }

  .workspace {
    grid-area: workspace;
    margin: 1rem 0 0 1rem;
    background-color: $white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1.25rem 0  0 0;
  }
</style>
