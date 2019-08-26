import moment from 'moment'

moment.locale('ca')

export default {
  filters: {
    formatDate (date) {
      return moment(date).format('dddd, D MMMM')
    },

    formatTime (time) {
      return moment(time).format('H:mm')
    }
  }
}
