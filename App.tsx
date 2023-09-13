import React from "react";
import { StatusBar } from "react-native";
import { TabRoutes } from "./src/routes/tabs.routes";
import CartProvider from "./src/context/Cart";
import FavoriteProvider from "./src/context/Favorite";
export default function App() {
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
