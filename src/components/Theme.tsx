export const colors = {
  resources: {
    textColor: {
      gold: 'text-yellow-400',
      lumber: 'text-green-400',
      food: 'text-green-400',
      foodSmallTax: 'text-yellow-400',
      foodBigTax: 'text-red-400',
      unit: 'text-purple-400',
      worker: 'text-blue-400',
      apm: 'text-emerald-400',
      ping: 'text-gray-700',
    },
    gradient: {
      gold: 'from-yellow-600',
      lumber: 'from-green-700',
      food: 'from-red-700',
      unit: 'from-purple-700',
      worker: 'from-blue-700',
      upgrades: 'from-gray-200',
    },
  },
  player: {
    gradient: {
      red: 'from-red-700',
      blue: 'from-blue-500',
      teal: 'from-teal-600',
      purple: 'from-purple-800',
      yellow: 'from-yellow-400',
      orange: 'from-orange-500',
      green: 'from-green-600',
      pink: 'from-pink-500',
      gray: 'from-gray-400',
      'light-blue': 'from-blue-400',
      'dark-green': 'from-green-800',
      brown: 'from-yellow-800',
      maroon: 'from-red-500',
      navy: 'from-blue-800',
      turquoise: 'from-lime-500',
      violet: 'from-purple-800',
      wheat: 'from-yellow-700',
      peach: 'from-orange-200',
      mint: 'from-green-400',
      lavender: 'from-purple-300',
      coal: 'from-gray-600',
      snow: 'from-gray-100',
      emerald: 'from-emerald-400',
      peanut: 'from-yellow-400',
    },
    border: {
      red: 'border-red-700',
      blue: 'border-blue-500',
      teal: 'border-teal-600',
      purple: 'border-purple-800',
      yellow: 'border-yellow-400',
      orange: 'border-orange-500',
      green: 'border-green-600',
      pink: 'border-pink-500',
      gray: 'border-gray-400',
      'light-blue': 'border-blue-400',
      'dark-green': 'border-green-800',
      brown: 'border-yellow-800',
      maroon: 'border-red-500',
      navy: 'border-blue-800',
      turquoise: 'border-lime-500',
      violet: 'border-purple-800',
      wheat: 'border-yellow-700',
      peach: 'border-orange-200',
      mint: 'border-green-400',
      lavender: 'border-purple-300',
      coal: 'border-gray-600',
      snow: 'border-gray-100',
      emerald: 'border-emerald-400',
      peanut: 'border-yellow-400',
    },
  },
};

const resolution1920x1080 = {
  item: {
    iconSize: 27,
    totalFontSize: 12,
    cooldownFontSize: 15,
  },
  upgrade: {
    iconSize: 42,
    levelFontSize: 11,
  },
  ability: {
    iconSize: 40,
    cooldownFontSize: 22,
    levelBarWidth: 8,
    levelBarGap: 0,
  },
  unit: {
    iconSize: 40,
    totalFontSize: 13,
  },
  hero: {
    iconSize: 68,
    levelFontSize: 15,
    progressBar: {
      height: 3,
    },
  },
  navbar: {
    width: '900px',
    height: '40px',
  },
  shield: {
    size: '28px',
  },
};

export const RESOLUTIONS = {
  '1920x1080': resolution1920x1080,
};

export const theme = {
  name: 'simple',
  ...RESOLUTIONS['1920x1080'],
  ...colors,
};
