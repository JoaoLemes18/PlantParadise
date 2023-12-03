import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CardCart from "../../components/Cards/cardCart";
import { useRoute } from "@react-navigation/native";
import { useCart } from "../../context/Cart";
import Toast from "react-native-toast-message";
import { styles } from "./styles";

export interface CartItem {
  id: string;
  imageSource: any;
  title: string;
  value: string;
  quantity: string;
}

export default function CartScreen({ navigation }) {
  const { cartItems = [], addCart, addCarts, deletItem } = useCart();

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

  const handleCheckout = () => {
    addCart([]);
    showToastsuccess();
  };
  const handleClearCart = () => {
    addCart([]);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, height: "100%" }} scrollEnabled={true}>
          <View style={styles.content}>
            <Text style={styles.usertext}>Cart</Text>
            <TouchableOpacity onPress={handleClearCart}>
              <Text style={styles.clearCartButtonText}>Clear Cart</Text>
            </TouchableOpacity>
          </View>

          <Toast />

          {cartItems.length === 0 ? (
            <Text style={styles.emptyCartText}>Your cart is empty.</Text>
          ) : (
            <View style={styles.contentContainer}>
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
          )}
        </ScrollView>

        {cartItems.length > 0 && ( // Mostra o subtotal e o botão de checkout apenas se o carrinho não estiver vazio
          <View style={styles.centralize}>
            {/* Subtotal */}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal </Text>
              <Text style={styles.subtotalText2}>$ {calculateSubtotal()}</Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Go to Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
