import React from "react";
import { ScrollView } from "react-native";
import { BaseContainerProps } from "./types-container";
import { background, borderRadius, overflow, shadow } from "../../theme";
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
    my,
  });

  const scrollStyles = {
    backgroundColor: background[bg],
    borderRadius: br ? borderRadius[br] : undefined,
    overflow: of ? overflow[of] : undefined,
    ...(shadowKey ? shadow[shadowKey] : {}),
    ...spacing,
    ...style,
  };

  return (
    <ScrollView contentContainerStyle={scrollStyles} showsVerticalScrollIndicator={false}>{children}</ScrollView>
  );
};

export default ScrollSection;
