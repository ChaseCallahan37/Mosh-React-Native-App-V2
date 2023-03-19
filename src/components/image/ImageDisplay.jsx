import { View, StyleSheet, Image, Pressable } from "react-native";

function ImageDisplay({ image, style, size, onHover }) {
  return (
    <Pressable
      onPress={() => console.log("")}
      onLongPress={() => onHover(image)}
    >
      <Image
        source={image}
        style={[
          styles.image,
          { width: size, height: size, borderRadius: size / 5 },
          style,
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {},
});

export default ImageDisplay;
