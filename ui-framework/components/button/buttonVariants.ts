import { ViewStyle, TextStyle } from "react-native";
import { borderRadius, colorVariants, fontWeight, padding, state } from "../../theme";

export const getButtonStyle = (
  variant: keyof typeof colorVariants,
  radius: keyof typeof borderRadius,
  px: keyof typeof padding,
  py: keyof typeof padding,
  disabled: boolean = false
): { container: ViewStyle; text: TextStyle } => {
  const { background, text, borderColor } =
    colorVariants[variant] as {
      background: string;
      text: string;
      borderColor?: string;
    };

  const styles = {
    container: {
      backgroundColor: background,
      borderRadius: borderRadius[radius] || borderRadius.sm,
      borderWidth: borderColor ? 1 : 0,
      borderColor: borderColor || "transparent",
      paddingHorizontal: padding[px] || 12,
      paddingVertical: padding[py] || 16,
      alignItems: "center" as ViewStyle["alignItems"],
      justifyContent: "center" as ViewStyle["justifyContent"],
      ...(disabled ? state.disabled : {}),
    } as ViewStyle,
    text: {
      color: text,
      fontWeight: fontWeight.semibold,
      fontSize: 16,
    } as TextStyle,
  };

  return styles;
};
