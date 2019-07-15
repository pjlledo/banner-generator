<template>
  <div>
    <div class="navbar">
      <img :src="logo" alt="Compromís" />
      <div class="nav-label logo-label">Disseny</div>
      <div class="nav-label app-label">Generador de targes</div>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo-compromis.svg'

export default {
  name: 'app-header',

  data () {
    return {
      logo: Logo
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

  .navbar {
    background-color: $white;
    padding: .75rem 2rem;
    display: flex;

    img {
      display: flex;
      align-items: center;
      height: 32px;
    }

    .nav-label {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      letter-spacing: -.3px;
      line-height: 1;
      white-space: nowrap;
    }

    .logo-label {
      border-left: 1px $gray-400 solid;
      margin-left: .75rem;
      padding-left: .75rem;
    }

    .app-label {
      margin-left: auto;
    }
  }
</style>
