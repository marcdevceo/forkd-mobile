import {
  padding,
  fontSize,
  fontWeight,
  textColor,
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
    color: textColor.primary,
    marginBottom: 4,
  },
  dropdown: {
    backgroundColor: textColor.accent,
    padding: padding.sm,
    borderRadius: borderRadius.md,
  },
  dropdownText: {
    fontSize: fontSize.base,
    color: textColor.dark,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    paddingHorizontal: padding.md,
  },
  modalContent: {
    backgroundColor: textColor.white,
    borderRadius: borderRadius.lg,
    maxHeight: 300,
    padding: padding.sm,
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: fontSize.base,
    color: textColor.dark,
  },
});
