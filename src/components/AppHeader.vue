<template>
  <div>
    <div :class="{ 'navbar': true, 'navbar--dark': dark }">
      <img :src="dark ? logoWhite : logo" alt="Compromís" />
      <div class="nav-label logo-label">Disseny</div>
      <div class="nav-label app-label">Generador de targes</div>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo-compromis.svg'
import LogoWhite from '@/assets/logo-compromis-mono.svg'

export default {
  name: 'app-header',

  props: {
    dark: Boolean
  },

  data () {
    return {
      logo: Logo,
      logoWhite: LogoWhite
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $white;
    padding: .75rem 2rem;
    display: flex;
    transition: .25s ease-in-out;

    img {
      display: flex;
      align-items: center;
      height: 28px;
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

    &--dark {
      background: $gray-900;
      color: $white;
    }
  }
</style>
