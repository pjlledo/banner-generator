<template>
  <div>
    <select @change="updateTemplate">
      <option v-for="template in templates" :value="template.id" :key="template.id" :selected="selectedTemplate.id === template.id">{{ template.name }}</option>
    </select>

    <component :is="selectedTemplate.componentPane" @updated="propertiesUpdated" />
    <component :is="selectedTemplate.componentBanner" :banner-properties="bannerProperties" />
  </div>
</template>

<script>
import HeadlinePane from './templates/headline/HeadlinePane'
import HeadlineBanner from './templates/headline/HeadlineBanner'

export default {
  name: 'BannerComposer',

  components: {
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

</style>