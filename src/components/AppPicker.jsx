import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import defaultStyles from "../styles/styles";
import AppText from "./AppText";
import Screen from "../screens/Screen";
import PickerItem from "./PickerItem";
import Icon from "./Icon";

function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  style,
  numberOfColumns = 1,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, style]} {...otherProps}>
          {icon && (
            <MaterialCommunityIcons
              size={20}
              color={colors.medium}
              name={icon}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.title}</AppText>
          ) : (
            <AppText style={{ ...styles.text, ...styles.placeholder }}>
              {placeholder}
            </AppText>
          )}

          {/* <AppText style={styles.text}>
            {selectedItem ? selectedItem.title : placeholder}
          </AppText> */}
          <MaterialCommunityIcons
            size={20}
            color={colors.medium}
            name="chevron-down"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            style={styles.list}
            numColumns={numberOfColumns}
            columnWrapperStyle={numberOfColumns > 1 ? styles.listRow : null}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                style={styles.pickerItem}
                label={item.title}
                IconComponent={
                  item.icon && (
                    <Icon
                      size={70}
                      name={item.icon.name}
                      backgroundColor={item.icon.backgroundColor}
                    />
                  )
                }
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
  list: {
    marginTop: 20,
  },
  listRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalClose: {
    marginBottom: 20,
  },
  pickerItem: {
    // display: "none",
  },
  placeholder: {
    color: colors.lightGray,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
