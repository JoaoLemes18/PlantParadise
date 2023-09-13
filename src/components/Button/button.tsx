import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { styles } from "./styles";

interface ButtonComponentProps {
  onPress: () => void;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onPress,
  text,
  backgroundColor = "#418B64",
  textColor = "white",
  style,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
