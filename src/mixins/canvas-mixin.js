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
    }
  }
}
