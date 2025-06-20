import React from "react";
import { View } from "react-native";
import { BaseContainerProps } from "./types-container";
import { background, borderRadius, shadow } from "../../theme";
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
  px,
  py,
  margin,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  style,
}) => {
  const spacing = getSpacingStyles({
    padding,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    margin,
    mt,
    mb,
    ml,
    mr,
    mx,
    my
  });

  const boxStyles = {
    backgroundColor: background[bg],
    borderRadius: br ? borderRadius[br] : undefined,
    ...(shadowKey ? shadow[shadowKey] : {}),
    ...spacing,
    ...style,
  };

  return <View style={boxStyles}>{children}</View>;
};

export default BoxView;
