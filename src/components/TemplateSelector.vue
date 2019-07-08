<template>
  <div class="template-selector">
    <div class="template-selector-templates">
      <h2>Selecciona un model de tarja</h2>
      <ul>
        <li v-for="template in templates" :key="template.id">
          <a href="#" @click="$emit('update', template)" class="template-item">
            <span class="template-item-icon"><img :src="template.icon" alt="Icon" /></span>
            <span class="template-item-name">{{ template.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import templates from './templates/templates'

export default {
  name: 'template-selector',

  data () {
    return {
      templates: templates
    }
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

    &-templates {
      margin: 0 auto;
    }

    h2 {
      color: rgba($gray-900, .25);
      padding: 1rem;
      margin-top: 2rem;
      font-size: 3rem;
      font-weight: bold;
    }

    ul {
      display: flex;
      margin: 0 auto;
    }

    .template-item {
      display: block;
      position: relative;
      background: $white;
      margin: 1rem;
      color: $gray-900;
      font-size: 1.5rem;
      font-weight: bold;
      letter-spacing: -1px;
      width: 15rem;
      height: 15rem;
      border-radius: 1rem;
      box-shadow: 0 13px 27px -5px rgba(50,50,93,.15), 0 8px 16px -8px rgba(0,0,0,.2), 0 -6px 16px -6px rgba(0,0,0,.015);
      transition: .2s ease-in-out;

      &:hover {
        box-shadow: 0 20px 34px -5px rgba(50,50,93,.15), 0 14px 22px -8px rgba(0,0,0,.2), 0 -12px 22px -6px rgba(0,0,0,.015);
        transform: rotate($rotation) scale(1.05);

        .template-item-name {
          background: -webkit-linear-gradient(45deg, $gradient-start, $gradient-end);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      &-icon {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -4rem;
        margin-left: -3rem;

        img {
          width: 6rem;
          height: 6rem;
        }
      }

      &-name {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1rem;
      }
    }
  }
</style>
