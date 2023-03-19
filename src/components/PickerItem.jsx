import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";
import Icon from "./Icon";

function PickerItem({ label, onPress, IconComponent, style }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {IconComponent}
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingBottom: 20,
  },
});

export default PickerItem;
