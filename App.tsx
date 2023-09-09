// App.js
import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./src/routes/tabs.routes";
import colors from "./atoms/colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    poppins: require("./assets/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar />

      <TabRoutes />
    </>
  );
}
