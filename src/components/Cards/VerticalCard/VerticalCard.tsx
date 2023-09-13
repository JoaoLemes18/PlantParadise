import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFavorite } from "../../../context/Favorite";
import { styles } from "./styles";

const VerticaLCard = ({
  imageSource,
  id,
  title,
  value,
  onAddToCart,
  veiwDetails,
}) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const { favoriteItems, addFavorite, deletefavorite } = useFavorite();

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
    <>
      <TouchableOpacity style={styles.card} onPress={veiwDetails}>
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
            size={21}
            color={isHeartClicked ? "#418B64" : "black"}
          />
        </TouchableOpacity>

        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>${value}</Text>
          </View>
          <TouchableOpacity style={styles.cartButton} onPress={veiwDetails}>
            <Image source={require("../../../../assets/shoppingBag.png")} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default VerticaLCard;
