import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HorizontalCard from "../../components/Cards/HorizontalCard/HorizontalCard";

import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import { styles } from "./styles";
const Home = ({ navigation }) => {
  const data: Item[] = [
    {
      id: "1",
      imageSource: require("../../../assets/cardmedio.png"),
      title: "Green Vines",
      value: "9.20",
    },
    {
      id: "2",
      imageSource: require("../../../assets/cardmedio.png"),
      title: "Another Item",
      value: "12.99",
    },
    {
      id: "3",
      imageSource: require("../../../assets/cardmedio.png"),
      title: "Yet Another Item",
      value: "7.50",
    },
    {
      id: "4",
      imageSource: require("../../../assets/cardmedio.png"),
      title: "Green Vines",
      value: "9.20",
    },
    {
      id: "5",
      imageSource: require("../../../assets/cardmedio.png"),
      title: "Another Item",
      value: "12.99",
    },
    {
      id: "6",
      imageSource: require("../../../assets/cardmedio.png"),
      title: "Yet Another Item",
      value: "7.50",
    },
  ];

  interface Item {
    id: string;
    imageSource: any;
    title: string;
    value: string;
  }

  const dataLongCard: Item[] = [
    {
      id: "1",
      imageSource: require("../../../assets/imagelongcard.png"),
      title: "Green Vines",
      value: "9.20",
    },
    {
      id: "2",
      imageSource: require("../../../assets/imagelongcard.png"),
      title: "Another Item",
      value: "12.99",
    },
    {
      id: "3",
      imageSource: require("../../../assets/imagelongcard.png"),
      title: "Yet Another Item",
      value: "7.50",
    },
  ];

  const [selectedButton, setSelectedButton] = useState("All");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.usertext}>Hi, John</Text>
            <Image source={require("../../../assets/userimage.png")} />
          </View>

          <View style={styles.flatlistVertical}>
            <Text style={styles.flatlistVerticalText}>Most popular</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.cardList}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <HorizontalCard
                    imageSource={item.imageSource}
                    title={item.title}
                    value={item.value}
                    onAddToCart={() => console.log("adicionado ao carrinho")}
                  />
                </View>
              )}
            />
          </View>

          <View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                onPress={() => handleButtonClick("All")}
                style={[
                  styles.button,
                  selectedButton === "All" && styles.selectedButton,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedButton === "All" && styles.selectedButtonText,
                  ]}
                >
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleButtonClick("Indoor")}
                style={[
                  styles.button,
                  selectedButton === "Indoor" && styles.selectedButton,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedButton === "Indoor" && styles.selectedButtonText,
                  ]}
                >
                  Indoor
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleButtonClick("Outdoor")}
                style={[
                  styles.button,
                  selectedButton === "Outdoor" && styles.selectedButton,
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedButton === "Outdoor" && styles.selectedButtonText,
                  ]}
                >
                  Outdoor
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.longcardlist}>
            {dataLongCard.map((item) => (
              <VerticalCard
                veiwDetails={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    imageSource: item.imageSource,
                    title: item.title,
                    value: item.value,
                  })
                }
                key={item.id}
                imageSource={item.imageSource}
                onAddToCart={() => console.log("adicionado ao carrinho")}
                title={item.title}
                value={item.value}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
