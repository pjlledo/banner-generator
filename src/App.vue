<template>
  <div id="app">
    <AppHeader />
    <BannerComposer />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import BannerComposer from './components/BannerComposer.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    BannerComposer
  }
}
</script>
