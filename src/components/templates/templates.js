const templates = [
  {
    id: 'Headline',
    name: 'Titular de premsa',
    aspects: ['11', '916'],
    icon: 'newspaper',
    components: {
      pane: () => import(/* webpackChunkName: "headline" */ './headline/HeadlinePane'),
      canvas: () => import(/* webpackChunkName: "headline" */ './headline/HeadlineCanvas')
    }
  },
  {
    id: 'Generic',
    name: 'Frase',
    aspects: ['11', '916'],
    icon: 'font',
    components: {
      pane: () => import(/* webpackChunkName: "generic" */ './generic/GenericPane'),
      canvas: () => import(/* webpackChunkName: "generic" */ './generic/GenericCanvas')
    }
  },
  {
    id: 'Quote',
    name: 'Cita',
    aspects: ['11', '916'],
    icon: 'quote-left',
    components: {
      pane: () => import(/* webpackChunkName: "quote" */ './quote/QuotePane'),
      canvas: () => import(/* webpackChunkName: "quote" */ './quote/QuoteCanvas')
    }
  },
  {
    id: 'Media',
    name: 'Mitjans',
    aspects: ['11', '916'],
    icon: 'broadcast-tower',
    components: {
      pane: () => import(/* webpackChunkName: "media" */ './media/MediaPane'),
      canvas: () => import(/* webpackChunkName: "media" */ './media/MediaCanvas')
    }
  },
  {
    id: 'Event',
    name: 'Acte amb foto',
    aspects: ['11', '916', 'event'],
    icon: 'portrait',
    components: {
      pane: () => import(/* webpackChunkName: "event" */ './event/EventPane'),
      canvas: () => import(/* webpackChunkName: "event" */ './event/EventCanvas')
    }
  },
  {
    id: 'Speakers',
    name: 'Acte amb ponents',
    aspects: ['11', '916', 'event'],
    icon: 'keynote',
    components: {
      pane: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersPane'),
      canvas: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersCanvas')
    }
  }
]

export default templates
