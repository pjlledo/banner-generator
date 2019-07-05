<template>
  <div id="app">
    <app-header />
    <app-workspace />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppWorkspace from './components/AppWorkspace.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppWorkspace
  }
}
</script>
