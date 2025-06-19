export const textColor = {
  primary: '#2C2C2C',       // Deep charcoal
  secondary: '#6B7280',
  light: '#FFFFFF',
  accent: '#1E3A8A',        // Navy Blue
  neutral: '#374151',
  dark: '#111827',
  red: '#B91C1C',           // Tailwind red-700
  blue: '#1D4ED8',          // Tailwind blue-700
  white: '#FFFFFF',
  success: '#16A34A',       // Tailwind green-600
  danger: '#DC2626',        // Tailwind red-600
};

export const backgroundColor = {
  none: 'transparent',
  primary: '#E0ECF8',
  secondary: '#CCE0F5',
  accent: '#F8FAFC',
  neutral: '#F1F5F9',
  surface: '#E2E8F0',
  dark: '#000000',
  red: '#FCA5A5',         // Tailwind red-300
  redDark: '#B91C1C',     // red-700
  blue: '#93C5FD',        // blue-300
  white: '#FFFFFF',
  success: '#D1FAE5',     // green-100
  warning: '#FEF3C7',     // yellow-100
  danger: '#FECACA',      // red-100
};

export const borderColor = {
  primary: '#3B82F6',
  secondary: '#93C5FD',
  accent: '#1E3A8A',
  neutral: '#D1D5DB',
  danger: '#F87171',
};

export const colorVariants = {
  primary: {
    backgroundColor: '#3B82F6',
    textColor: '#FFFFFF',
  },
  secondary: {
    backgroundColor: '#CCE0F5',
    textColor: '#1E3A8A',
  },
  accent: {
    backgroundColor: '#F8FAFC',
    textColor: '#1E3A8A',
  },
  neutral: {
    backgroundColor: '#F1F5F9',
    textColor: '#374151',
  },
  success: {
    backgroundColor: '#D1FAE5',
    textColor: '#16A34A',
  },
  warning: {
    backgroundColor: '#FEF3C7',
    textColor: '#B45309',
  },
  danger: {
    backgroundColor: '#FECACA',
    textColor: '#DC2626',
  },
  surface: {
    backgroundColor: '#E2E8F0',
    textColor: '#2C2C2C',
  },
  ghost: {
    backgroundColor: 'transparent',
    textColor: '#1E3A8A',
  },
  outlineLight: {
    borderColor: '#1E3A8A',
    textColor: '#1E3A8A',
    backgroundColor: 'transparent',
  },
  outlineDark: {
    borderColor: '#000000',
    textColor: '#FFFFFF',
    backgroundColor: 'transparent',
  },
} as const;

