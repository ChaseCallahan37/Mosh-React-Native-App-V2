import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import listingsApi from "../api/listings";
import Screen from "./Screen";
import Card from "../components/Card";
import colors from "../styles/colors";
import routes from "../navigators/routes";
import { useEffect, useState } from "react";
import AppText from "../components/AppText";
import LoadingIcon from "../components/LoadingIcon";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    request();
  }, []);

  const handleOnPress = (listing) => {
    navigation.navigate(routes.LISTINGS_DETAILS, listing);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldnt load listings</AppText>
          <AppButton title="Retry" onPress={() => request()}></AppButton>
        </>
      )}

      {loading && <LoadingIcon visible={loading} />}
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            onPress={() => handleOnPress(item)}
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  listContainer: {
    display: "flex",
    alignItems: "stretch",
    width: "90%",
  },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

{
  /* <Screen>
  <View style={styles.listContainer}>
    <FlatList
      data={listings}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          subTitle={`$${item.price}`}
          title={item.title}
        />
      )}
    />
  </View>
</Screen>; */
}
