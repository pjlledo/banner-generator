<template>
  <div class="composer">
    <select @change="updateTemplate">
      <option v-for="template in templates" :value="template.id" :key="template.id" :selected="selectedTemplate.id === template.id">{{ template.name }}</option>
    </select>
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
 }

  .pane {
    grid-area: pane;
    margin: 1rem 1rem 1rem 0rem;
    border-radius: 0 1.25rem 1.25rem 0;
    padding: 2rem 2rem 2rem 3.5rem;
    background-color: $white;
  }

  .workspace {
    grid-area: workspace;
    margin: 1rem 0 1rem 1rem;
    background-color: $white;
    padding: 1rem;
    display: flex;
    border-radius: 1.25rem 0  0 1.25rem;
  }


</style>