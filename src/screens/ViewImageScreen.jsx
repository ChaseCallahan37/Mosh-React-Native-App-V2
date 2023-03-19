import { Image, View, StyleSheet } from "react-native";
import globalStyles from "../styles/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons color={"white"} name="close" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          color={"white"}
          name="trash-can-outline"
          size={35}
        />
      </View>
      <Image
        //set resize mode to make image fit with nice resolution
        resizeMode="contain"
        style={{ ...globalStyles.image, ...styles.image }}
        source={require("../assets/cool-chair.jpg")}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  image: {
    width: "100%",
  },
  deleteIcon: {
    right: 30,
    position: "absolute",
    top: 60,
  },
  closeIcon: {
    position: "absolute",
    left: 30,
    top: 60,
  },
});
