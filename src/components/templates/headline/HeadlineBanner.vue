<template>
  <div class="banner-canvas">
    {{ bannerProperties }}
    <img :src="bannerProperties.picturePreview" />
  </div>
</template>

<script>
export default {
  name: 'HeadlineBanner',

  props: {
    bannerProperties: Object
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../variables";

  .banner-canvas {
    width: 700px;
    height: 700px;
    background: $gray-200;
  }
</style>
