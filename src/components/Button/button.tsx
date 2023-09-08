import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonComponentProps {
  onPress: () => void;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle; // Use o tipo TextStyle aqui
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

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    width: "90%",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "400",
    fontSize: 19,
  },
});

export default ButtonComponent;
