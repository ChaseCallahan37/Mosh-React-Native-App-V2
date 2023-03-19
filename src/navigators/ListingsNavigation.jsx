import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListingsScreen from "../screens/ListingsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function ListingsNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.LISTINGS_HOME} component={ListingsScreen} />
      <Stack.Screen
        name={routes.LISTINGS_DETAILS}
        component={ListingDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default ListingsNavigation;
