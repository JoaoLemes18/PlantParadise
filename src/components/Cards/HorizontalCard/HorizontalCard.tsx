import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFavorite } from "../../../context/Favorite";
import Toast from "react-native-toast-message";
import { styles } from "./styles";

interface HorizontalCardProps {
  id: string;
  imageSource: string;
  title: string;
  value: number;
  veiwDetails: () => void;
  onAddToCart: (id: string, title: string, value: number) => void;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  id,
  imageSource,
  title,
  value,
  veiwDetails,
  onAddToCart,
}) => {
  const isIOS = Platform.OS === "ios";
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const { addFavorite, deletefavorite } = useFavorite();

  const handleAddToCart = () => {
    onAddToCart(id, title, value);

    // Exibe a notificação de toast quando o item é adicionado ao carrinho
    Toast.show({
      type: "success",
      text1: "Item Adicionado ao Carrinho",
      text2: `${title} foi adicionado ao seu carrinho.`,
      position: "top",
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      keyboardOffset: 10,
    });
  };

  const handleHeartClick = () => {
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

  const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  return (
    <TouchableOpacity
      style={[styles.card, isIOS && styles.iosShadow]}
      onPress={veiwDetails}
    >
      <Image source={{ uri: imageSource }} style={styles.image} />

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

        <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalCard;
