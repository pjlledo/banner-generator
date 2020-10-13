<template>
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 855 855"
    enable-background="new 0 0 855 855"
  >
    <g :class="{ 'feminista': feminista, 'lgtb' : lgtb , 'red' : red , 'green' : green}">
        <linearGradient id="gradientlgtb" x1="425.19" y1="850.39" x2="425.19" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#6d237f"/>
            <stop offset="0.21" stop-color="#3057a1"/>
            <stop offset="0.41" stop-color="#098037"/>
            <stop offset="0.62" stop-color="#f8e720"/>
            <stop offset="0.82" stop-color="#ef861a"/>
            <stop offset="1" stop-color="#e00e18"/>
        </linearGradient>
      <path
        class="marc"
        d="M756.35,849v-5a86.9,86.9,0,0,0,61.7-25.5,87.84,87.84,0,0,0,26-61.65V92.12A87.22,87.22,0,0,0,756.88,5H92.12A87.22,87.22,0,0,0,5,92.12V756.88A87.22,87.22,0,0,0,92.12,844H319.5v5H92.12A92.22,92.22,0,0,1,0,756.88V92.12A92.22,92.22,0,0,1,92.12,0H756.88A92.22,92.22,0,0,1,849,92.12V756.88A92.78,92.78,0,0,1,821.58,822,91.84,91.84,0,0,1,756.35,849Z"
      />
      <path
        class="comilla"
        d="M90.38,67.74c-13.91-1.16-20,8.69-18,22.59H92.69v39.4H53.3V90.33c0-27.8,12.75-43.44,39.39-39.1Zm52.42,0c-13.9-1.16-20,8.69-18,22.59h20.27v39.4H105.73V90.33c0-27.8,12.74-43.44,39.39-39.1Z"
      />
      <path
        class="comilla"
        d="M710.78,779.22c13.91,1.16,20-8.69,18-22.6H708.47V717.23h39.39v39.39c0,27.81-12.75,43.45-39.39,39.11Zm52.43,0c13.9,1.16,20-8.69,18-22.6H760.89V717.23h39.39v39.39c0,27.81-12.74,43.45-39.39,39.11Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'marc',

  props: {
    feminista: Boolean,
    lgtb: Boolean,
    red: Boolean,
    green: Boolean
  }
}
</script>

<style lang="scss" scoped>
.comilla {
  fill: #e7600c;
}
.marc {
  fill: #e7600c;
  filter: drop-shadow(5px 5px 2px #e7600c);
}

.feminista {
    .marc {
      fill: #6D237F;
      filter: drop-shadow(5px 5px 2px #6D237F);
    }

    .comilla {
      fill: #6D237F;
    }
  }

.lgtb {
    .marc {
      fill: url(#gradientlgtb);

    filter: drop-shadow(5px 5px 2px #e3e3e3);
    }

    .comilla {
      fill: #353949;
    }
  }

.red {
    .marc {
      fill: #e00e18;

    filter: drop-shadow(5px 5px 2px #e00e18);
    }

    .comilla {
      fill: #e00e18;
    }
  }

.green {
    .marc {
      fill: #098037;

    filter: drop-shadow(5px 5px 2px #098037);
    }

    .comilla {
      fill: #098037;
    }
  }
</style>
