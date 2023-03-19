import { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import ImageDisplay from "./ImageDisplay";
import ImageInput from "./ImageInput";

function ImageList({ itemSize, style, images, saveImage, removeImage }) {
  const handleOnHover = (image) => {
    Alert.alert(
      "Remove Photo",
      "Would you like to remove this photo?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => removeImage(image),
          style: "destructive",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} horizontal>
      <ImageInput saveImageSingle={saveImage} />
      {images.map((item) => (
        <ImageDisplay
          key={item.uri}
          onHover={handleOnHover}
          size={itemSize}
          style={styles.image}
          image={item}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: { flexGrow: 1, padding: 5 },
  image: {
    marginHorizontal: 5,
  },
});

export default ImageList;
