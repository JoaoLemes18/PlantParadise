import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import DetailScreen from "../../screens/Details/DetailsScreen";
const VerticalCardsButton = ({
  imageSource,
  title,
  value,
  onAddToCart,
  veiwDetails,
}) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  return (
    <TouchableOpacity style={styles.card} onPress={DetailScreen}>
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
          size={20}
          color={isHeartClicked ? "#418B64" : "black"}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>${value}</Text>
        </View>
        <TouchableOpacity style={styles.cartButton} onPress={veiwDetails}>
          <Image source={require("../../../assets/shopping_bag.png")} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCardsButton;
