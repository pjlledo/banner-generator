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
        card: 1,
        picture: null,
        picturePreview: '',
        picturePos: 50,
        hashtag: '',
        hasLocalLabel: false,
        localLabel: ''
      },
      errors: {},
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
      this.errors = {}
      this.validate()
      if (check && !this.isDownloadable) {
        window.scrollTo({
          top: 400,
          behavior: 'smooth'
        })
      }
    })
  },

  mounted () {
    EventBus.$emit('paneLoaded', true)
  },

  // Emit banner property changes to canvas
  watch: {
    properties: {
      handler: function (properties) {
        this.$emit('updated', properties)
        this.errors = {}
        this.validate()
        this.isDownloadable = Object.keys(this.errors).length === 0
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
    },

    fieldRequired (fields) {
      Object.keys(fields).forEach(field => {
        if (!this.properties[field]) {
          if (field in this.errors) {
            this.errors[field].push(fields[field])
          } else {
            this.errors[field] = [fields[field]]
          }
        }
      })
    },

    pictureRequired () {
      if (!this.properties.picture) {
        this.errors.picture = ['Has de seleccionar una foro']
      }
    },

    allCapsDisallowed (...fields) {
      const errorMessage = 'Recomanem no escriure tot el text en majúscules'
      fields.forEach(field => {
        if (this.properties[field].toUpperCase() === this.properties[field] && this.properties[field]) {
          if (field in this.errors) {
            this.errors[field].push(errorMessage)
          } else {
            this.errors[field] = [errorMessage]
          }
        }
      })
    },

    setFieldType (field) {
      return field in this.errors && this.displayErrors ? 'is-danger' : ''
    },

    setFieldMessage (field) {
      return field in this.errors && this.displayErrors ? this.errors[field].join('. ') : ''
    }
  }
}
