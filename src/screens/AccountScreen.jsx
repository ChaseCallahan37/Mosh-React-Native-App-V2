import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import { ListItem, ListItemSeperator } from "../components/lists";
import routes from "../navigators/routes";
import colors from "../styles/colors";
import Screen from "./Screen";

const menuItems = [
  {
    title: "My Listings",
    navigation: routes.ACCOUNT_LISTINGS,
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    navigation: routes.ACCOUNT_MESSAGES,
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen({ navigation }) {
  const handleOnPress = (name) => {
    navigation.navigate(name);
  };

  return (
    <Screen style={styles.screen} background="soft">
      <View style={styles.container}>
        <ListItem
          title={"Chase Callahan"}
          subTitle={"chasetcallahan@gmail.com"}
          image={require("../assets/chase.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menu) => menu.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => handleOnPress(item.navigation)}
              title={item.title}
              showChevron={true}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title={"Log Out"}
        IconComponent={
          <Icon name={"logout"} backgroundColor={colors.tertiary} />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  screen: {
    backgroundColor: colors.soft,
  },
});

export default AccountScreen;

{
  /* <SettingItem
        icon={"format-list-bulleted"}
        iconColor="primary"
        message={"My Listings"}
      />
      <SettingItem
        icon={"email"}
        iconColor={"secondary"}
        message={"My Messages"}
      />
      <SettingItem
        style={{ marginTop: 20 }}
        icon={"logout"}
        iconColor={"tertiary"}
        message={"Logout"}
      /> */
}

{
  /* <FlatList
    data={options}
    keyExtractor={(option) => option.id.toString()}
    renderItem={({ item, index }) => (
      
      <ListItemContainer
        onPress={() => console.log("Message selected", item)}
        renderRightActions={() => (
          <ListItemDeleteAction onPress={() => handleDelete(item)} />
        )}
      >
        <AppText>HIS</AppText>
      </ListItemContainer>
    )}
    ItemSeparatorComponent={ListItemSeperator}
  /> */
}
