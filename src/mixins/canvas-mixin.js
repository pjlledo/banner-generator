import CompromisLogo from '@/utils/CompromisLogo'
import moment from 'moment'
moment.locale('ca')

export default {
  components: {
    CompromisLogo
  },

  props: {
    banner: Object,
    aspect: String
  },

  computed: {
    objectPosition: function () {
      const objectPosition = (this.banner.pictureAspect === 'vertical')
        ? '0% ' + this.banner.picturePos + '%'
        : this.banner.picturePos + '% 0%'
      return { objectPosition }
    }
  },

  filters: {
    formatDate (date) {
      return moment(date).format('dddd, D MMMM')
    },

    formatTime (time) {
      return moment(time).format('H:mm')
    },

    formatString (string) {
      return string.replace(/'/g, '’')
                   .replace(/Mònica Oltra/gi, 'Mónica Oltra')
                   .replace(/Monica Oltra/gi, 'Mónica Oltra')
    }
  },

  methods: {
    fontSize (prop, maxFontSize, minFontSize, maxLength) {
      const propLength = this.banner[prop].length / maxLength
      const fontSize = maxFontSize + propLength * (minFontSize - maxFontSize)
      return `${fontSize}px`
    }
  }
}
