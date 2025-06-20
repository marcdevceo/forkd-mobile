import React from 'react';
import { ActivityIndicator, Pressable, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { spinnerSize } from '../../theme';
import { BaseButtonProps } from './types-button';
import { getButtonStyle } from './buttonVariants';

const Button: React.FC<BaseButtonProps> = ({
  children,
  label,
  onPress,
  variant = 'primary',
  radius = 'md',
  px = "2xl",
  py = "md",
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...',
  style,
  textStyle,
}) => {
  const styles = getButtonStyle(variant, radius, px, py, disabled);

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, style] as StyleProp<ViewStyle>}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <ActivityIndicator
            color={styles.text.color}
            size={spinnerSize.sm}
            style={{ marginRight: 8 }}
          />
          <Text style={[styles.text, textStyle] as StyleProp<TextStyle>}>{loadingText}</Text>
        </>
      ) : (
        <Text style={[styles.text, textStyle] as StyleProp<TextStyle>}>{label}</Text>
      )}
      {children}
    </Pressable>
  );
};

export default Button;
