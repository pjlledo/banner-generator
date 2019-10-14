import { EventBus } from '@/event-bus.js'
import MescompromisLogo from '@/utils/MescompromisLogo'

export default {
  components: {
    MescompromisLogo
  },

  data () {
    return {
      currentPrimaryCombo: 'yellow',
      colors: ['yellow', 'red', 'orange', 'navy', 'beige', 'turquoise'],
      allowedCombos: {
        yellow: {
          headline: ['red', 'navy', 'turquoise'],
          text: ['red', 'navy'],
          disallowedCombo: ['orange']
        },
        red: {
          headline: ['yellow', 'navy', 'white'],
          text: ['yellow', 'navy', 'white']
        },
        orange: {
          headline: ['white', 'navy'],
          text: ['white', 'navy']
        },
        navy: {
          headline: ['yellow', 'turquoise', 'red', 'white'],
          text: ['yellow', 'red', 'white', 'orange']
        },
        beige: {
          headline: ['navy', 'white', 'red'],
          text: ['navy', 'white', 'red']
        },
        turquoise: {
          headline: ['navy', 'white', 'yellow'],
          text: ['navy', 'white', 'yellow']
        }
      },
      whiteOrNavy: null
    }
  },

  mounted () {
    this.currentPrimaryCombo = this.getPrimaryCombo()

    EventBus.$on('campaignNewColor', () => {
      this.currentPrimaryCombo = this.getPrimaryCombo()
    })
  },

  computed: {
    computedComboPrimary () {
      const combo = this.getCombo(this.currentPrimaryCombo)
      return `combo combo-${this.currentPrimaryCombo} has-${combo.text}-text has-${combo.headline}-headline`
    },

    computedComboSecondary () {
      const color = this.getSecondaryCombo()
      const combo = this.getCombo(color)

      return `combo combo-${color} has-${combo.text}-text has-${combo.headline}-headline`
    }
  },

  methods: {
    getCombo (color) {
      const headline = this.allowedCombos[color].headline[this.randomNumber(0, this.allowedCombos[color].headline.length - 1)]

      let text
      if (
        ['navy', 'white'].includes(headline) ||
        ['navy', 'beige'].includes(color)
      ) {
        text = this.allowedCombos[color].text[this.randomNumber(0, this.allowedCombos[color].text.length - 1)]
      } else {
        this.whiteOrNavy =
          this.whiteOrNavy === null
            ? ['navy', 'white'][this.randomNumber(0, 1)]
            : this.whiteOrNavy
        text = this.whiteOrNavy
      }

      if (text === headline) return this.getCombo(color)

      return { text, headline }
    },

    getPrimaryCombo () {
      const color = this.colors[this.randomNumber(0, this.colors.length-1)]

      if (color === 'beige') return this.getSecondaryCombo()

      EventBus.$emit('campaignColorUpdated', color)

      return color
    },

    getSecondaryCombo () {
      const color = this.colors[this.randomNumber(0, this.colors.length-1)]

      if (color === this.currentPrimaryCombo) return this.getSecondaryCombo()

      return color
    },

    randomNumber (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
