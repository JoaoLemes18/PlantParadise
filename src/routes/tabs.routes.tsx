import React from "react";
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Favorites from "../screens/favoritePage";
import Cart from "../screens/cartPage";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o pacote de ícones FontAwesome

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color }) => (
              <Icon name="heart" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color }) => (
              <Icon name="shopping-bag" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
