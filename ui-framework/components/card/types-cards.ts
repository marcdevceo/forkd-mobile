import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import { background, padding, margin } from '../../theme';

export interface BaseCardProps {
  children: ReactNode;
  bg?: keyof typeof background;
  padding?: keyof typeof padding;
  px?: keyof typeof padding;
  py?: keyof typeof padding;
  margin?: keyof typeof margin;
  mx?: keyof typeof margin;
  my?: keyof typeof margin;
  rounded?: boolean;
  shadow?: boolean;
  style?: ViewStyle;
}

