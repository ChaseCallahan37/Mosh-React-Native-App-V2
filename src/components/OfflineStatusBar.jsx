import { View, StyleSheet, LogBox } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo";

import colors from "../styles/colors";
import AppText from "./AppText";
import { useEffect, useState } from "react";

function OfflineStatusBar(props) {
  const netInfo = useNetInfo();

  if (
    !(
      (netInfo.type === "unknown" || netInfo.type === "none") &&
      netInfo.isInternetReachable === false
    )
  )
    return null;

  // const [isOffline, setIsOffline] = useState(false);

  // //Subscirbes to listen when the network changes
  // const unsubscribe = NetInfo.addEventListener((params) => {
  //   alert(JSON.stringify(params));
  //   const { isInternetReachable, type } = params;
  //   if (
  //     (type === "unknown" || type === "none") &&
  //     isInternetReachable === false
  //   ) {
  //     return setIsOffline(true);
  //   }
  //   if (isOffline !== false) {
  //     setIsOffline(false);
  //   }
  // });

  // //returns the unsubscribe method to be called
  // //for component will unmount
  // useEffect(() => unsubscribe);

  // if (isOffline) return null;

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineStatusBar;
