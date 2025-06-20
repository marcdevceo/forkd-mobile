import {
  padding,
  fontSize,
  fontWeight,
  text,
  borderRadius,
} from "../../theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginVertical: padding.sm,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    color: text.primary,
    marginBottom: 4,
  },
  dropdown: {
    backgroundColor: text.accent,
    padding: padding.sm,
    borderRadius: borderRadius.md,
  },
  dropdownText: {
    fontSize: fontSize.base,
    color: text.dark,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    paddingHorizontal: padding.md,
  },
  modalContent: {
    backgroundColor: text.white,
    borderRadius: borderRadius.lg,
    maxHeight: 300,
    padding: padding.sm,
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: fontSize.base,
    color: text.dark,
  },
});
