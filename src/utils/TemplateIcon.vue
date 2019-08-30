<template>
  <span class="template-icon">
    <img svg-inline v-if="icon === 'Headline'" class="icon" src="../components/templates/headline/headline.svg" alt="Headline Icon" />
    <img svg-inline v-if="icon === 'Generic'" class="icon" src="../components/templates/headline/headline.svg" alt="Generic Icon" />
    <img svg-inline v-if="icon === 'Quote'" class="icon" src="../components/templates/quote/quote.svg" alt="Quote Icon" />
    <img svg-inline v-if="icon === 'Media'" class="icon" src="../components/templates/headline/headline.svg" alt="Headline Icon" />
    <img svg-inline v-if="icon === 'Event'" class="icon" src="../components/templates/headline/headline.svg" alt="Headline Icon" />
    <img svg-inline v-if="icon === 'Speakers'" class="icon" src="../components/templates/headline/headline.svg" alt="Headline Icon" />
  </span>
</template>

<script>
export default {
  name: 'template-icon',

  props: {
    icon: String
  }
}
</script>

<style lang="scss" scoped>
  .template-icon {
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
</style>