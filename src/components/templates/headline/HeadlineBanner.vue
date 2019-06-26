<template>
  <div>
    {{ bannerProperties.text }}
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