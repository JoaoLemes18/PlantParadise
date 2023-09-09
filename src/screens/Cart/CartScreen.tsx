import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useCart } from "../../context/Cart";

import Toast from "react-native-toast-message";
import CardCart from "../../components/Cards/cardCart";
import { useRoute } from "@react-navigation/native";
import { styles } from "./styles";
export interface CartItem {
  id: string;
  imageSource: any;
  title: string;
  value: string;
  quantity: string;
}

export default function CartPage({ navigation }) {
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { cartItems, addCart, addCarts, deletItem } = useCart();

  const route = useRoute();

  const routeParams = route.params as { cartItems: CartItem[] } | undefined;

  useEffect(() => {
    if (routeParams && routeParams.cartItems) {
      // Adicione os itens recebidos ao carrinho usando addToCart
      routeParams.cartItems.forEach((item) => addToCart(item));
    }
  }, [routeParams]);

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cartItems) {
      subtotal += parseFloat(item.value) * parseFloat(item.quantity);
    }
    return subtotal.toFixed(2); // Arredonde o subtotal para duas casas decimais
  };

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      // Se o item já estiver no carrinho, atualize a quantidade
      const updatedCartItems = cartItems.map((i) => {
        if (i.id === item.id) {
          i.quantity = (
            parseFloat(i.quantity) + parseFloat(item.quantity)
          ).toString();
        }
        return i;
      });
      addCart(updatedCartItems);
    } else {
      addCarts(item);
      console.log(item);
    }
  };

  const removeFromCart = (id: any) => {
    deletItem(id);
  };

  const showToastsuccess = () => {
    Toast.show({
      type: "success",
      text1: "parabens 👋",
      text2: "compra realizada com sucesso!",
      position: "top",
      visibilityTime: 9000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      keyboardOffset: 10,
    });
  };

  const handleCheckout = () => {
    addCart([]);
    showToastsuccess();
  };

  return (
    <>
      <ScrollView style={{ flex: 1, height: "100%" }} scrollEnabled={true}>
        <View style={styles.content}>
          <Text style={styles.usertext}>Cart</Text>
        </View>

        <Toast />

        <View style={styles.contentContainer}>
          {/* Renderizar os itens do carrinho */}

          {cartItems.map((item, index) => (
            <CardCart
              id={item.id}
              key={index}
              imageSource={item.imageSource}
              title={item.title}
              value={item.value}
              quantity={item.quantity}
              onremove={removeFromCart}
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
    </>
  );
}
