import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importe o ícone desejado aqui
import { useFavorite } from "../../../context/Favorite";
import Toast from "react-native-toast-message";
import { FavoriteItems } from "../../../screens/Favorites/FavoriteScreen";
import { styles } from "./styles";

const HorizontalCard = ({
  navigation,
  id,
  imageSource,
  title,
  value,
  veiwDetails,
  onAddToCart,
}) => {
  const isIOS = Platform.OS === "ios";

  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const { favoriteItems, addFavorite, deletefavorite } = useFavorite();

  const handleAddToCart = () => {
    onAddToCart(id, title, value);

    const showToastsuccess = () => {
      Toast.show({
        type: "success",
        text1: "😍😍😍",
        text2: "Congratulations on your purchase, come back often!!",
        position: "top",
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 10,
        bottomOffset: 40,
        keyboardOffset: 10,
      });
    };
  };
  const handleHeartClick = () => {
    // Inverte o estado atual
    setIsHeartClicked(!isHeartClicked);

    const item = {
      id,
      imageSource,
      title,
      value,
    };
    addFavorite(item);

    if (isHeartClicked) {
      deletefavorite(id);
    }
  };

  // Nome do ícone com base no estado isHeartClicked
  const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  return (
    <TouchableOpacity
      style={[styles.card, isIOS && styles.iosShadow]}
      onPress={veiwDetails}
    >
      {/* Imagem à esquerda */}
      <Image source={{ uri: imageSource }} style={styles.image} />

      {/* Botão de coração */}
      <TouchableOpacity
        style={[
          styles.heartButton,
          isHeartClicked && styles.heartButtonClicked,
        ]}
        onPress={handleHeartClick}
      >
        <Ionicons
          name={heartIconName}
          size={20}
          color={isHeartClicked ? "#418B64" : "black"}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.value}>${value}</Text>

        <TouchableOpacity
          onPress={() => onAddToCart(id, title, value)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;
