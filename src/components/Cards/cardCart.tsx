import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CardCart = ({ imageSource, title, value, quantity }) => {
  const [cardQuantity, setCardQuantity] = useState(quantity);
  const [showTrashButton, setShowTrashButton] = useState(quantity === 1);

  const handleIncrease = () => {
    setCardQuantity(cardQuantity + 1);
    setShowTrashButton(false);
  };

  const handleDecrease = () => {
    if (cardQuantity > 1) {
      setCardQuantity(cardQuantity - 1);
    } else {
      setShowTrashButton(true);
    }
  };

  const handleDelete = () => {
    // Implemente aqui a lógica para excluir o card
    // Isso pode envolver a remoção do card da lista de cards ou outra ação apropriada
    console.log("Card excluído");
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {showTrashButton ? (
          <TouchableOpacity style={styles.trashButton} onPress={handleDelete}>
            <Ionicons name="trash-outline" size={20} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.actionButton} onPress={handleDecrease}>
            <Ionicons name="remove" size={20} color="white" />
          </TouchableOpacity>
        )}

        <Text style={styles.quantityText}>{cardQuantity}</Text>

        <TouchableOpacity style={styles.actionButton} onPress={handleIncrease}>
          <Ionicons name="add-outline" size={20} color="white" />
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
