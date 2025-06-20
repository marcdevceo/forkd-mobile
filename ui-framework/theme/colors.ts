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
    backgroundColor: '#E07A5F',    // Terracotta
    textColor: '#FFFFFF',
  },
  secondary: {
    backgroundColor: '#F4A261',    // Apricot
    textColor: '#3E2C1C',
  },
  accent: {
    backgroundColor: '#FFF0E0',    // Light peach
    textColor: '#C1440E',
  },
  neutral: {
    backgroundColor: '#F2F2F2',    // Light grayish
    textColor: '#58534F',
  },
  success: {
    backgroundColor: '#E8F5E9',
    textColor: '#2E7D32',
  },
  warning: {
    backgroundColor: '#FFF3CD',
    textColor: '#B25C00',
  },
  danger: {
    backgroundColor: '#F8D7DA',
    textColor: '#C62828',
  },
  surface: {
    backgroundColor: '#F9FAFB',
    textColor: '#2E2A26',
  },
  ghost: {
    backgroundColor: 'transparent',
    textColor: '#C1440E',
  },
  outlineLight: {
    borderColor: '#C1440E',
    textColor: '#C1440E',
    backgroundColor: 'transparent',
  },
  outlineDark: {
    borderColor: '#1B1B1B',
    textColor: '#FFFFFF',
    backgroundColor: 'transparent',
  },
} as const;


