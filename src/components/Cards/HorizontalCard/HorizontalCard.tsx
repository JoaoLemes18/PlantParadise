import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
const HorizontalCard = ({ imageSource, title, value, onAddToCart }) => {
  const isIOS = Platform.OS === "ios";

  // Estado local para controlar se o botão de coração foi clicado
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  // Função para lidar com o clique no botão de coração
  const handleHeartClick = () => {
    // Inverte o estado atual
    setIsHeartClicked(!isHeartClicked);
  };

  // Nome do ícone com base no estado isHeartClicked
  const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  return (
    <View style={[styles.card, isIOS && styles.iosShadow]}>
      <Image source={imageSource} style={styles.image} />

      <TouchableOpacity
        style={[
          styles.heartButton,
          isHeartClicked && styles.heartButtonClicked,
        ]}
        onPress={handleHeartClick}
      >
        <Ionicons
          name={heartIconName}
          size={16}
          color={isHeartClicked ? "#418B64" : "black"}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.value}>${value}</Text>

        <TouchableOpacity onPress={onAddToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HorizontalCard;
