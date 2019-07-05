<template>
  <div class="template-selector">
    <ul>
      <li v-for="template in templates" :key="template.id">
        <a href="#" @click="$emit('update', template)">{{ template.name }}</a>
      </li>
    </ul>
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
    ul {
      display: flex;
      justify-content: center;
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
</style>
