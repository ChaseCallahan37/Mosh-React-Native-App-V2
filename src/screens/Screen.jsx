import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../styles/colors";

function Screen({ children, background, style }) {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors[background] ? colors[background] : "" },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: "100%",
  },
});

export default Screen;
