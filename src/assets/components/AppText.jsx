import { Text, StyleSheet } from "react-native";

import stylesGlobal from "../styles/styles";

function AppText({ children, style, numberOfLines = 5 }) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{ ...stylesGlobal.appText, ...style }}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {},
});

export default AppText;
