export default [
  {
    id: 'Headline',
    name: 'Titular de premsa',
    aspects: ['11', '916'],
    icon: 'newspaper',
    components: {
      pane: () => import(/* webpackChunkName: "headline" */ './headline/HeadlinePane'),
      canvas: () => import(/* webpackChunkName: "headline" */ './headline/HeadlineCanvas'),
      help: () => import(/* webpackChunkName: "headline" */ './headline/HeadlineHelp')
    }
  },
  {
    id: 'Generic',
    name: 'Frase',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'font',
    components: {
      pane: () => import(/* webpackChunkName: "generic" */ './generic/GenericPane'),
      canvas: () => import(/* webpackChunkName: "generic" */ './generic/GenericCanvas'),
      help: () => import(/* webpackChunkName: "generic" */ './generic/GenericHelp')
    }
  },
  {
    id: 'Generic2',
    name: 'Frase 2',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'font',
    components: {
      pane: () => import(/* webpackChunkName: "generic" */ './generic2/GenericPane'),
      canvas: () => import(/* webpackChunkName: "generic" */ './generic2/GenericCanvas'),
      help: () => import(/* webpackChunkName: "generic" */ './generic2/GenericHelp')
    }
  },
  {
    id: 'Text',
    name: 'Text lliure',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'align-left',
    components: {
      pane: () => import(/* webpackChunkName: "text" */ './text/TextPane'),
      canvas: () => import(/* webpackChunkName: "text" */ './text/TextCanvas'),
      help: () => import(/* webpackChunkName: "text" */ './text/TextHelp')
    }
  },
  {
    id: 'Quote',
    name: 'Cita',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'quote-left',
    components: {
      pane: () => import(/* webpackChunkName: "quote" */ './quote/QuotePane'),
      canvas: () => import(/* webpackChunkName: "quote" */ './quote/QuoteCanvas'),
      help: () => import(/* webpackChunkName: "quote" */ './quote/QuoteHelp')
    }
  },
  {
    id: 'Comparison',
    name: 'Comparativa',
    aspects: ['11'],
    icon: 'columns',
    components: {
      pane: () => import(/* webpackChunkName: "comparison" */ './comparison/ComparisonPane'),
      canvas: () => import(/* webpackChunkName: "comparison" */ './comparison/ComparisonCanvas'),
      help: () => import(/* webpackChunkName: "comparison" */ './comparison/ComparisonHelp')
    }
  },
  {
    id: 'FakeNews',
    name: 'Bulo',
    aspects: ['11', '916'],
    icon: 'ban',
    components: {
      pane: () => import(/* webpackChunkName: "fakenews" */ './fakenews/FakeNewsPane'),
      canvas: () => import(/* webpackChunkName: "fakenews" */ './fakenews/FakeNewsCanvas'),
      help: () => import(/* webpackChunkName: "fakenews" */ './fakenews/FakeNewsHelp')
    }
  },
  {
    id: 'Tweet',
    name: 'Tweet',
    aspects: ['11'],
    icon: 'twitter',
    iconPack: 'fab',
    label: '✨Nou',
    components: {
      pane: () => import(/* webpackChunkName: "tweet" */ './tweet/TweetPane'),
      canvas: () => import(/* webpackChunkName: "tweet" */ './tweet/TweetCanvas'),
      help: () => import(/* webpackChunkName: "tweet" */ './tweet/TweetHelp')
    }
  },
  {
    id: 'Media',
    name: 'Mitjans',
    aspects: ['11', '916'],
    icon: 'broadcast-tower',
    components: {
      pane: () => import(/* webpackChunkName: "media" */ './media/MediaPane'),
      canvas: () => import(/* webpackChunkName: "media" */ './media/MediaCanvas'),
      help: () => import(/* webpackChunkName: "media" */ './media/MediaHelp')
    }
  },
  {
    id: 'Event',
    name: 'Acte amb foto',
    aspects: ['11', '916', 'event'],
    supports: ['multicolor-blobs'],
    icon: 'portrait',
    components: {
      pane: () => import(/* webpackChunkName: "event" */ './event/EventPane'),
      canvas: () => import(/* webpackChunkName: "event" */ './event/EventCanvas'),
      help: () => import(/* webpackChunkName: "event" */ './event/EventHelp')
    }
  },
  {
    id: 'Speakers',
    name: 'Acte amb ponents',
    aspects: ['11', '916', 'event'],
    supports: ['multicolor-blobs'],
    icon: 'keynote',
    components: {
      pane: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersPane'),
      canvas: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersCanvas'),
      help: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersHelp')
    }
  },
  {
    id: 'Social',
    name: 'Icona per a Xarxes',
    aspects: ['11'],
    icon: 'user-circle',
    components: {
      pane: () => import(/* webpackChunkName: "social" */ './social/SocialPane'),
      canvas: () => import(/* webpackChunkName: "social" */ './social/SocialCanvas'),
      help: () => import(/* webpackChunkName: "social" */ './social/SocialHelp')
    }
  },
  {
    id: 'Video',
    name: 'Portada de vídeo',
    aspects: ['11', 'event'],
    icon: 'play',
    components: {
      pane: () => import(/* webpackChunkName: "videocover" */ './videocover/VideoCoverPane'),
      canvas: () => import(/* webpackChunkName: "videocover" */ './videocover/VideoCoverCanvas'),
      help: () => import(/* webpackChunkName: "videocover" */ './videocover/VideoCoverHelp')
    }
  },
  {
    id: 'Superavit',
    name: 'Superàvit local',
    aspects: ['11'],
    icon: 'euro-sign',
    label: '🦠Covid-19',
    archived: true,
    components: {
      pane: () => import(/* webpackChunkName: "archived" */ './archived/superavit/SuperavitPane'),
      canvas: () => import(/* webpackChunkName: "archived" */ './archived/superavit/SuperavitCanvas'),
      help: () => import(/* webpackChunkName: "archived" */ './archived/superavit/SuperavitHelp')
    }
  },
  {
    id: 'Cover',
    name: 'Portades per a Facebook i Twitter',
    aspects: ['coverfb', 'covertw'],
    icon: 'user-circle',
    components: {
      pane: () => import(/* webpackChunkName: "cover" */ './cover/CoverPane'),
      canvas: () => import(/* webpackChunkName: "cover" */ './cover/CoverCanvas'),
      help: () => import(/* webpackChunkName: "cover" */ './cover/CoverHelp')
    }
  }
]
