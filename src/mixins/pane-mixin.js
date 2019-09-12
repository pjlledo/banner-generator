import { EventBus } from '@/event-bus.js'
import PictureUpload from '@/utils/PictureUpload.vue'
import RangeSlider from '@/utils/RangeSlider.vue'

export default {
  // Shared components across templates
  components: {
    RangeSlider,
    PictureUpload
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
      aspect: 0,
      isDownloadable: false,
      displayErrors: false,
      paneDimmed: false
    }
  },

  created () {
    // Emit default properties to canvas on creation
    this.$emit('updated', this.properties)

    // Update aspect
    EventBus.$on('aspectUpdated', (aspect) => { this.aspect = aspect })

    // Display errors
    EventBus.$on('checkForErrors', (check) => { 
      this.displayErrors = check

      if (check && !this.isDownloadable) {
        window.scrollTo({
          top: 400,
          behavior: 'smooth'
        })
      }
    })
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

      const formattedHashtag = hashtag.replace(/ /g, '')

      if (hashtag[0] === '#') {
        this.properties.hashtag = formattedHashtag
      } else {
        this.properties.hashtag = '#' + formattedHashtag
      }
    },

    dimPane (dimmed) {
      this.paneDimmed = dimmed
    }
  }
}
