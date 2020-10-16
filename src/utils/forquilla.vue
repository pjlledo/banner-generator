<template>
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 1100 1100"
    enable-background="new 0 0 1100 1100"
  >
    <g :class="{ 'feminista': feminista, 'lgtb' : lgtb , 'red' : red , 'green' : green , 'mono' : mono }">
        <linearGradient id="gradientlgtb" x1="425.19" y1="850.39" x2="425.19" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#6d237f"/>
            <stop offset="0.10" stop-color="#3057a1"/>
            <stop offset="0.20" stop-color="#098037"/>
            <stop offset="0.30" stop-color="#f8e720"/>
            <stop offset="0.40" stop-color="#ef861a"/>
            <stop offset="0.5" stop-color="#e00e18"/>
        </linearGradient>
      <path class="marc" d="M943.4,1058.22H664.75V1052H943.4A108.7,108.7,0,0,0,1052,943.4V114.82A109.44,109.44,0,0,0,1019.64,38a108.32,108.32,0,0,0-76.9-31.78V0A114.45,114.45,0,0,1,1024,33.6a115.65,115.65,0,0,1,34.19,81.19V943.4A115,115,0,0,1,943.4,1058.22Z" />
      <path class="marc" d="M397.37,1058.22H114.82A115,115,0,0,1,0,943.4V114.82A115,115,0,0,1,114.82,0H398.23V6.23H114.82A108.71,108.71,0,0,0,6.23,114.82V943.4A108.71,108.71,0,0,0,114.82,1052H397.37Z" />
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
    green: Boolean,
    mono: Boolean
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

  .mono {
    .marc {
      fill: #FFFFFF;

    filter: drop-shadow(5px 5px 2px #FFFFFF);
    }

    .comilla {
      fill: none;
    }
  }
</style>
