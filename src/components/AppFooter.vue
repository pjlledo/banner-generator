<template>
  <footer>
    <help is-text />
    <div>
      <strong>Generador de Targes</strong> <em>beta</em> és una aplicació desenvolupada pel <strong>Departament de Comunicació</strong> de <strong>Compromís</strong>.
    </div>
  </footer>
</template>

<script>
import Help from './Help'

export default {
  name: 'app-footer',

  components: {
    Help
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  footer {
    color: $gray-700;

    strong {
      color: $gray-700;
    }
  }
</style>
