import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { BaseTextProps } from "./types-typography";
import { fontSize, fontWeight, textAlign, text } from "../../theme";

const CaptionText: React.FC<BaseTextProps> = ({
  children,
  align = "left",
  color = "neutral",
  size = "caption",
  weight = "normal",
  //   font = "heading",
  italic,
  style,
  ...rest
}) => {
  return (
    <Text
      style={[
        styles.base,
        { fontSize: fontSize[size] },
        { fontWeight: fontWeight[weight] },
        // fontTokens[font],
        { color: text[color] },
        { textAlign: textAlign[align] },
        italic && styles.italic,
        style,
      ] as StyleProp<TextStyle>}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
  },
  italic: {
    fontStyle: "italic",
  },
});

export default CaptionText;
