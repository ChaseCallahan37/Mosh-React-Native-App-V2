import { StyleSheet, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Icon from "../Icon";
import colors from "../../styles/colors";
import { useState } from "react";
import AppText from "../AppText";

function ImageInput({ size = 80, saveImageSingle, ...otherProps }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert(
        "You will need to allow camera permission in order to use the library"
      );
    }
  };

  useState(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.canceled) {
        saveImageSingle(result.assets[0]);
      }
    } catch (error) {}
  };

  return (
    <Pressable onPress={selectImage} style={styles.container} {...otherProps}>
      <Icon
        iconColor={colors.medium}
        name={"camera"}
        backgroundColor={colors.soft}
        size={size}
        style={[
          styles.icon,
          { width: size, height: size, borderRadius: size / 5 },
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {},
});

export default ImageInput;
