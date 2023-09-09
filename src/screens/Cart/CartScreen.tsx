import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import CardCart from "../../components/Cards/cardCart";
import { useRoute } from "@react-navigation/native";
import { styles } from "./styles";
interface CartItem {
  id: string;
  imageSource: any; // Substitua "any" pelo tipo apropriado para sua imagem
  title: string;
  value: string;
  quantity: string; // Adicione o tipo para a quantidade
}

export default function CartPage({ navigation }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const route = useRoute();

  // Função para calcular o subtotal
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cartItems) {
      subtotal += parseFloat(item.value) * parseFloat(item.quantity);
    }
    return subtotal.toFixed(2); // Arredonde o subtotal para duas casas decimais
  };

  const routeParams = route.params as { cartItems: CartItem[] } | undefined;

  useEffect(() => {
    if (routeParams && routeParams.cartItems) {
      // Adicione os itens recebidos ao carrinho usando addToCart
      routeParams.cartItems.forEach((item) => addToCart(item));
    }
  }, [routeParams]);

  const addToCart = (item: CartItem) => {
    // Verifique se o item já existe no carrinho com base em uma chave única (por exemplo, o ID)
    const existingItem = cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      // Se o item já estiver no carrinho, atualize a quantidade
      const updatedCartItems = cartItems.map((i) => {
        if (i.id === item.id) {
          i.quantity = (
            parseFloat(i.quantity) + parseFloat(item.quantity)
          ).toString(); // Mantenha como string
        }
        return i;
      });
      console.log("Não criou outro card");
      setCartItems(updatedCartItems);
    } else {
      // Caso contrário, adicione o novo item ao carrinho
      console.log("criou outro card");
      setCartItems([...cartItems, item]);
    }
  };

  console.log(cartItems);

  // Função para finalizar a compra
  const handleCheckout = () => {
    // Implemente a lógica para finalizar a compra aqui
    // Você pode navegar para a próxima tela, exibir um modal, etc.
    // Por enquanto, vou apenas limpar o carrinho de compras
    setCartItems([]);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }} scrollEnabled={true}>
          <View style={styles.content}>
            <Text style={styles.usertext}>Cart</Text>
          </View>

          <View style={styles.contentContainer}>
            {/* Renderizar os itens do carrinho */}

            {cartItems.map((item, index) => (
              <CardCart
                key={index}
                imageSource={item.imageSource}
                title={item.title}
                value={item.value}
                quantity={item.quantity}
              />
            ))}
          </View>
        </ScrollView>

        <View style={styles.centralize}>
          {/* Subtotal */}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal </Text>
            <Text style={styles.subtotalText2}>R$ {calculateSubtotal()}</Text>
          </View>

          {/* Botão de finalizar compra */}
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout}
          >
            <Text style={styles.checkoutButtonText}>Go to Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
