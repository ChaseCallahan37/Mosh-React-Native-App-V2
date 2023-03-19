import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../styles/colors";
import Icon from "./Icon";

function NewListingTabButton({ size = 65, onPress }) {
  const calculateSize = () => ({
    height: size,
    width: size,
    borderRadius: size / 2,
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[calculateSize(), styles.container]}>
        <Icon
          name={"plus-circle"}
          iconColor={colors.white}
          backgroundColor={colors.primary}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    bottom: 20,
    borderWidth: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingTabButton;
