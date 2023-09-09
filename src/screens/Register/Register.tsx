import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import ButtonComponent from "../../components/Button/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Toast from "react-native-toast-message";

export default function RegisterPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Congratulations🎉🥳",
      text2: "Welcome to app!",
      position: "top",
      visibilityTime: 9000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      keyboardOffset: 10,
    });
  };

  async function Register() {
    console.log("email: " + email);
    console.log("password: " + password);

    try {
      console.log("chegou aqui");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("usuario criado");
      navigation.navigate("Login");
      showToast();
    } catch (error) {
      console.error("Erro no createUserWithEmailAndPassword:", error);

      // Trate o erro conforme necessário
    }
  }

  return (
    <ImageBackground
      source={require("../../../assets/loginimage.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.boxInicial}>
        <View style={styles.HeaderBox}>
          <Text style={styles.textHeader}>Create a new {"\n"}account!</Text>
          <Text></Text>
        </View>

        <View style={styles.HeaderButtons}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(email) => setEmail(email)}
            placeholder="Enter an email"
          />

          <TextInput
            style={styles.TextInput}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            placeholder="enter an password"
          />

          <ButtonComponent
            onPress={Register}
            text={"Register"}
            style={styles.TextInput}
          />

          <TouchableOpacity onPress={() => navigation.navigate("initialPage")}>
            <Text>Back to initial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
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
    width: "100%",
    height: "50%",
  },

  TextInput: {
    padding: 2,

    borderWidth: 1,

    width: 250,
    fontSize: 20,
    borderRadius: 5,
  },

  textHeader: {
    fontSize: 50,
    fontWeight: "bold",
    width: "100%",
  },
  textcontent: {
    fontSize: 15,
    width: 300,
  },
  HeaderBox: {
    bottom: 5,
    gap: 25,
  },
  HeaderButtons: {
    gap: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 9,
  },
});
