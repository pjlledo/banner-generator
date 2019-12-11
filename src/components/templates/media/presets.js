import laSexta from './logos/channels/lasexta.jpg'
import laSextaNoche from './logos/programme/lasextanoche.jpg'
import alRojoVivo from './logos/programme/alrojovivo.svg'

import la1 from './logos/channels/tve.jpg'
import la2 from './logos/channels/la2.png'
import alacantiTv from './logos/channels/alacantitv.jpg'
import horas24 from './logos/channels/24h.jpg'
import antena3 from './logos/channels/antena3.jpg'
import apunt from './logos/channels/apunt.jpg'
import cuatro from './logos/channels/cuatro.png'
import la8mediterraneo from './logos/channels/la8mediterraneo.jpg'
import laPoblaTv from './logos/channels/lapoblatv.jpg'
import levanteTv from './logos/channels/levantetv.jpg'
import riberaTv from './logos/channels/riberatv.png'
import castelloTv from './logos/channels/castello-tv.png'

import tele7 from './logos/channels/tele7.jpg'
import telecinco from './logos/channels/telecinco.jpg'
import teleElx from './logos/channels/teleelx.png'
import teleOrihuela from './logos/channels/teleorihuela.jpg'
import teleSafor from './logos/channels/telesafor.jpg'
import teleSagunto from './logos/channels/telesagunto.jpg'

import cadenaSer from '../headline/logos/ser.svg'
import rne from './logos/channels/rne.jpg'
import ondaCero from './logos/channels/ondacero.png'

import radioPego from './logos/channels/radiopego.png'

import desayunos from './logos/programme/desayunos.jpeg'
import apuntNtc from './logos/programme/apuntntc.png'
import assumptesInterms from './logos/programme/assumptesinterns.jpg'
import docs from './logos/programme/docs.jpg'
import espejoPublico from './logos/programme/espejopublico.svg'

const sources = [
  {
    name: 'Apunt',
    channels: [
      {
        id: 'apunt',
        name: 'À Punt',
        logo: apunt,
        programmes: [
          {
            id: 'assumptesinterns',
            name: 'Assumptes Interns',
            logo: assumptesInterms,
            width: '100px'
          },
          {
            id: 'docs',
            name: 'Docs',
            logo: docs
          },
          {
            id: 'apuntntc',
            name: 'À punt Notícies',
            logo: apuntNtc,
            width: '88px'
          }
        ]
      }
    ]
  },
  {
    name: 'Televisions Estatals',
    channels: [
      {
        id: 'la1',
        name: 'La 1 TVE',
        logo: la1,
        color: 'white',
        programmes: [
          {
            id: 'desayunos',
            name: 'Los desayunos de TVE',
            logo: desayunos,
            color: 'black',
            width: '100px'
          }
        ]
      },
      {
        id: 'la2',
        name: 'La 2 TVE',
        logo: la2,
        programmes: []
      },
      {
        id: 'antena3',
        name: 'Antena 3',
        logo: antena3,
        programmes: [
          {
            id: 'espejopublico',
            name: 'Espejo Público',
            logo: espejoPublico,
            color: '#ddd',
            padding: 0.25
          }
        ]
      },
      {
        id: 'cuatro',
        name: 'Cuatro',
        logo: cuatro,
        programmes: [],
        color: 'white'
      },
      {
        id: 'telecinco',
        name: 'Telecinco',
        logo: telecinco,
        programmes: []
      },
      {
        id: 'lasexta',
        name: 'laSexta',
        logo: laSexta,
        programmes: [
          {
            id: 'noche',
            name: 'La Sexta Noche',
            logo: laSextaNoche,
            color: 'black'
          },
          {
            id: 'alrojovivo',
            name: 'Al Rojo Vivo',
            logo: alRojoVivo,
            color: '#d4001f',
            padding: 0.25
          }
        ]
      },
      {
        id: '24h',
        name: '24h tve',
        logo: horas24,
        programmes: []
      }
    ]
  },

  // radios
  {
    name: 'Ràdios Estatals',
    channels: [
      {
        id: 'cadenaser',
        name: 'Cadena SER',
        logo: cadenaSer,
        padding: '5px',
        programmes: []
      },
      {
        id: 'ondacero',
        name: 'Onda Cero',
        logo: ondaCero,
        programmes: []
      },
      {
        id: 'rne',
        name: 'Ràdio Nacional',
        logo: rne,
        programmes: []
      }
    ]
  },

  // televisions locals
  {
    name: 'Televisions Locals',
    channels: [
      {
        id: 'alacantitv',
        name: 'Alacantí Tv',
        logo: alacantiTv,
        programmes: []
      },
      {
        id: 'la8mediterraneo',
        name: 'la8 Mediterráneo',
        logo: la8mediterraneo,
        programmes: []
      },
      {
        id: 'lapoblatv',
        name: 'La Pobla TV',
        logo: laPoblaTv,
        programmes: []
      },
      {
        id: 'levantetv',
        name: 'Levante TV',
        logo: levanteTv,
        programmes: []
      },
      {
        id: 'riberatv',
        name: 'Ribera TV',
        logo: riberaTv,
        programmes: [],
        color: 'white'
      },
      {
        id: 'tele7',
        name: 'Tele 7 València',
        logo: tele7,
        programmes: []
      },
      {
        id: 'teleelx',
        name: 'TeleElx',
        logo: teleElx,
        programmes: []
      },
      {
        id: 'teleorihuela',
        name: 'Tele Orihuela',
        logo: teleOrihuela,
        programmes: []
      },
      {
        id: 'telesafor',
        name: 'TeleSafor',
        logo: teleSafor,
        programmes: []
      },
      {
        id: 'telesagunto',
        name: 'Tele Sagunt',
        logo: teleSagunto,
        programmes: []
      },
      {
        id: 'castellotv',
        name: 'Castelló TV',
        logo: castelloTv,
        color: '#fff',
        programmes: []
      },
    ]
  },
  {
    name: 'Radios Locals',
    channels: [
      {
        id: 'radiopego',
        name: 'Radio Pego',
        logo: radioPego,
        color: 'white',
        programmes: []
      }
    ]
  }
]

export default sources
