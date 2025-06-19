import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { BaseContainerProps } from './types-container';
import { backgroundColor, borderRadius, flexGrow, flexWrap, justifyContent, alignItems, shadow } from '../../theme';
import { getSpacingStyles } from '../../utils/getSpacingStyles';

const RowView: React.FC<BaseContainerProps> = ({
  children,
  bg = 'accent',
  borderRadius: br,
  flexGrow: fg,
  flexWrap: fw,
  justify = 'start',
  alignItems: ai = 'center',
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

  const rowStyles: ViewStyle = {
    flexDirection: 'row',
    backgroundColor: backgroundColor[bg],
    borderRadius: br ? borderRadius[br] : undefined,
    flexGrow: fg ? flexGrow[fg] : undefined,
    flexWrap: fw ? flexWrap[fw] : undefined,
    justifyContent: justify ? justifyContent[justify] : undefined,
    alignItems: ai ? alignItems[ai] : undefined,
    ...(shadowKey ? shadow[shadowKey] : {}),
    ...spacing,
    ...style,
  };

  return <View style={rowStyles as StyleProp<ViewStyle>}>{children}</View>;
};

export default RowView;
