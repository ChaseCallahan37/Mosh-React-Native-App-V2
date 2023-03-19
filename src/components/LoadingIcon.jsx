import LottieView from "lottie-react-native";

function LoadingIcon({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay={true}
      loop={true}
      source={require("../assets/animations/loading.json")}
    ></LottieView>
  );
}

export default LoadingIcon;
