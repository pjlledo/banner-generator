  <template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
    <g id="Taronja" v-if="logoStyle === 'normal'">
      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="250" y1="11.3508" x2="250" y2="488.6492">
        <stop offset="0" style="stop-color:#F29128"/>
        <stop offset="0.2097" style="stop-color:#EC8428"/>
        <stop offset="0.622" style="stop-color:#DD6227"/>
        <stop offset="1" style="stop-color:#D13927"/>
      </linearGradient>
      <path class="st0" d="M23.35,11.35C10.49,11.35,0,21.37,0,33.66v432.67c0,12.27,10.49,22.32,23.35,22.32h453.28
        c12.82,0,23.37-10.05,23.37-22.32V33.66c0-12.29-10.54-22.31-23.37-22.31H23.35z"/>
    </g>
    <g id="Feminista" v-if="logoStyle === 'feminista'">
      <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="250" y1="488.6492" x2="250" y2="11.3508">
        <stop offset="0" style="stop-color:#7D3980"/>
        <stop offset="1" style="stop-color:#C44486"/>
      </linearGradient>
      <path class="st1" d="M23.35,11.35C10.49,11.35,0,21.37,0,33.66v432.67c0,12.27,10.49,22.32,23.35,22.32h453.28
        c12.82,0,23.37-10.05,23.37-22.32V33.66c0-12.29-10.54-22.31-23.37-22.31H23.35z"/>
    </g>
    <g id="LGTB" v-if="logoStyle === 'lgtb'">
      <g>
        <defs>
          <path id="SVGID_3_" d="M23.35,11.35C10.49,11.35,0,21.37,0,33.66v432.67c0,12.27,10.49,22.32,23.35,22.32h453.28
            c12.82,0,23.37-10.05,23.37-22.32V33.66c0-12.29-10.54-22.31-23.37-22.31H23.35z"/>
        </defs>
        <clipPath id="SVGID_4_">
          <use xlink:href="#SVGID_3_"  style="overflow:visible;"/>
        </clipPath>
        <g class="st2">
            <rect x="-0.53" y="169.98" transform="matrix(1 -1.023529e-03 1.023529e-03 1 -0.2148 0.2558)" class="st3" width="500.62" height="80.03"/>
            <rect x="-0.61" y="89.95" transform="matrix(1 -1.023529e-03 1.023529e-03 1 -0.1329 0.2556)" class="st4" width="500.62" height="80.03"/>
            <rect x="-0.69" y="11.35" transform="matrix(1 -1.023529e-03 1.023529e-03 1 -0.0524 0.2555)" class="st5" width="500.62" height="80.03"/>
            <rect x="-0.29" y="408.64" transform="matrix(1 -1.023529e-03 1.023529e-03 1 -0.4591 0.2561)" class="st6" width="500.62" height="80.03"/>
            <rect x="-0.37" y="328.61" transform="matrix(1 -1.023529e-03 1.023529e-03 1 -0.3772 0.256)" class="st7" width="500.62" height="80.03"/>
            <rect x="-0.45" y="250.01" transform="matrix(1 -1.023529e-03 1.023529e-03 1 -0.2967 0.2559)" class="st8" width="500.62" height="80.03"/>
        </g>
      </g>
    </g>
    <g id="Cara">
      <rect x="289.69" y="141.56" class="st9" width="52.24" height="49.86"/>
      <path class="st9" d="M162.01,141.56h52.27v49.89h-48.11c-30.1,0-49.82-7.3-62.63-36.4l20.07-11.52c9,18.5,20.08,22.79,38.4,22.79
        V141.56z"/>
      <path class="st9" d="M402.32,288.82l18.34,23.45c-47.79,39.66-101.73,60.11-167.81,60.11c-66.07,0-120.05-20.45-167.78-60.11
        l18.33-23.45c47.37,33.73,86.16,49.22,149.46,49.22C316.15,338.05,354.95,322.55,402.32,288.82"/>
    </g>
    </svg>
  </template>

<script>
export default {
  name: 'careta',

  props: {
    logoStyle: {
      type: String,
      default: 'normal',
      validator: (value) => {
        return ['normal', 'feminista', 'lgtb'].indexOf(value) !== -1
      }
    }
  }
}
</script>

  <style lang="scss" scoped>
    .st0 { fill:url(#SVGID_1_); }
    .st1 { fill:url(#SVGID_2_); }
    .st2 { clip-path:url(#SVGID_4_); }
    .st3 { fill:#FFD10F; }
    .st4 { fill:#F79226; }
    .st5 { fill:#EF404D; }
    .st6 { fill:#A14A9C; }
    .st7 { fill:#55A4DB; }
    .st8 { fill:#7FC347; }
    .st9 { fill:#FFFFFF; }
  </style>
