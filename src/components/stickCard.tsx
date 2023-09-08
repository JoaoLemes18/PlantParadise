import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StickCard = ({ imageSource, title, value, isFavorite }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    
        <View style={styles.buttonFavorite}>
      {/* Botão de coração */}
      <TouchableOpacity
        style={[
          styles.heartButton,
          isHeartClicked && styles.heartButtonClicked, // Aplica o estilo de botão clicado se isHeartClicked for verdadeiro
        ]}
        onPress={handleHeartClick}
      >
        {/* Use o componente Ionicons para o ícone de coração */}
        <Ionicons name={heartIconName} size={20} color={isHeartClicked ? "#418B64" : "black"} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignItems: "center",
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
  buttonFavorite: {
      alignItems: "center",
      justifyContent: "center",
  },
  heartButton: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
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
});

export default StickCard;
