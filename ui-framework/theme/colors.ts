export const text = {
  primary: '#2E2A26',         // Dark espresso
  secondary: '#7B6F66',       // Toasted almond
  light: '#FFFFFF',
  accent: '#C1440E',          // Burnt orange (like paprika)
  neutral: '#58534F',         // Mushroom brown
  dark: '#1B1B1B',            // Deep roast
  red: '#D7263D',             // Bold tomato red
  blue: '#227C9D',            // Cool sea blue
  white: '#FFFFFF',
  success: '#2E7D32',         // Herb green
  danger: '#C62828',          // Cayenne red
};

export const background = {
  none: 'transparent',
  primary: '#FFF4E6',         // Creamy vanilla
  secondary: '#F5EBDD',       // Warm parchment
  accent: '#FFF0E0',          // Light peach
  neutral: '#F2F2F2',         // Clean eggshell
  surface: '#F9FAFB',         // Ultra-light
  dark: '#000000',
  red: '#FFCDD2',             // Soft cherry
  redDark: '#D7263D',         // Tomato red
  blue: '#BBE4F3',            // Ice blue
  white: '#FFFFFF',
  success: '#E8F5E9',         // Fresh herb
  warning: '#FFF3CD',         // Lemon glaze
  danger: '#F8D7DA',          // Light rose
};

export const borderColor = {
  primary: '#E07A5F',         // Terracotta
  secondary: '#F4A261',       // Apricot
  accent: '#C1440E',          // Burnt orange
  neutral: '#D6D3D1',         // Dusty almond
  danger: '#E57373',          // Salmon red
};

export const colorVariants = {
  primary: {
    background: '#E07A5F',    // Terracotta
    text: '#FFFFFF',
  },
  secondary: {
    background: '#F4A261',    // Apricot
    text: '#3E2C1C',
  },
  accent: {
    background: '#FFF0E0',    // Light peach
    text: '#C1440E',
  },
  neutral: {
    background: '#F2F2F2',    // Light grayish
    text: '#58534F',
  },
  success: {
    background: '#E8F5E9',
    text: '#2E7D32',
  },
  warning: {
    background: '#FFF3CD',
    text: '#B25C00',
  },
  danger: {
    background: '#F8D7DA',
    text: '#C62828',
  },
  surface: {
    background: '#F9FAFB',
    text: '#2E2A26',
  },
  ghost: {
    background: 'transparent',
    text: '#C1440E',
  },
  outlineLight: {
    borderColor: '#C1440E',
    text: '#C1440E',
    background: 'transparent',
  },
  outlineDark: {
    borderColor: '#1B1B1B',
    text: '#FFFFFF',
    background: 'transparent',
  },
} as const;


