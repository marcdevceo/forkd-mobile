import React from "react";
import { StyleProp, ViewStyle, SafeAreaView, Platform, StatusBar } from "react-native";
import { BaseContainerProps } from "./types-container";
import {
  background,
  borderRadius,
  overflow,
  zIndex,
  position,
  flexGrow,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  height,
  // minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,
  shadow,
} from "../../theme";
import { getSpacingStyles } from "../../utils/getSpacingStyles";

const MainView: React.FC<BaseContainerProps> = ({
  children,
  // Layout Defaults
  bg = "primary",
  flexGrow: fg = "full",
  flexDirection: fd = "column",
  flexWrap: fw = "nowrap",
  justify = "center",
  alignItems: ai = "center",
  alignContent: ac = "start",
  gap: g = "lg",
  // minHeight: mh = "md",
  padding = "md",

  // Style Overrides
  height: h,
  maxHeight: maxH,
  width: w,
  minWidth: minW,
  maxWidth: maxW,
  zIndex: z,
  position: pos,
  borderRadius: br,
  overflow: of,
  shadow: shadowKey,

  // Spacing
  margin,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  padding: p,
  pt = "safeArea",
  pb,
  pl,
  pr,
  px,
  py,

  // Custom
  style,
}) => {
  const spacing = getSpacingStyles({
    margin,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
    padding: p,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
  });

  const mainStyles = {
    backgroundColor: background[bg],
    borderRadius: br ? borderRadius[br] : undefined,
    overflow: of ? overflow[of] : undefined,
    zIndex: z ? zIndex[z] : undefined,
    position: pos ? position[pos] : undefined,
    flexGrow: fg ? flexGrow[fg] : undefined,
    flexDirection: fd ? flexDirection[fd] : undefined,
    flexWrap: fw ? flexWrap[fw] : undefined,
    justifyContent: justify ? justifyContent[justify] : undefined,
    alignItems: ai ? alignItems[ai] : undefined,
    alignContent: ac ? alignContent[ac] : undefined,
    ...(g ? { gap: gap[g] } : {}),
    ...(h ? { height: typeof h === "number" ? h : height[h] } : {}),
    // ...(mh ? { minHeight: typeof mh === "number" ? mh : minHeight[mh] } : {}),
    ...(maxH
      ? { maxHeight: typeof maxH === "number" ? maxH : maxHeight[maxH] }
      : {}),
    ...(w ? { width: typeof w === "number" ? w : width[w] } : {}),
    ...(minW
      ? { minWidth: typeof minW === "number" ? minW : minWidth[minW] }
      : {}),
    ...(maxW
      ? { maxWidth: typeof maxW === "number" ? maxW : maxWidth[maxW] }
      : {}),
    ...(shadowKey ? shadow[shadowKey] : {}),
    ...spacing,
    ...style,
  } as ViewStyle;

  return <SafeAreaView style={mainStyles as StyleProp<ViewStyle>}>{children}</SafeAreaView>;
};

export default MainView;
