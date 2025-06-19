import React from 'react';
import { ViewProps } from 'react-native';
import { backgroundColor, fontSize, fontWeight, margin, maxWidth, overflow, padding, textAlign } from '../../theme';

export type BaseFooterProps = {
  children?: React.ReactNode;

  // 🎨 Visual
  bg?: keyof typeof backgroundColor;
  overflow?: keyof typeof overflow;

  // 📐 Layout
  maxWidth?: keyof typeof maxWidth;
  textAlign?: keyof typeof textAlign;

  // 🧾 Typography
  fontSize?: keyof typeof fontSize;
  fontWeight?: keyof typeof fontWeight;

  // 📦 Spacing - Padding
  padding?: keyof typeof padding;
  pt?: keyof typeof padding;
  pb?: keyof typeof padding;
  px?: keyof typeof padding;
  py?: keyof typeof padding;

  // 📦 Spacing - Margin
  margin?: keyof typeof margin;
  mt?: keyof typeof margin;
  mb?: keyof typeof margin;
  mx?: keyof typeof margin;
  my?: keyof typeof margin;

  // 📛 Branding
  companyName?: string;
  logo?: string;
} & ViewProps;
