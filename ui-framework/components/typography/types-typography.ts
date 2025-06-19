import React from "react";
import { TextProps, StyleProp, TextStyle } from "react-native";
import { fontSize, fontWeight, textAlign, textColor } from "../../theme";

export type BaseTextProps = {
  children: React.ReactNode;

  // 🧑🏾 Style Tokens
  align?: keyof typeof textAlign;
  color?: keyof typeof textColor;
  size?: keyof typeof fontSize;
  weight?: keyof typeof fontWeight;
//   font?: keyof typeof fontTokens;
  italic?: boolean;

  // 🎨 RN-specific
  style?: StyleProp<TextStyle>;
} & TextProps;

export type ListsProps<T> = {
  color?: keyof typeof textColor;
  listDisc?: boolean;
  lists: T[];
  width?: number | string;
  renderItem: (item: T, index: number) => React.ReactNode;
};
