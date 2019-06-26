<template>
  <div>
    <label>Text</label>
    <input name="text" v-model="properties.text" />
  </div>
</template>

<script>
export default {
  name: 'headline-pane',

  data () {
    return {
      properties: {
        disposition: '',
        picture: '',
        picturePos: '',
        headline: '',
        hashtag: '',
        local: '',
        source: '',
        customSource: '',
        customSourceColor: '',
      }
    }
  },

  watch: {
    properties: {
      handler: function (properties) {
        this.$emit('updated', properties)
      },
      deep: true
    }
  }
}
</script>
