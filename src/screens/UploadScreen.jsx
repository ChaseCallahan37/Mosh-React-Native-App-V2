import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import AppText from "../components/AppText";
import colors from "../styles/colors";

function UploadScreen({ progress = 0, visible = false, onDone }) {
  if (!(progress >= 0 && progress <= 100)) {
    progress = 0;
  }
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            autoPlay={true}
            loop={false}
            style={styles.animations}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animations: {
    width: 150,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
