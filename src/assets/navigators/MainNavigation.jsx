import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import routes from "./routes";
import Icon from "../components/Icon";
import TabIcon from "../components/TabIcon";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigation from "./AccountNavigation";
import ListingsNavigation from "./ListingsNavigation";

function MainNavigation(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={routes.LISTINGS}
        component={ListingsNavigation}
        options={{
          tabBarIcon: (params) => <TabIcon name={"home"} {...params} />,
        }}
      />
      <Tab.Screen
        name={routes.LISTINGS_EDIT}
        component={ListingEditScreen}
        options={({ navigation, route }) => ({
          // tabBarButton: () => (
          //   <NewListingTabButton
          //     onPress={() => navigation.navigate("ListingsEdit")}
          //   />
          // ),
          tabBarIcon: (params) => (
            <Icon
              {...params}
              name="plus-circle"
              backgroundColor="red"
              iconColor="white"
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigation}
        options={{
          tabBarIcon: (params) => (
            <TabIcon name={"account-settings"} {...params} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;
