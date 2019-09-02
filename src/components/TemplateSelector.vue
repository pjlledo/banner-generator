<template>
  <div class="template-selector">
    <div class="template-selector-templates">
      <h2>Selecciona un model de tarja</h2>
      <ul>
        <li v-for="template in templates" :key="template.id">
          <router-link :to="`/${template.id.toLowerCase()}`" class="template-item">
            <span class="template-item-icon">
              <component :is="icons[`${template.id}Icon`]" />
            </span>
            <span class="template-item-name">{{ template.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import templates from './templates/templates'

const icons = {}
templates.map(template => {
  const name = `${template.id}Icon`
  icons[name] = () => import(/* webpackMode: "eager" */ `./templates/${template.id.toLowerCase()}/${name}`)
})

export default {
  name: 'template-selector',

  components: {
    ...icons
  },

  data () {
    return {
      templates: templates,
      icons: icons
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

    &-templates {
      margin: $navbar-height auto;
    }

    h2 {
      color: rgba($gray-900, .25);
      padding: 1rem;
      margin-top: 2rem;
      font-size: 3rem;
      font-weight: bold;
      letter-spacing: -1px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      max-width: 70rem;
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
      box-shadow: $default-shadow;
      transition: .2s ease-in-out;

      &:hover {
        box-shadow: $raised-shadow;
        transform: rotate($rotation) scale(1.05);

        .template-item-name {
          background: linear-gradient(45deg, $gradient-start, $gradient-end);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      &:active {
        transform: rotate(0) scale(.95);
        opacity: .75;
      }

      &-icon {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -4rem;
        margin-left: -3rem;

        svg {
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
