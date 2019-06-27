<template>
  <div>
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