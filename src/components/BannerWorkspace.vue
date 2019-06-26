<template>
    <div class="bannerWorkspace">
        <p>1:1 / 16:9</p>
        <component :is="componentBanner" :banner-properties="bannerProperties" />
        <p>guardar/nou</p>
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

<style lang="scss" scoped>
    @import "../variables";

    .bannerWorkspace {
        background-color: $white;
        padding: 1rem;
        display: flex;
        border-radius: 20px;
    }
</style>