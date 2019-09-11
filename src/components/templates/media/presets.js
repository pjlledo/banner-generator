import laSexta from './logos/channels/lasexta.jpg'
import laSextaNoche from './logos/programme/lasextanoche.jpg'
import alRojoVivo from './logos/programme/alrojovivo.svg'

import la1 from './logos/channels/tve.png'
import alacantiTv from './logos/channels/alacantitv.jpg'
import horas24 from './logos/channels/24h.jpg'
import antena3 from './logos/channels/antena3.jpg'
import apunt from './logos/channels/apunt.jpg'
import cuatro from './logos/channels/cuatro.png'
import la8mediterraneo from './logos/channels/la8mediterraneo.jpg'
import laPoblaTv from './logos/channels/lapoblatv.jpg'
import levanteTv from './logos/channels/levantetv.jpg'
import riberaTv from './logos/channels/riberatv.jpg'

import tele7 from './logos/channels/tele7.jpg'
import telecinco from './logos/channels/telecinco.jpg'
import teleElx from './logos/channels/teleelx.png'
import teleOrihuela from './logos/channels/teleorihuela.jpg'
import teleSafor from './logos/channels/telesafor.jpg'
import teleSagunto from './logos/channels/telesagunto.jpg'

import cadenaSer from '../headline/logos/ser.svg'
import rne from './logos/channels/rne.png'
import ondaCero from './logos/channels/ondacero.png'

import desayunos from './logos/programme/desayunos.jpeg'
import apuntNtc from './logos/programme/apuntntc.png'
import assumptesInterms from './logos/programme/assumptesinterns.jpg'
import docs from './logos/programme/docs.jpg'
import espejoPublico from './logos/programme/espejopublico.svg'

const sources = [
  {
    id: 'la1',
    name: 'la1',
    logo: la1,
    programmes: [
      {
        id: 'desayunos',
        name: 'Los desayunos de TVE',
        logo: desayunos,
        color: 'black'
      },
    ]
  },
  {
    id: 'alacantitv',
    name: 'Alacantí Tv',
    logo: alacantiTv,
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
      programmes: []
    },
  ]
  },
  {
    id: 'apunt',
    name: 'À Punt',
    logo: apunt,
    programmes: [
      {
        id: 'assumptesinterns',
        name: 'Assumptes Interns',
        logo: assumptesInterms,
        programmes: []
      },
      {
        id: 'docs',
        name: 'Docs',
        logo: docs,
        programmes: []
      },
      {
        id: 'apuntntc',
        name: 'À punt Notícies',
        logo: apuntNtc,
        programmes: []
      },
    ]
  },
  {
    id: 'cadenaser',
    name: 'Cadena SER',
    logo: cadenaSer,
    programmes: []
  },
  {
    id: 'cuatro',
    name: 'Cuatro',
    logo: cuatro,
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
    id: 'ondacero',
    name: 'Onda Cero',
    logo: ondaCero,
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
    programmes: []
  },
  {
    id: 'rne',
    name: 'Ràdio Nacional',
    logo: rne,
    programmes: []
  },
  {
    id: 'tele7',
    name: 'Tele 7 València',
    logo: tele7,
    programmes: []
  },
  {
    id: 'telecinco',
    name: 'Telecinco',
    logo: telecinco,
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
    id: '24h',
    name: '24h tve',
    logo: horas24,
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
  }
]

export default sources
