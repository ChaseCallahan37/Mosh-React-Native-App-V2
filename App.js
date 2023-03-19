import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./src/auth/context";
import {
  AuthNavigator,
  MainNavigation,
  navigationTheme,
} from "./src/navigators";
import OfflineStatusBar from "./src/components/OfflineStatusBar";
import Screen from "./src/screens/Screen";
import { useState } from "react";
import authStorage from "./src/auth/storage";

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.log}
      />
    );

  return (
    <NavigationContainer theme={navigationTheme}>
      <Screen>
        <AuthContext.Provider value={{ user, setUser }}>
          <OfflineStatusBar />
          {user ? <MainNavigation /> : <AuthNavigator />}
        </AuthContext.Provider>
      </Screen>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
