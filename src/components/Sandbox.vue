<template>
  <div class="page">
    <div :class="computedComboPrimary">
      <h2>Headline</h2>
      <p>Text</p>
    </div>
    <div :class="computedComboSecondary">
      <h2>Headline</h2>
      <p>Text</p>
    </div>
  <hr />
    <div v-for="(color, colorName) in allowedCombos" :key="colorName">
      <div v-for="headline in color.headline" :key="headline">
        <div v-for="text in color.text" :key="text">
          <div v-if="headline !== text" :class="['combo', `combo-${colorName}`, `has-${headline}-headline`, `has-${text}-text`]">
            <h2>Headline {{colorName}}</h2>
            <p>Text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sandbox',

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
</script>

<style lang="scss" scoped>
$yellow: #ffca05;
$red: #ef4e38;
$orange: #f6911e;
$turquoise: #3dbca6;
$navy: #273354;
$beige: #ccb7a3;
$white: #fff;

.page {
  background: white;
  padding-top: 200px;
}

$colors: (
  'yellow': $yellow,
  'red': $red,
  'orange': $orange,
  'turquoise': $turquoise,
  'navy': $navy,
  'beige': $beige,
  'white': $white
);

@each $color-name, $color in $colors {
  .combo-#{$color-name} {
    background-color: $color;
  }

  .has-#{$color-name}-headline h2,
  .has-#{$color-name}-text p {
    color: $color;
  }
}

  $combos: (
    'yellow': (
      'background': $yellow,
      'headlines': (
        $red, $navy, $turquoise
      ),
      'text': (
        $red, $navy, $turquoise, $orange
      )
    ),
    'red': (
      'background': $red,
      'headlines': (
        $navy, $yellow, $white
      ),
      'text': (
        $navy, $yellow, $white
      )
    ),
    'orange': (
      'background': $orange,
      'headlines': (
        $white, $yellow, $navy
      ),
      'text': (
        $white, $yellow, $navy
      )
    ),
    'turquoise': (
      'background': $turquoise,
      'headlines': (
        $yellow, $navy, $white
      ),
      'text': (
        $yellow, $navy, $white
      )
    ),
    'navy': (
      'background': $navy,
      'headlines': (
        $yellow, $turquoise, $red, $white
      ),
      'text': (
        $yellow, $red, $white, $orange
      )
    ),
    'beige': (
      'background': $beige,
      'headlines': (
        $navy, $white, $red
      ),
      'text': (
        $navy, $white, $red
      )
    )
  );

  $i: 0;
  @each $name, $combo in $combos {
    @each $headline-color in map-get($combo, 'headlines') {
      @each $text-color in map-get($combo, 'text') {
        @if $text-color != $headline-color {
           $i: $i + 1;
          .combo-#{$i} {
            background: map-get($combo, 'background');
            color: $text-color;

            h1, h2, h3, h4, h5, h6 {
              color: $headline-color;
            }
          }
        }
      }
    }
  }

  .combo {
    padding: 20px;
    margin: 20px;
    width: 400px;
    display: inline-block;
    font-family: 'Manrope3';
    border-radius: 10px;

    h2 {
      font-weight: 800;
      font-size: 2rem;
    }

    p {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
</style>
