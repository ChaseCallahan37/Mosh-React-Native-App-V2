import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../../styles/colors";
import AppText from "../AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItemDeleteAction from "./ListItemDeleteAction";
import Icon from "../Icon";

function ListItem({
  showChevron = false,
  title,
  subTitle,
  image,
  IconComponent,
  onPress = () => console.log(""),
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.medium}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          {showChevron && (
            <Icon
              style={styles.chevron}
              name={"chevron-right"}
              backgroundColor={colors.white}
              iconColor={colors.lightGray}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  chevron: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
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
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
