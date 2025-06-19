import React from "react";
import { ScrollView } from "react-native";
import { BaseContainerProps } from "./types-container";
import { backgroundColor, borderRadius, overflow, shadow } from "../../theme";
import { getSpacingStyles } from "../../utils/getSpacingStyles";

const ScrollSection: React.FC<BaseContainerProps> = ({
  children,
  bg = "accent",
  borderRadius: br,
  overflow: of,
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

  const scrollStyles = {
    backgroundColor: backgroundColor[bg],
    borderRadius: br ? borderRadius[br] : undefined,
    overflow: of ? overflow[of] : undefined,
    ...(shadowKey ? shadow[shadowKey] : {}),
    ...spacing,
    ...style,
  };

  return (
    <ScrollView contentContainerStyle={scrollStyles}>{children}</ScrollView>
  );
};

export default ScrollSection;
