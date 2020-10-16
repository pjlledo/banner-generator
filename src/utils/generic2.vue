<template>
  <svg
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 753.71 1090.62"
    enable-background="new 0 0 753.71 1090.62"
  >
    <g :class="{ feminista: feminista, lgtb: lgtb, red: red, green: green, mono : mono}">
      <linearGradient
        id="gradientlgtb"
        x1="377.55"
        x2="377.55"
        y2="1092"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.2" stop-color="#6e2380" />
        <stop offset="0.38" stop-color="#3057a1" />
        <stop offset="0.55" stop-color="#098037" />
        <stop offset="0.72" stop-color="#f8e720" />
        <stop offset="0.86" stop-color="#ef861a" />
        <stop offset="1" stop-color="#e00e18" />
      </linearGradient>

      <path
        class="marc"
        d="M54.3,403.27A54.32,54.32,0,0,1,1,338.39C2.71,327.18,38.88,84.75,44.91,69.64a110.61,110.61,0,1,1,205.46,82h0C244.7,165.83,106.12,369.31,100.23,378A54.27,54.27,0,0,1,54.3,403.27ZM147.6,5a105.85,105.85,0,0,0-98,66.5C44.89,83.18,19,251.71,6,339.19l0,.12a49.31,49.31,0,0,0,90.09,35.91C145.94,302,241.35,160.74,245.72,149.8h0A105.74,105.74,0,0,0,147.6,5Z"
      />
      <path
        class="marc"
        d="M252.15,535.91a54.32,54.32,0,0,1-43.29-87.15c6.4-9.32,145.18-211.35,157.21-222.33A110.62,110.62,0,0,1,514.82,390.2h0c-11.33,10.29-225.07,132.4-234.17,137.6A54,54,0,0,1,252.15,535.91ZM440.38,202.77a105.19,105.19,0,0,0-70.94,27.36C360.14,238.61,263,378.73,213,451.64l-.08.1A49.31,49.31,0,0,0,278.1,523.5c76.94-43.94,224.62-129.06,233.36-137h0a105.57,105.57,0,0,0-71.07-183.73Z"
      />
      <path
        class="marc"
        d="M371.51,747.74a54.33,54.33,0,0,1-24.38-102.8c9.84-5.57,223.16-126.32,238.76-130.85A110.6,110.6,0,1,1,647.8,726.45h0c-14.63,4.26-260.35,20.33-270.8,21A53.4,53.4,0,0,1,371.51,747.74ZM617,514.61a106.19,106.19,0,0,0-29.74,4.28c-12.06,3.5-160.79,86.85-237.75,130.43l-.1.06a49.31,49.31,0,0,0,27.14,93.1c88.45-5.77,258.53-17.54,269.82-20.83h0a105.64,105.64,0,0,0-29.37-207Z"
      />
      <path
        class="marc"
        d="M643.38,1090.62a112.22,112.22,0,0,1-19-1.64h0c-15.05-2.61-242.9-95.83-252.59-99.8A54.29,54.29,0,0,1,389.88,884c11.31-.7,255.94-15.76,272-13a110.63,110.63,0,0,1-18.46,219.66Zm-18.16-6.57A105.61,105.61,0,0,0,661,875.89c-12.39-2.13-182.6,7.62-270.87,13.07H390a49.3,49.3,0,0,0-16.42,95.56c82,33.57,240,97.51,251.64,99.53Z"
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
    fill: #6d237f;
    filter: drop-shadow(5px 5px 2px #6d237f);
  }

  .comilla {
    fill: #6d237f;
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
    fill: #ffffff;
    filter: drop-shadow(5px 5px 2px #ffffff);
  }

}

</style>
