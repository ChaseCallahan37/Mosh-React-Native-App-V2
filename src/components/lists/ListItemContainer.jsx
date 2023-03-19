import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../../styles/colors";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItemDeleteAction from "./ListItemDeleteAction";

function ListItemContainer({
  children,
  onPress = () => console.log(""),
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.medium}>
        <View style={styles.container}>{children}</View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 14,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItemContainer;
