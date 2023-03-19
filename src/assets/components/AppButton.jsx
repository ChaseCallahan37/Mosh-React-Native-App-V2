import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
import AppText from "./AppText";

function AppButton({ children, onPress, color = "primary", title }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <AppText style={{ ...styles.text }}>{title}</AppText>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

// import { Pressable, TouchableHighlight } from "react-native";
// import AppText from "./AppText";
// import styles from "../styles/styles";

// function AppButton({ children, onPress, style }) {
//   return (
//     <Pressable
//       onPress={onPress}
//       style={{
//         ...styles.center,
//         ...styles.btn,
//         ...style,
//       }}
//     >
//       <AppText>{children}</AppText>
//     </Pressable>
//   );
// }

// export default AppButton;
