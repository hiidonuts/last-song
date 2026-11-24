export const HUAWEI_URL =
  (import.meta.env.VITE_HUAWEI_URL as string | undefined) || '#huawei-gamecenter'

export const APK_URL = '/Last_Song.apk'

export const site = {
  name: 'Last Song',
  tagline: 'Navigate shadows and survive the silence in a dark 2D pixel platformer.',
  ctaPrimary: 'Download for Android',
  ctaNav: 'Download for Android',
  soon: 'Available soon on Huawei GameCenter',
}

export const navLinks = [
  { id: 'overview', label: 'Overview' },
  { id: 'realms', label: 'Realms' },
  { id: 'faq', label: 'FAQ' },
  { id: 'reviews', label: 'Reviews' },
] as const

export const heroTags = [
  { label: 'Huawei GameCenter', tone: 'green' as const, place: 'a' as const },
  { label: 'Coming soon to PC', tone: 'purple' as const, place: 'b' as const },
  { label: '2D platformer', tone: 'yellow' as const, place: 'c' as const },
  { label: 'Pixel art', tone: 'orange' as const, place: 'd' as const },
]

export const realmsIntro = {
  script: 'game preview',
  title: 'Shadowed realms',
  blurb: 'Explore handcrafted pixel art environments shrouded in eternal darkness.',
}

export type Realm = {
  id: string
  tab: string
  chapter: string
  title: string
  body: string
  tags: [string, string]
  panel: 'preview' | 'inventory'
  image: string
  colorVar: string
  ink: 'dark' | 'light'
}

export const realms: Realm[] = [
  {
    id: 'world-01',
    tab: 'World 01',
    chapter: 'Chapter I',
    title: 'Ruined sanctuaries',
    body: 'Ancient stone shrines hidden deep beneath forgotten cavernous crypts.',
    tags: ['Dark ruins', 'Environment'],
    panel: 'preview',
    image: '/game/scope/rain.png',
    colorVar: '--color-folder-01',
    ink: 'dark',
  },
  {
    id: 'world-02',
    tab: 'World 02',
    chapter: 'Chapter II',
    title: 'Sunken deserts',
    body: 'Traverse glowing dusk dunes littered with forgotten relics of lost ages.',
    tags: ['Desert dunes', 'Exploration'],
    panel: 'preview',
    image: '/game/realm2/4.png',
    colorVar: '--color-deep',
    ink: 'light',
  },
  {
    id: 'world-03',
    tab: 'World 03',
    chapter: 'Bestiary',
    title: 'Silent beasts',
    body: 'Confront monstrous entities lurking within dark corridors.',
    tags: ['Monsters', 'Combat'],
    panel: 'preview',
    image: '/game/sprites/NightBorne.png',
    colorVar: '--color-folder-03',
    ink: 'dark',
  },
  {
    id: 'world-04',
    tab: 'World 04',
    chapter: 'Inventory',
    title: 'Ancient relics',
    body: 'Discover powerful magical items and ancient gear to survive the darkness.',
    tags: ['Loot', 'Mechanics'],
    panel: 'inventory',
    image: '/game/realm2/6.png',
    colorVar: '--color-folder-04',
    ink: 'dark',
  },
]

export const pickupGrid = [
  { src: '/game/pickups/key.png', alt: 'Key' },
  { src: '/game/pickups/fragment.png', alt: 'Fragment' },
  { src: '/game/pickups/lightfoot_potion.png', alt: 'Lightfoot potion' },
  { src: '/game/pickups/shortsighted_charm.png', alt: 'Charm' },
  { src: '/game/pickups/hint_ring.png', alt: 'Hint ring' },
  { src: '/game/pickups/note_return.png', alt: 'Note' },
]

