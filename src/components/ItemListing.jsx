import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../styles/colors";
import AppText from "./AppText";

function ItemListing({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.soft,
    marginBottom: 20,
    overflow: "hidden",
    width: "100%",
  },
  textContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 150,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  subTitle: {
    color: colors.light,
  },
  title: {
    marginBottom: 7,
  },
});

export default ItemListing;

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
