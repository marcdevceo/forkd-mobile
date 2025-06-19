import React from "react";
import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewProps,
} from "react-native";
import {
  backgroundColor,
  borderRadius,
  colorVariants,
  margin,
  padding,
} from "../../theme";

export type BaseInputProps = {
  id?: string;
  name?: string;
  label?: string;
  type?: "text" | "password";
  placeholder?: string;
  padding?: keyof typeof padding;
  bg?: keyof typeof backgroundColor;
  radius?: keyof typeof borderRadius;
  className?: object; // for passing style objects
  required?: boolean;

  /** Optional element to display on the right side of the input */
  rightElement?: React.ReactNode;

  button?: {
    name: string;
    variant: keyof typeof colorVariants;
  };

  onChange?: (value: string) => void;
  value?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
} & TextInputProps;

export type BaseFormProps = {
  children?: React.ReactNode;
  fields?: BaseInputProps[];
  title?: string;
  buttonTitle?: string;
  buttonVariant?: keyof typeof colorVariants;
  bg?: keyof typeof backgroundColor;
  padding?: keyof typeof padding;
  margin?: keyof typeof margin;
  shadow?: boolean;
  radius?: boolean;
  action?: string;
  className?: object;
} & ViewProps;
