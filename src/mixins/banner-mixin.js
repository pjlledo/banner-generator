import { EventBus } from '@/event-bus.js'
import RangeSlider from '@/utils/RangeSlider.vue'

export default {
  // Shared components across templates
  components: {
    RangeSlider
  },

  // Shared data across templates
  data () {
    return {
      properties: {
        disposition: 0,
        picture: null,
        picturePreview: '',
        picturePos: 50,
        hashtag: '',
        hasLocalLabel: false,
        localLabel: ''
      },
      isDownloadable: true,
      aspect: 0,
      displayErrors: false
    }
  },

  created () {
    // Set first preset as default
    this.properties.source = this.presets[0]

    // Update aspect
    EventBus.$on('aspectUpdated', (aspect) => { this.aspect = aspect })

    // Display errors
    EventBus.$on('checkForErrors', (check) => { this.displayErrors = check })
  },

  // Emit banner property changes to canvas
  watch: {
    properties: {
      handler: function (properties) {
        this.$emit('updated', properties)
      },
      deep: true
    },

    isDownloadable: function (isDownloadable) {
      this.$emit('updateIsDownloadable', isDownloadable)
    }
  },

  // Shared functionality across templates
  methods: {
    updateImage (image) {
      this.properties.picture = image
      this.properties.picturePreview = URL.createObjectURL(image)

      const img = new Image()
      img.onload = () => {
        this.properties.pictureAspect = (img.width / img.height > 1) ? 'horizontal' : 'vertical'
      }
      img.src = this.properties.picturePreview
    },

    updateHashtag (hashtag) {
      if (!hashtag) {
        this.properties.hashtag = ''
        return
      }

      if (hashtag[0] === '#') {
        this.properties.hashtag = hashtag
      } else {
        this.properties.hashtag = '#' + hashtag
      }
    }
  }
}
