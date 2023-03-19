import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../styles/colors";
import AppText from "./AppText";

function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.container}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  card: {
    flexDirection: "column",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.light,
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;

// import { View, StyleSheet, Image } from "react-native";
// import globalStyles from "../styles/styles";
// import colors from "../styles/colors";
// import AppText from "./AppText";

// function Card({ style, subTitle, image, price = "0" }) {
//   return (
//     <View style={{ ...styles.container, ...style }}>
//       <View style={{ ...globalStyles.roundedBorder, ...styles.innerContainer }}>
//         <Image
//           resizeMode="contain"
//           style={{
//             ...globalStyles.image,
//             ...globalStyles.roundedBorder,
//             ...styles.image,
//           }}
//           source={image}
//         />
//         <View style={styles.textContainer}>
//           <AppText>{subTitle}</AppText>
//           <AppText>${price}</AppText>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.soft,
//     flex: 0.5,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 100,
//   },
//   image: {
//     // top: -50,
//     height: 225,
//     borderBottomRightRadius: 0,
//     borderBottomLeftRadius: 0,
//     marginBottom: 10,
//   },
//   innerContainer: {
//     width: "85%",
//     height: "75%",
//     position: "absolute",
//     top: 70,
//     backgroundColor: colors.white,
//   },
//   textContainer: {
//     marginLeft: 15,
//     justifyContent: "flex-start",
//   },
// });

// export default Card;
