import React from "react";
import { View } from "react-native";
import { BaseCardProps } from "./types-cards";
import {
  backgroundColor,
  borderRadius,
  padding,
  margin,
  shadow,
} from "../../theme";

const Card: React.FC<BaseCardProps> = ({
  children,
  bg = "accent",
  margin: m,
  mx,
  my,
  padding: p,
  px,
  py,
  rounded = true,
  shadow: showShadow = true,
  style,
}) => {
  const cardStyles = {
    backgroundColor: backgroundColor[bg],
    borderRadius: rounded ? borderRadius.xl : 0,
    ...(p ? { padding: padding[p] } : {}),
    ...(px ? { paddingHorizontal: padding[px] } : {}),
    ...(py ? { paddingVertical: padding[py] } : {}),
    ...(m ? { margin: margin[m] } : {}),
    ...(mx ? { marginHorizontal: margin[mx] } : {}),
    ...(my ? { marginVertical: margin[my] } : {}),
    ...(showShadow ? shadow.xl : {}),
    ...style,
  };

  return <View style={cardStyles}>{children}</View>;
};

export default Card;
