export default {
  data () {
    return {
      currentPrimaryCombo: 'yellow',
      colors: ['yellow', 'red', 'orange', 'navy', 'beige'],
      allowedCombos: {
        yellow: {
          headline: ['red', 'navy', 'turquoise'],
          text: ['red', 'navy', 'turquoise'],
          disallowedCombo: ['orange']
        },
        red: {
          headline: ['yellow', 'navy', 'white'],
          text: ['yellow', 'navy', 'white']
        },
        orange: {
          headline: ['white', 'yellow', 'navy'],
          text: ['white', 'yellow', 'navy']
        },
        navy: {
          headline: ['yellow', 'turquoise', 'red', 'white'],
          text: ['yellow', 'red', 'white', 'orange']
        },
        beige: {
          headline: ['navy', 'white', 'red'],
          text: ['navy', 'white', 'red']
        }
      }
    }
  },

  mounted () {
    this.currentPrimaryCombo = this.getPrimaryCombo()
  },

  computed: {
    computedComboPrimary () {
      const combo = this.getCombo(this.currentPrimaryCombo)
      return [`combo combo-${this.currentPrimaryCombo} has-${combo.text}-text has-${combo.headline}-headline`]
    },

    computedComboSecondary () {
      const color = this.getSecondaryCombo()
      const combo = this.getCombo(color)

      return [`combo combo-${color} has-${combo.text}-text has-${combo.headline}-headline`]
    }
  },

  methods: {
    getCombo (color) {
      const text = this.allowedCombos[color].text[this.randomNumber(0, this.allowedCombos[color].text.length - 1)]
      const headline = this.allowedCombos[color].headline[this.randomNumber(0, this.allowedCombos[color].headline.length - 1)]

      if (text === headline) return this.getCombo(color)

      return { text, headline }
    },

    getPrimaryCombo () {
      const color = this.colors[this.randomNumber(0, 4)]

      if (color === 'beige') return this.getSecondaryCombo()

      return color
    },

    getSecondaryCombo () {
      const color = this.colors[this.randomNumber(0, 4)]

      if (color === this.currentPrimaryCombo) return this.getSecondaryCombo()

      return color
    },

    randomNumber (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
}
