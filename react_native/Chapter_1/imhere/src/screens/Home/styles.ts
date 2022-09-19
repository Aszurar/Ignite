import { StyleSheet } from "react-native";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND,
    paddingHorizontal: 24,
    paddingTop: 75,
    paddingBottom: 48,
  },
  header: {
    marginBottom: 34,
  },
  title: {
    fontFamily: theme.FONTS.BOLD,
    fontSize: 24,
    lineHeight: 28,

    color: theme.COLORS.TEXT_PRIMARY,
  },
  date: {
    fontfamily: theme.FONTS.REGULAR,
    fontsize: 16,
    lineheight: 19,
    color: theme.COLORS.TEXT_SECONDARY,
  },
  inputContainer: {
    marginBottom: 42,
  },
  subtitle: {
    fontFamily: theme.FONTS.BOLD,
    fontSize: 20,
    lineHeight: 23,

    color: theme.COLORS.TEXT_PRIMARY
  },
  textContainer: {
    marginTop: 28,
    alignItems: 'center',
  },
  text: {
    fontFamily: theme.FONTS.REGULAR,
    fontSize: 14,
    lineHeight: 16,
    color: theme.COLORS.TEXT_PRIMARY,
    textAlign: 'center',
  }
});