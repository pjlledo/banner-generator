<template>
  <div class="template-selector">
    <ul>
      <li v-for="template in templates" :key="template.id">
        <a href="#" @click="$emit('update', template)">{{ template.name }}</a>
      </li>
    </ul>
    <div class="blobs" id="scene" ref="scene">
      <div class="blob-holder" data-depth="0.4">
        <div class="blob blob-1"></div>
      </div>
      <div class="blob-holder" data-depth="0.6">
        <div class="blob blob-2"></div>
      </div>
      <div class="blob-holder" data-depth="0.2">
        <div class="blob blob-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'
import templates from './templates/templates'

export default {
  name: 'template-selector',

  data () {
    return {
      templates: templates
    }
  },

  mounted () {
    const scene = this.$refs.scene
    const parallaxInstance = new Parallax(scene)
  }
}
</script>

<style lang="scss" scoped>
  @import '../sass/variables';

  .template-selector {
    position: relative;
    display: flex;
    align-content: center;
    height: calc(100vh - 4rem);

    ul {
      display: flex;
      margin: 0 auto;

      li {
        width: 15rem;
      }
    }

    a {
      display: block;
      background: $white;
      margin: 1rem;
      padding: 1rem;
      color: $gray-900;
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: -1px;
    }
  }

  .blobs {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;

    .blob {
      position: absolute;
      border-radius: $border-radius;
      background: linear-gradient(45deg,$gradient-start,$gradient-end);
      width: 50rem;
      height: 50rem;
      animation-name: blob1;
      animation-duration: 20s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;

      &-holder {
        width: 100%;
        height: 100%;
      }

      &-1 {
        animation-name: blob1;
        bottom: -30rem;
        right: -30rem;
      }

      &-2 {
        animation-name: blob2;
        top: -10rem;
        left: -30rem;
      }

      &-3 {
        animation-name: blob3;
        top: -45rem;
        right: -23rem;
      }
    }
  }

  @media (max-width: 1024px) {
    .blobs {
      .blob {
        width: 45rem;
        height: 45rem;

        &-3 {
          top: -38rem;
        }
      }
    }
  }

  @keyframes blob1 {
    from {
      transform: translate(-3rem, -3rem) rotate(-5deg);
    }

    to {
      transform: translate(0, 0) rotate(-5deg);
    }
  }

  @keyframes blob2 {
    from {
      transform: translate(3rem, 3rem) rotate(-5deg);
    }

    to {
      transform: translate(0, 0) rotate(-5deg);
    }
  }

  @keyframes blob3 {
    from {
      transform: translate(-3rem, 3rem) rotate(-5deg);
    }

    to {
      transform: translate(0, 0) rotate(-5deg);
    }
  }
</style>