export const features = {
  title: 'Survive the dark',
  cards: [
    {
      kicker: 'Dungeons',
      body: 'Explore subterranean chambers packed with forgotten history and deadly traps.',
      chips: ['Handcrafted', 'Subterranean', 'Hidden traps', 'Secrets'],
      color: '--color-sticker-green',
    },
    {
      kicker: 'Movement',
      body: 'Master responsive jump physics built for exacting platforming obstacles.',
      chips: ['Precision jump', 'Fluid physics', 'Wall dash', 'Platforming'],
      color: '--color-accent',
    },
    {
      kicker: 'Light control',
      body: 'Conserve your flame to light faint paths and keep nameless beasts at bay.',
      chips: ['Torch fuel', 'Dynamic light', 'Shadow beasts', 'Survival'],
      color: '--color-sticker-yellow',
    },
    {
      kicker: 'Pixel art',
      body: 'Immerse yourself in fluid 2D animation and atmospheric dark environments.',
      chips: ['Retro pixel', '2D animation', 'Dark world', 'Atmospheric'],
      color: '--color-sticker-orange',
    },
  ],
}

export const scope = {
  script: 'Game scope',
  title: 'Built for persistent explorers',
  image: '/game/scope/credits.png',
  stats: [
    { value: '50+', label: 'Unique levels' },
    { value: '10+', label: 'Boss encounters' },
    { value: '100%', label: 'Handcrafted pixel art' },
  ],
}

export const reviews = {
  script: 'Playtest feedback',
  title: 'Reactions from the dark',
  items: [
    {
      name: 'Ethan Brooks',
      role: 'Speedrunner',
      quote: 'The platforming feels extremely tight and responsive. Every jump is deliberate.',
    },
    {
      name: 'Molly Murphy',
      role: 'Beta tester',
      quote: 'Managing torch fuel while dodging wall traps makes every room feel tense.',
    },
    {
      name: 'Luke Ramirez',
      role: 'Indie game streamer',
      quote: 'Classic platforming, with light mechanics that give it a modern edge.',
    },
    {
      name: 'Grace Kelly',
      role: 'Playtester',
      quote: 'The pixel animation on the boss encounters is insanely detailed.',
    },
    {
      name: 'Nathan Shaw',
      role: 'Game reviewer',
      quote: 'A masterclass in tension, pixel art, and environmental sound.',
    },
  ],
}

export const faq = {
  title: 'Before you descend',
  image: '/game/scope/credits.png',
  items: [
    {
      q: 'What is Last Song?',
      a: 'Last Song is a dark 2D pixel art platformer centered on exploration and torch fuel.',
    },
    {
      q: 'Is the game difficult?',
      a: 'It is a firm but fair platforming challenge that rewards precision and planning.',
    },
    {
      q: 'Does Last Song support gamepads?',
      a: 'Controller support and keyboard bindings are planned from the first release.',
    },
    {
      q: 'Where will it release?',
      a: 'First on Huawei GameCenter, with PC to follow.',
    },
    {
      q: 'How long is a complete playthrough?',
      a: 'A full run is built for persistent explorers who hunt every hidden room.',
    },
    {
      q: 'Will there be a playable demo?',
      a: 'A demo is planned once the GameCenter page is live.',
    },
  ],
}

export const devlog = {
  title: 'Join the devlog',
  script: 'inside the pixel studio',
  submit: 'Get updates',
  thanks: 'Thanks — we will be in touch when the next note goes out.',
  fields: {
    name: 'Your name',
    email: 'Email address',
    handle: 'Player handle',
    message: 'Message',
  },
}

export const footer = {
  navigation: [
    { label: 'Overview', href: '#overview' },
    { label: 'Realms', href: '#realms' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Reviews', href: '#reviews' },
  ],
  community: [
    { label: 'Huawei GameCenter', href: HUAWEI_URL },
  ],
  rights: '©2026 Last Song. All rights reserved.',
  backTop: 'Back to top',
}

export const heroSprites = [
  '/game/sprites/mage_guardian-blue.png',
  '/game/sprites/mage_guardian-magenta.png',
  '/game/sprites/mage_guardian-red.png',
  '/game/sprites/NightBorne_idle.gif',
]
