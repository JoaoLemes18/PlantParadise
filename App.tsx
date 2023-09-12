import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { TabRoutes } from "./src/routes/tabs.routes";
import CartProvider from "./src/context/Cart";
import FavoriteProvider from "./src/context/Favorite";
export default function App() {
  const [fontsLoaded] = useFonts({
    poppins: require("./assets/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <CartProvider>
        <FavoriteProvider>
          <StatusBar />
          <TabRoutes />
        </FavoriteProvider>
      </CartProvider>
    </>
  );
}
