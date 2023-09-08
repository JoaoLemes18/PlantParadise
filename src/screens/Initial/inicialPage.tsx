import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import ButtonComponent from "../components/Button/button";

export default function InicialPage({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../../assets/inicialpageimage.png")}
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
              onPress={() => navigation.navigate("Home")}
              text={"Sign In"}
            />

            <ButtonComponent
              onPress={() => console.log("teste2")}
              text={"Sign Up"}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Define flex 1 para que ocupe 100% da tela
    alignItems: "center", // Você pode ajustar isso conforme necessário
    justifyContent: "flex-end", // Você pode ajustar isso conforme necessário
  },

  boxInicial: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "40%",
    width: "100%",
  },

  textHeader: {
    fontSize: 40,
    fontWeight: "bold",
    width: 200,
  },
  textcontent: {
    fontSize: 15,
    width: 300,
  },
  HeaderBox: {
    bottom: 35,
    padding: 10,
    gap: 15,
  },
  HeaderButtons: {
    gap: 10,
    bottom: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
});
