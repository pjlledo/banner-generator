<template>
  <div :class="{ 'navbar': true, 'navbar--dark': dark }">
    <router-link to="/" class="logo-link">
      <compromis-logo class="logo" :mono="dark" />
    </router-link>
    <div class="nav-label logo-label"></div>
    <div class="nav-label app-label">Generador de targes</div>
  </div>
</template>

<script>
import CompromisLogo from '@/utils/JovesLogo'

export default {
  name: 'app-header',

  components: {
    CompromisLogo
  },

  props: {
    dark: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";

  .navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $white;
    padding: .75rem 2rem;
    height: $navbar-height;
    transition: .25s ease-in-out;

    .logo {
      color: $white;
      height: 1.75rem;
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
      margin-left: .75rem;
      color: $gray-700;
    }

    .app-label {
      margin-left: auto;
      color: $gray-700;
    }

    &--dark {
      background: $gray-900;
      color: $white;

      .logo-label,
      .app-label {
        color: $white;
        opacity: .75;
      }
    }
  }

  @media (max-width: $xs-breakpoint) {
    .navbar {
      z-index: 100;
      padding: .75rem 1rem;

      .logo-label {
        display: none !important;
      }

      .app-label {
        margin-left: .5rem;
      }

      .logo-link {
        display: inline-block;
        width: 30px;
        overflow: hidden;
      }
    }
  }
</style>
