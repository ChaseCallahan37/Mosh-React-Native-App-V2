import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ViewImageScreen from "../screens/ViewImageScreen";
import routes from "./routes";

function AccountNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.ACCOUNT_HOME} component={AccountScreen} />
      <Stack.Screen name={routes.ACCOUNT_MESSAGES} component={MessagesScreen} />
      <Stack.Screen
        name={routes.ACCOUNT_LISTINGS}
        component={ViewImageScreen}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigation;
