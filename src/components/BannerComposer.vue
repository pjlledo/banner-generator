<template>
  <div class="composer">
    <component class="pane" :is="selectedTemplate.componentPane" @updated="propertiesUpdated" />
    <banner-workspace class="workspace" :component-banner="selectedTemplate.componentBanner" :banner-properties="bannerProperties" />
  </div>
</template>

<script>
import BannerWorkspace from './BannerWorkspace'
import HeadlinePane from './templates/headline/HeadlinePane'
import HeadlineBanner from './templates/headline/HeadlineBanner'

export default {
  name: 'BannerComposer',

  components: {
    BannerWorkspace,
    HeadlinePane,
    HeadlineBanner
  },

  data () {
    return {
      templates: [
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
      ],
      selectedTemplate: null,
      bannerProperties: null
    }
  },

  created () {
    this.selectedTemplate = this.templates[0]
  },

  methods: {
    updateTemplate (e) {
      this.selectedTemplate = this.templates.find(template => template.id === e.target.value)
    },

    propertiesUpdated (newProps) {
      this.bannerProperties = newProps
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../variables";

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
