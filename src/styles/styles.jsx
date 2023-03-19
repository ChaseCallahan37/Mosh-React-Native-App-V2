import { Platform, StyleSheet } from "react-native";
import colors from "./colors";

const { primary, secondary, black, white, red, blue } = colors;

const defaultStyles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  appText: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  blueCircle: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 50,
  },
  btn: {
    width: "95%",
    color: white,
    borderRadius: 40,
    height: 70,
    marginBottom: 25,
  },
  closeIcon: {
    backgroundColor: primary,
    top: 40,
    left: 30,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    backgroundColor: secondary,
    top: 40,
    right: 30,
  },
  icon: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loginButton: {
    backgroundColor: primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  primaryBtn: {
    backgroundColor: primary,
  },
  registerButton: {
    backgroundColor: secondary,
  },
  roundedBorder: {
    borderRadius: 30,
  },
  secondaryBtn: {
    backgroundColor: secondary,
  },
  shadow: {
    shadowColor: "grey",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  viewImageContainer: {
    backgroundColor: black,
    flex: 1,
  },
});

export default defaultStyles;
