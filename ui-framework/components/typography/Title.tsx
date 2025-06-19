import React from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { BaseTextProps } from "./types-typography";
import { fontSize, fontWeight, textAlign, textColor } from "../../theme";

const Title: React.FC<BaseTextProps> = ({
  children,
  align = "center",
  color = "primary",
  size = "title",
  weight = "bold",
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
        { color: textColor[color] },
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

export default Title;