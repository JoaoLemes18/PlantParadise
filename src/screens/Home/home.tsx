import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { auth } from "../../firebase/config";

import { useCart } from "../../context/Cart";
import HorizontalCard from "../../components/Cards/HorizontalCard/HorizontalCard";
import { styles } from "./styles";
import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";

const Home = ({ navigation }) => {
  interface Item {
    description: any;
    category: string;
    price: any;
    image: any;
    id: string;
    imageSource: string;
    title: string;
  }
  interface CartItem {
    id: string;
    imageSource: string;
    title: string;
    value: string;
    quantity: string;
  }

  const [data, setData] = useState<Item[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedButton, setSelectedButton] = useState("All");
  const { addCarts } = useCart();
  const user = auth.currentUser;
  const userName = user ? user.displayName : "User";

  //API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/"
        );
        if (response.status === 200) {
          const responseData = await response.json();
          const items = responseData.body.data.items;
          if (Array.isArray(items)) {
            setData(items);
          } else {
            console.error("Os dados da API não estão no formato esperado.");
          }
        } else {
          console.error(
            "A requisição não foi bem-sucedida. Código de status:",
            response.status
          );
        }
      } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
      }
    };

    fetchData();
  }, []);

  //Add to cart in HorizontalCard
  const handleAddToCart = (item: Item) => {
    const cartItem: CartItem = {
      id: item.id,
      imageSource: item.image,
      title: item.title,
      value: item.price,
      quantity: "1",
    };

    addCarts(cartItem);
  };

  const handleButtonClickcategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.usertext}>Hi, {userName}</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("UserProfile")}
            >
              <Image
              style={styles.userimage} 
              source={require("../../../assets/userimage.png")} />
            </TouchableOpacity>
          </View>

          <View style={styles.flatlistVerticalText}>
            <Text style={styles.flatlistText}>Most popular</Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.cardList}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <HorizontalCard
                    veiwDetails={() =>
                      navigation.navigate("Details", {
                        id: item.id,
                        imageSource: item.image,
                        title: item.title,
                        value: item.price,
                        category: item.category,
                        description: item.description,
                      })
                    }
                    id={item.id}
                    imageSource={item.image}
                    onAddToCart={() => handleAddToCart(item)}
                    title={item.title}
                    value={item.price}
                    navigation={navigation}
                  />
                </View>
              )}
            />
          </View>

          <View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                onPress={() => handleButtonClickcategory("All")}
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
                onPress={() => handleButtonClickcategory("Indoor")}
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
                onPress={() => handleButtonClickcategory("Outdoor")}
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
            {data
              .filter((item) =>
                selectedCategory === "All"
                  ? true
                  : item.category === selectedCategory
              )
              .map((item) => (
                <VerticalCard
                  veiwDetails={() =>
                    navigation.navigate("Details", {
                      id: item.id,
                      imageSource: item.image,
                      title: item.title,
                      value: item.price,
                      category: item.category,
                      description: item.description,
                    })
                  }
                  key={item.id}
                  imageSource={item.image}
                  onAddToCart={() => console.log("adicionado ao carrinho")}
                  title={item.title}
                  value={item.price}
                  id={item.id}
                />
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
