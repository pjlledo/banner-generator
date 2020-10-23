export default [
  {
    id: 'Color',
    name: 'Text Lliure',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'align-left',
    components: {
      pane: () => import(/* webpackChunkName: "color" */ './color/ColorPane'),
      canvas: () => import(/* webpackChunkName: "color" */ './color/ColorCanvas'),
      help: () => import(/* webpackChunkName: "color" */ './color/ColorHelp')
    }
  },
  {
    id: 'Color2',
    name: 'Text Lliure 2',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'align-center',
    components: {
      pane: () => import(/* webpackChunkName: "color2" */ './color2/Color2Pane'),
      canvas: () => import(/* webpackChunkName: "color2" */ './color2/Color2Canvas'),
      help: () => import(/* webpackChunkName: "color2" */ './color2/Color2Help')
    }
  },
  {
    id: 'Generic',
    name: 'Citas',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'quote-left',
    components: {
      pane: () => import(/* webpackChunkName: "generic" */ './generic/GenericPane'),
      canvas: () => import(/* webpackChunkName: "generic" */ './generic/GenericCanvas'),
      help: () => import(/* webpackChunkName: "generic" */ './generic/GenericHelp')
    }
  },
  {
    id: 'Generic2',
    name: 'Citas 2',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'quote-left',
    components: {
      pane: () => import(/* webpackChunkName: "generic2" */ './generic2/Generic2Pane'),
      canvas: () => import(/* webpackChunkName: "generic2" */ './generic2/Generic2Canvas'),
      help: () => import(/* webpackChunkName: "generic2" */ './generic2/Generic2Help')
    }
  },
  {
    id: 'Headline',
    name: 'Titular de premsa',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'newspaper',
    components: {
      pane: () => import(/* webpackChunkName: "headline" */ './headline/HeadlinePane'),
      canvas: () => import(/* webpackChunkName: "headline" */ './headline/HeadlineCanvas'),
      help: () => import(/* webpackChunkName: "headline" */ './headline/HeadlineHelp')
    }
  },
  {
    id: 'Text',
    name: 'Text lliure',
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'align-left',
    archived: true,
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
    archived: true,
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
    archived: true,
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
    archived: true,
    components: {
      pane: () => import(/* webpackChunkName: "fakenews" */ './fakenews/FakeNewsPane'),
      canvas: () => import(/* webpackChunkName: "fakenews" */ './fakenews/FakeNewsCanvas'),
      help: () => import(/* webpackChunkName: "fakenews" */ './fakenews/FakeNewsHelp')
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
    aspects: ['11', '916'],
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
    aspects: ['11', '916'],
    supports: ['multicolor-blobs'],
    icon: 'keynote',
    components: {
      pane: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersPane'),
      canvas: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersCanvas'),
      help: () => import(/* webpackChunkName: "speakers" */ './speakers/SpeakersHelp')
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
    id: 'Tweet',
    name: 'Tweet',
    aspects: ['11', '916'],
    icon: 'twitter',
    iconPack: 'fab',
    /* label: '✨Nou', */
    components: {
      pane: () => import(/* webpackChunkName: "tweet" */ './tweet/TweetPane'),
      canvas: () => import(/* webpackChunkName: "tweet" */ './tweet/TweetCanvas'),
      help: () => import(/* webpackChunkName: "tweet" */ './tweet/TweetHelp')
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
