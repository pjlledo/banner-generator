import laSexta from './logos/channels/lasexta.jpg'

import laSextaNoche from './logos/programme/lasextanoche.jpg'
import alRojoVivo from './logos/programme/alrojovivo.svg'

const sources = [
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
        color: 'red'
      }
    ]
  }
]

export default sources
