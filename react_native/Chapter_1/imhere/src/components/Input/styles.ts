import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 16,

    color: theme.COLORS.TEXT_PRIMARY,
    backgroundColor: theme.COLORS.BACKGROUND_SECONDARY,
    borderRadius: 4,

    marginRight: 8,
  }
})