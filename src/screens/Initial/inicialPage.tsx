import React from "react";
import { Text, View, ImageBackground } from "react-native";
import ButtonComponent from "../../components/Button/button";
import { styles } from "./styles";

export default function InicialPage({ navigation }: { navigation: any }) {
  return (
    <ImageBackground
      source={require("../../../assets/inicialpageimage.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.boxInicial}>
        <View style={styles.HeaderBox}>
          <Text style={styles.textHeader}>Plant Paradise</Text>

          <Text style={styles.textcontent}>
            Find your favorite plants {""}
            and help the environment
          </Text>
        </View>

        <View style={styles.HeaderButtons}>
          <ButtonComponent
            onPress={() => navigation.navigate("Login")}
            text={"Sign In"}
          />

          <ButtonComponent
            onPress={() => console.log("teste2")}
            text={"Sign Up"}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
