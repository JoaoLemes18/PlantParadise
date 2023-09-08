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

const LongCardButton = ({
  imageSource,
  title,
  value,
  onAddToCart,
  veiwDetails,
}) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  const heartIconName = isHeartClicked ? "heart" : "heart-outline";

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={veiwDetails}
      // Adicione a função de retorno de chamada onPress aqui
    >
      <Image source={imageSource} style={styles.image} />

      <TouchableOpacity
        style={[
          styles.heartButton,
          isHeartClicked && styles.heartButtonClicked,
        ]}
        onPress={handleHeartClick}
      >
        <Ionicons
          name={heartIconName}
          size={20}
          color={isHeartClicked ? "#418B64" : "black"}
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>${value}</Text>
        </View>
        <TouchableOpacity style={styles.cartButton} onPress={veiwDetails}>
          <Image source={require("../../../../assets/shoppingBag.png")} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: 300,
    height: 280,
    borderRadius: 8,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
    overflow: "hidden",
    position: "relative",
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "#666",
  },
  cartButton: {
    backgroundColor: "#418B64",
    borderRadius: 50,
    height: 30,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  heartButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
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

export default LongCardButton;
