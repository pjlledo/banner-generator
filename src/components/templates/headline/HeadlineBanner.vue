<template>
  <div>
    {{ bannerProperties }}
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