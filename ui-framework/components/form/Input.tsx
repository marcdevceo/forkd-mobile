import React from "react";
import { View, Text, TextInput, StyleProp, TextStyle } from "react-native";
import { getSpacingStyles } from "../../utils/getSpacingStyles";
import { BaseInputProps } from "./types-forms";
import { backgroundColor, borderRadius } from "../../theme";

const Input: React.FC<BaseInputProps> = ({
  id,
  name,
  label,
  placeholder,
  required = false,
  type = "text",
  padding = "md",
  bg = "white",
  radius = "md",
  className,
  rightElement,
  ...rest
}: BaseInputProps) => {
  const spacing = getSpacingStyles({ padding });

  return (
    <View style={{ width: "100%", marginBottom: 12 }}>
      {label && (
        <Text style={{ marginBottom: 6, fontWeight: "500" }}>{label}</Text>
      )}

      <View style={{ position: "relative" }}>
        <TextInput
          placeholder={placeholder}
          autoCapitalize="none"
          secureTextEntry={type === "password"}
          style={[
            {
              width: "100%",
              borderWidth: 1,
              borderColor: "#ccc",
            },
            { backgroundColor: backgroundColor[bg] },
            { borderRadius: borderRadius[radius] },
            spacing,
            className,
          ] as StyleProp<TextStyle>}
          {...rest}
        />
        {rightElement && (
          <View style={{ position: "absolute", right: 16, top: 16 }}>
            {rightElement}
          </View>
        )}
      </View>
    </View>
  );
};

export default Input;
