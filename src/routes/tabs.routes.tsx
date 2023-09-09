import React from "react";
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home/home";
import Favorites from "../screens/Favorites/FavoriteScreen";
import Cart from "../screens/Cart/CartScreen";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o pacote de ícones FontAwesome
import Initial from "../screens/Initial/inicialPage";
import Login from "../screens/Login/Login";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Inital">
        <Tab.Screen
          name="Initial"
          component={Initial}
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
          name="Login"
          component={Login}
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
