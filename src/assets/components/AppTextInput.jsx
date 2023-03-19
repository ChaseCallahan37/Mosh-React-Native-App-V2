import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import defaultStyles from "../styles/styles";

function AppTextInput({ style, icon, placeholder, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          size={20}
          color={colors.medium}
          name={icon}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.lightGray}
        placeholder={placeholder}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 10,
  },
});

export default AppTextInput;
