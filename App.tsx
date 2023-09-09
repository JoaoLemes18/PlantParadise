// App.js
import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { TabRoutes } from "./src/routes/tabs.routes";

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
