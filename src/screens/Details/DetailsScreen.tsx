import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import CartPage from "../Cart/CartScreen";
import { styles } from "./styles";

interface Item {
  id: string;
  imageSource: any; // Substitua "any" pelo tipo apropriado para sua imagem
  title: string;
  value: string;
}

const Details = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const route = useRoute();
  const { id, imageSource, title, value } = route.params as Item;

  const handleAddToCart = () => {
    const item = {
      id,
      imageSource,
      title,
      value,
      quantity: quantity.toString(), // Converta para string antes de adicionar ao carrinho
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

  // Função para lidar com o clique no botão de coração
  const handleHeartClick = () => {
    // Inverte o estado atual
    setIsHeartClicked(!isHeartClicked);
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#000" />
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
            source={imageSource}
            style={styles.productImage}
            resizeMode="cover"
          />

          <View style={styles.textproduct}>
            <Text style={styles.productName2}>{title}</Text>

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
            <Text style={styles.productDescription}>
              Introducing the EverGreenElegance Plastic Plant Pot – the perfect
              fusion of functionality and aesthetic appeal for your indoor and
              outdoor gardening needs. Crafted with precision and designed to
              elevate your greenery game, this plant pot is a must-have for any
              plant enthusiast. With the EverGreenElegance Plastic Plant Pot,
              you can transform any space into a lush oasis of greenery. Whether
              you're a seasoned gardener or just starting your plant journey,
              this pot is your trusted companion for nurturing and showcasing
              your beloved plants. Elevate your gardening experience with the
              EverGreenElegance Plastic Plant Pot today!
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.footerPrice}>
            <Text style={styles.totalPrice}>Total price</Text>
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
