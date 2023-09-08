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
import CartPage from "./cartPage";

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
            perspiciatis doloribus praesentium repellendus?.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            praesentium exercitationem voluptate minus alias. Voluptatem
            voluptatum alias quod culpa nam suscipit, quas dicta at sunt quaerat
            perspiciatis doloribus praesentium repellendus?.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            praesentium exercitationem voluptate minus alias. Voluptatem
            voluptatum alias quod culpa nam suscipit, quas dicta at sunt quaerat
            perspiciatis doloribus praesentium repellendus?.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerPrice}>
          <Text style={styles.totalPrice}>Total: R$</Text>
          <Text style={styles.totalPrice2}>R$ {totalPrice}</Text>
        </View>
        <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productImage: {
    width: "100%",
    height: 280,
    marginBottom: 16,
  },
  textproduct: {
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  productName2: {
    fontSize: 12,
    color: "#9c9c9c",
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  stylecontainerprice: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 16,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 16,
    width: "90%",
    color: "#969595",
  },
  productDescriptioncentrilize: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  totalPrice: {
    fontSize: 14,
    color: "#969595",
  },
  totalPrice2: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#418B64",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  favoriteButton: {
    backgroundColor: "transparent",
    zIndex: 1,
  },
  // Adicione heartButtonClicked ao estilo
  heartButtonClicked: {
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  footerPrice: {
    flexDirection: "column",
  },
});

export default Details;
