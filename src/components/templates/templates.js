const templates = [
  {
    id: 'Headline',
    name: 'Titular de premsa',
    aspects: ['11', '916'],
    components: {
      pane: () => import(/* webpackChunkName: "headline" */ './headline/HeadlinePane'),
      canvas: () => import(/* webpackChunkName: "headline" */ './headline/HeadlineCanvas'),
      icon: () => import(/* webpackChunkName: "icons" */ './headline/HeadlineIcon')
    }
  },
  {
    id: 'Generic',
    name: 'Frase',
    aspects: ['11', '916'],
    components: {
      pane: () => import(/* webpackChunkName: "generic" */ './generic/GenericPane'),
      canvas: () => import(/* webpackChunkName: "generic" */ './generic/GenericCanvas'),
      icon: () => import(/* webpackChunkName: "icons" */ './generic/GenericIcon')
    }
  },
  {
    id: 'Quote',
    name: 'Cita',
    aspects: ['11', '916'],
    components: {
      pane: () => import(/* webpackChunkName: "quote" */ './quote/QuotePane'),
      canvas: () => import(/* webpackChunkName: "quote" */ './quote/QuoteCanvas'),
      icon: () => import(/* webpackChunkName: "icons" */ './quote/QuoteIcon')
    }
  },
  {
    id: 'Media',
    name: 'Mitjans',
    aspects: ['11', '916'],
    components: {
      pane: () => import(/* webpackChunkName: "media" */ './media/MediaPane'),
      canvas: () => import(/* webpackChunkName: "media" */ './media/MediaCanvas'),
      icon: () => import(/* webpackChunkName: "icons" */ './media/MediaIcon')
    }
  },
  {
    id: 'Event',
    name: 'Acte amb foto',
    aspects: ['11', '916', 'event'],
    components: {
      pane: () => import(/* webpackChunkName: "event" */ './event/EventPane'),
      canvas: () => import(/* webpackChunkName: "event" */ './event/EventCanvas'),
      icon: () => import(/* webpackChunkName: "icons" */ './event/EventIcon')
    }
  },
  {
    id: 'Speakers',
    name: 'Acte amb ponents',
    aspects: ['11', '916', 'event'],
    components: {
      pane: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersPane'),
      canvas: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersCanvas'),
      icon: () => import(/* webpackChunkName: "icons" */ './speakers/SpeakersIcon')
    }
  }
]

export default templates
