import { Platform, StatusBar } from "react-native";

export const padding = {
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
  "safeArea": Platform.OS === "android" ? StatusBar.currentHeight: 0, 
};
