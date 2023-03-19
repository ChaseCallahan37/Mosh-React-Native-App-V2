import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import Screen from "./Screen";
import AppText from "../components/AppText";
import colors from "../styles/colors";
import { ListItem } from "../components/lists";

function ListingDetailScreen({ route }) {
  const { title, images, price } = route.params;
  console.log(route.params);
  return (
    <Screen style={{ ...styles.container }}>
      <Image
        style={styles.image}
        uri={images[0].url}
        preview={{ uri: images[0].thumbnail }}
      />

      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>${`${price}`}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/person-skiing.jpg")}
            title="Mosh Hamedani"
            subTitle="I go vroom"
          />
        </View>
      </View>
    </Screen>
  );
}

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

// import { View, Image, StyleSheet } from "react-native";
// import Card from "../components/Card";
// import Profile from "../components/Profile";
// import globalStyles from "../styles/styles";

// function ListingDetailScreen(props) {
//   return (
//     <View style={{ ...styles.container }}>
//       <Card
//         image={require("../assets/fire.jpg")}
//         price="2000"
//         subTitle={"Please buy this"}
//       />
//       <Profile
//         name={"Chicken Galore"}
//         listings={5}
//         image={require("../assets/chick-fil-a.jpg")}
//       />
//     </View>
//   );
// }

// export default ListingDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
