import React from "react";
import { View } from "react-native";
import { BaseContainerProps } from "./types-container";
import { backgroundColor, borderRadius, shadow } from "../../theme";
import { getSpacingStyles } from "../../utils/getSpacingStyles";

const BoxView: React.FC<BaseContainerProps> = ({
  children,
  bg = "accent",
  borderRadius: br,
  shadow: shadowKey,
  padding,
  pt,
  pb,
  pl,
  pr,
  margin,
  mt,
  mb,
  ml,
  mr,
  style,
}) => {
  const spacing = getSpacingStyles({
    padding,
    pt,
    pb,
    pl,
    pr,
    margin,
    mt,
    mb,
    ml,
    mr,
  });

  const boxStyles = {
    backgroundColor: backgroundColor[bg],
    borderRadius: br ? borderRadius[br] : undefined,
    ...(shadowKey ? shadow[shadowKey] : {}),
    ...spacing,
    ...style,
  };

  return <View style={boxStyles}>{children}</View>;
};

export default BoxView;
