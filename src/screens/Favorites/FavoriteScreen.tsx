import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import StickCard from "../../components/Cards/stickCard";

export default function FavoritePage({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.content}>
            <Text style={styles.usertext}>Favorites</Text>
          </View>

          <View style={styles.contentContainer}>
            <StickCard
              imageSource={require("../../../assets/cardpequeno.png")}
              title={"Green Vines"}
              value={"$9.20"}
              isFavorite={true}
            />

            <StickCard
              imageSource={require("../../../assets/cardpequeno.png")}
              title={"Green Vines"}
              value={"$9.20"}
              isFavorite={true}
            />

            <StickCard
              imageSource={require("../../../assets/cardpequeno.png")}
              title={"Green Vines"}
              value={"$9.20"}
              isFavorite={true}
            />

            <StickCard
              imageSource={require("../../../assets/cardpequeno.png")}
              title={"Green Vines"}
              value={"$9.20"}
              isFavorite={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
