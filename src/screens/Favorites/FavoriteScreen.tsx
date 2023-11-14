import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import StickCard from "../../components/Cards/stickCard";
import { useFavorite } from "../../context/Favorite";
import { styles } from "./styles";

export interface FavoriteItems {
  id: string;
  imageSource: any;
  title: string;
  value: string;
  quantity: string;
  favorite: boolean;
}

export default function FavoritePage({ navigation }) {
  const { favoriteItems, addFavorite, deletefavorite } = useFavorite();

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.content}>
            <Text style={styles.usertext}>Favorites</Text>
          </View>

          <View style={styles.contentContainer}>
            {favoriteItems.length === 0 ? (
              <Text style={styles.emptyText}>No favorite items.</Text>
            ) : (
              favoriteItems.map((item, index) => (
                <StickCard
                  id={item.id}
                  key={index}
                  imageSource={item.imageSource}
                  title={item.title}
                  value={item.value}
                  isFavorite={item.favorite}
                />
              ))
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
