import * as Progress from "react-native-progress";

import { Modal } from "react-native";
import { View, StyleSheet } from "react-native";

function LoadingSubmitScreen({ progress, loading }) {
  const isVisible = () => (progress ? progress < 1 : false);

  return (
    <Modal style={styles.container} visible={loading} animationType="slide">
      <Progress.Bar progress={progress} width={200} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default LoadingSubmitScreen;
