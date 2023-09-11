import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import StickCard from "../../components/Cards/stickCard";
import { useFavorite } from "../../context/Favorite";

export interface FavoriteItems {
  id: string;
  imageSource: any;
  title: string;
  value: string;
  quantity: string;
  favorite: boolean;
}

export default function FavoriteScreen({ navigation }) {
  const { favoriteItems, addFavorite, deletefavorite } = useFavorite();

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text style={styles.usertext}>Favorites</Text>
        </View>

        <View style={styles.contentContainer}>
          {/* Adicione os itens favoritos aqui */}

          {favoriteItems.map((item, index) => (
            <StickCard
              id={item.id}
              key={index}
              imageSource={item.imageSource}
              title={item.title}
              value={item.value}
              isFavorite={item.favorite}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
