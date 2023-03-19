import { StyleSheet, View, Image } from "react-native";
import colors from "../styles/colors";
import globalStyles from "../styles/styles";
import AppText from "./AppText";

function Profile({ image, name, listings }) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        resizeMode="contain"
        style={{ ...globalStyles.image, ...styles.image }}
      />
      <View>
        <AppText>{name}</AppText>
        <AppText>{listings} listings</AppText>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    borderRadius: 50,
    width: 50,
    marginRight: 10,
  },
});
