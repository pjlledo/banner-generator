<template>
  <div class="banner-workspace">
    <b-tabs class="banner-aspect" type="is-toggle-rounded" position="is-centered">
      <b-tab-item label="1:1" icon="google-photos">
          <component :is="componentBanner" :banner-properties="bannerProperties" aspect="1:1" />
      </b-tab-item>
      <b-tab-item label="9:16" icon="library-music">
          <component :is="componentBanner" :banner-properties="bannerProperties" aspect="9:16" />
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'banner-workspace',
  props: {
    componentBanner: Object,
    bannerProperties: Object
  }
}
</script>
