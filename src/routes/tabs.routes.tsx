import React from "react";
import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";
import Icon from "react-native-vector-icons/FontAwesome";
import Initial from "../screens/Initial";
import Details from "../screens/Details";
import Profile from "../screens/Profile";

import Register from "../screens/Register";
import Login from "../screens/Login";

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
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
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
          name="Details"
          component={Details}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
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
        <Tab.Screen
          name="UserProfile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
