import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../../context/Cart";

const CardCart = ({ imageSource, title, value, quantity, onremove, id }) => {
  const [cardQuantity, setCardQuantity] = useState(Number(quantity));
  const [showTrashButton, setShowTrashButton] = useState(quantity === 1);

  const { cartItems, addCart, addCarts, deletItem, putquantity } = useCart();

  const handleIncrease = () => {
    setCardQuantity(cardQuantity + 1);
    putquantity(id, cardQuantity + 1);

    setShowTrashButton(false);
  };

  const handleDecrease = () => {
    if (cardQuantity > 1) {
      setCardQuantity(cardQuantity - 1);
      putquantity(id, cardQuantity - 1);
    } else {
      setShowTrashButton(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>$ {value}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {showTrashButton ? (
          <TouchableOpacity
            style={styles.trashButton}
            onPress={() => onremove(id)}
          >
            <Ionicons name="trash-outline" size={20} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleDecrease}
          >
            <Ionicons name="remove" size={20} color="white" />
          </TouchableOpacity>
        )}

        <Text style={styles.quantityText}>{cardQuantity}</Text>

        <TouchableOpacity style={styles.actionButton} onPress={handleIncrease}>
          <Ionicons
            name="add-outline"
            size={20}
            color="white"
            onPress={handleIncrease}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    backgroundColor: "#ECF8F3",
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    borderRadius: 8,
    width: 100,
    height: "100%",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    gap: 1,
  },
  actionButton: {
    backgroundColor: "#418B64",
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
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
  trashButton: {
    backgroundColor: "transparent",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CardCart;
