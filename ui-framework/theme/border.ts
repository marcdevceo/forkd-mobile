export const borderRadius = {
  none: 0,
  sm: 2,
  DEFAULT: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999, // Fully rounded (circle/oval)
};

export const borderWidth = {
  none: 0,
  thin: 1,
  sm: 2,
  md: 4,
  lg: 8,
};

export const borderStyle = {
  solid: 'solid' as const,
  dashed: 'dashed' as const,
  dotted: 'dotted' as const,
  none: 'solid' as const,   // Use solid + borderWidth: 0 for 'none'
};
