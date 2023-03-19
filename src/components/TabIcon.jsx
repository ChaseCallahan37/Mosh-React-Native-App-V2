import { View, StyleSheet } from "react-native";
import colors from "../styles/colors";
import Icon from "./Icon";

function TabIcon({ name, style, size, focused, color }) {
  return (
    <Icon
      style={style}
      name={name}
      backgroundColor={focused ? colors.soft : colors.white}
      size={size}
      iconColor={focused ? colors.primary : colors.lightGray}
    />
  );
}

export default TabIcon;
