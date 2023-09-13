import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";
import { useFavorite } from "../../context/Favorite";

interface Item {
  id: string;
  imageSource: any; // Substitua "any" pelo tipo apropriado para sua imagem
  title: string;
  value: string;
  category: string;
  description: string;
}

const Details = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const route = useRoute();
  const { id, imageSource, title, value, category, description } =
    route.params as Item;

  const { favoriteItems, addFavorite, deletefavorite } = useFavorite();

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

  const handleAddToCart = () => {
    const item = {
      id,
      imageSource,
      title,
      value,
      quantity: quantity.toString(),
    };
    navigation.navigate("Cart", { cartItems: [item] });
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Nome do ícone com base no estado isHeartClicked
  const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  const totalPrice = (quantity * parseFloat(value)).toFixed(2);

  return (
    <>
      <SafeAreaView style={styles.SafeAereaContainer}>
        <ScrollView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Details</Text>
            <TouchableOpacity
              style={[
                styles.favoriteButton,
                isHeartClicked && styles.heartButtonClicked,
              ]}
              onPress={handleHeartClick}
            >
              <Ionicons
                name={heartIconName}
                size={24}
                color={isHeartClicked ? "#418B64" : "#000"}
              />
            </TouchableOpacity>
          </View>

          {/* Imagem do produto */}
          <Image
            source={{ uri: imageSource }}
            style={styles.productImage}
            resizeMode="cover"
          />

          <View style={styles.textproduct}>
            <Text style={styles.productName2}>{category}</Text>

            {/* Nome do produto */}
            <Text style={styles.productName}>{title}</Text>
          </View>

          <View style={styles.stylecontainerprice}>
            <Text style={styles.productPrice}>$ {value}</Text>

            {/* Quantidade */}
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={handleDecreaseQuantity}>
                <Ionicons
                  name="remove-circle-outline"
                  size={24}
                  color="#418B64"
                />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={handleIncreaseQuantity}>
                <Ionicons name="add-circle" size={24} color="#418B64" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.productDescriptioncentrilize}>
            <Text style={styles.productDescription}>{description}</Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerPrice}>
            <Text style={styles.totalPrice}>Total:</Text>
            <Text style={styles.totalPrice2}>$ {totalPrice}</Text>
          </View>
          <TouchableOpacity
            onPress={handleAddToCart}
            style={styles.addToCartButton}
          >
            <Text style={styles.addToCartButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Details;
