import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import {
  backgroundColor,
  borderRadius,
  shadow,
  overflow,
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,
  flexGrow,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  position,
  gap,
  margin,
  padding,
  zIndex,
} from "../../theme";

export interface BaseContainerProps {
  children: ReactNode;

  // 🎨 Visual
  bg?: keyof typeof backgroundColor;
  borderRadius?: keyof typeof borderRadius;
  shadow?: keyof typeof shadow;
  overflow?: keyof typeof overflow;

  // 📐 Layout
  height?: keyof typeof height | number;
  minHeight?: keyof typeof minHeight | number;
  maxHeight?: keyof typeof maxHeight | number;
  width?: keyof typeof width | number;
  minWidth?: keyof typeof minWidth | number;
  maxWidth?: keyof typeof maxWidth | number;

  // 🧱 Flex
  flexGrow?: keyof typeof flexGrow;
  flexDirection?: keyof typeof flexDirection;
  flexWrap?: keyof typeof flexWrap;
  justifyContent?: keyof typeof justifyContent;
  justify?: keyof typeof justifyContent;
  alignItems?: keyof typeof alignItems;
  alignContent?: keyof typeof alignContent;
  gap?: keyof typeof gap;
  position?: keyof typeof position;

  // 📦 Spacing
  margin?: keyof typeof margin;
  mt?: keyof typeof margin;
  mb?: keyof typeof margin;
  ml?: keyof typeof margin;
  mr?: keyof typeof margin;
  mx?: keyof typeof margin;
  my?: keyof typeof margin;
  padding?: keyof typeof padding;
  pt?: keyof typeof padding;
  pb?: keyof typeof padding;
  pl?: keyof typeof padding;
  pr?: keyof typeof padding;
  px?: keyof typeof padding;
  py?: keyof typeof padding;

  // 🔢 Z-Index
  zIndex?: keyof typeof zIndex;

  // 🛠️ Custom styling
  style?: ViewStyle;
}
