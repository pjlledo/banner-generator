<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 325.7 325.7" style="enable-background:new 0 0 325.7 325.7;" xml:space="preserve">
    <g class="headline-icon">
      <path class="background" d="M302,325H23.5c-12.6,0-23-10.4-23-23V23.5c0-12.6,10.4-23,23-23H302c12.6,0,23,10.4,23,23V302
        C325,314.6,314.7,325,302,325z"/>
      <g>
        <line class="line line-off" x1="40.3" y1="158.5" x2="73.5" y2="158.5"/>
        <line class="line line-off line-thick" x1="44.2" y1="199.2" x2="276.4" y2="199.2"/>
        <line class="line line-off line-thick" x1="43.9" y1="239" x2="175.6" y2="239"/>
      </g>
      <g>
        <linearGradient id="compromisGradient" gradientUnits="userSpaceOnUse" x1="29.9265" y1="239" x2="189.6048" y2="239">
          <stop offset="0" class="gradient-start"/>
          <stop offset="1" class="gradient-end" />
        </linearGradient>
        <line class="line line-on line-1" x1="40.3" y1="158.5" x2="73.5" y2="158.5"/>
        <line class="line line-on line-thick line-2" x1="44.2" y1="199.2" x2="276.4" y2="199.2"/>
        <line class="line line-on line-thick line-3" x1="43.9" y1="239" x2="175.6" y2="239"/>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'headline-icon'
}
</script>

<style lang="scss">
  @import "../../../sass/variables";

  .headline-icon {
    .background {
      fill: $gray-200;
    }

    .gradient {
      &-start {
        stop-color: $gradient-start;
      }

      &-end {
        stop-color: $gradient-end;
      }
    }

    .line {
      fill: none;
      stroke: $gray-300;
      stroke-width: 17;
      stroke-linecap: round;
      stroke-miterlimit: 10;

      &-on {
        stroke: url(#compromisGradient);
        stroke-dasharray: 235;
        stroke-dashoffset: 235;
        opacity: 0;
        transition: stroke-dashoffset .5s ease-in-out, opacity .5s ease-out;
      }

      &-thick {
        stroke-width: 28;
      }

      &-1 {
        stroke-dasharray: 40;
        stroke-dashoffset: 40;
      }

      &-2 {
        transition-delay: .2s;
      }

      &-3 {
        stroke-dasharray: 180;
        stroke-dashoffset: 180;
        transition-delay: .3s;
      }
    }
  }

  .template-item:hover {
    .headline-icon {
      .line-on {
        stroke-dashoffset: 0;
        opacity: 1;
      }
    }
  }
</style>
