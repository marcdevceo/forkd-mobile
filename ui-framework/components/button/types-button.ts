import { padding } from '@/ui-framework/theme';
import { ViewStyle, TextStyle, GestureResponderEvent, StyleProp } from 'react-native';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'danger'
  | 'surface'
  | 'ghost'
  | 'outlineLight'
  | 'outlineDark';

export type RadiusSize =
  | 'none'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full';

export interface BaseButtonProps {
  children?: React.ReactNode;
  label?: string;
  variant?: ButtonVariant;
  radius?: RadiusSize;
  px?: keyof typeof padding;
  py?: keyof typeof padding;
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
