import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SettingItem({ icon, message, iconColor, style }) {
  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: colors[iconColor]
              ? colors[iconColor]
              : colors.soft,
          },
        ]}
      >
        <MaterialCommunityIcons color={"white"} name={icon} size={20} />
      </View>
      <AppText style={styles.title}>{message}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.white,
    alignItems: "center",
    paddingLeft: 10,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 15,
  },
  title: {
    fontWeight: "bold",
  },
});

export default SettingItem;
