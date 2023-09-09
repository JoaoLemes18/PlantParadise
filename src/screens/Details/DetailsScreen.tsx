import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
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
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Detalhes</Text>
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
          <Text style={styles.productPrice}>R$ {value}</Text>

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            praesentium exercitationem voluptate minus alias. Voluptatem
            voluptatum alias quod culpa nam suscipit, quas dicta at sunt quaerat
            perspiciatis doloribus praesentium repellendus?. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Dolore praesentium
            exercitationem voluptate minus alias. Voluptatem voluptatum alias
            quod culpa nam suscipit, quas dicta at sunt quaerat perspiciatis
            doloribus praesentium repellendus?. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dolore praesentium exercitationem
            voluptate minus alias. Voluptatem voluptatum alias quod culpa nam
            suscipit, quas dicta at sunt quaerat perspiciatis doloribus
            praesentium repellendus?.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerPrice}>
          <Text style={styles.totalPrice}>Total: R$</Text>
          <Text style={styles.totalPrice2}>R$ {totalPrice}</Text>
        </View>
        <TouchableOpacity
          onPress={handleAddToCart}
          style={styles.addToCartButton}
        >
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


export default Details;
