export const height = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 80,
  '5xl': 96,
  '6xl': 128,
  '7xl': 256,
  '8xl': 352, // Tailwind's h-88 ≈ 352px
  full: '100%',  // Use as string in RN
};

export const minHeight = {
  none: 0,
  full: '100%',
};

export const maxHeight = {
  none: 0,
  sm: 64,
  md: 128,
  lg: 192,
  xl: 256,
  full: '100%',
};

export const width = {
  auto: 'auto',
  fit: 'auto',
  full: '100%',
};


export const minWidth = {
  none: 0,
  sm: 64,
  md: 128,
  lg: 192,
  xl: 256,
  full: '100%',
};

export const maxWidth = {
  none: 'none',
  sm: 320,
  md: 384,
  lg: 448,
  xl: 512,
  '2xl': 672,
  '3xl': 768,
  '4xl': 896,
  '5xl': 1024,
  '6xl': 1152,
  full: '100%',
  prose: 65 * 16, // ≈ max readable prose width (em-based)
};

export const spaceY = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 80,
  '5xl': 96,
  '6xl': 128,
};

export const lineHeight = {
  tight: 16,
  normal: 20,
  relaxed: 24,
  loose: 28,
};

export const letterSpacing = {
  none: 0,
  wide: 1,
  wider: 2,
  widest: 3,
};
