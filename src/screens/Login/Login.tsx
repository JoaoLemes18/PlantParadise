import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import ButtonComponent from "../../components/Button/button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Toast from "react-native-toast-message";

export default function LoginPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Olá 👋",
      text2: "Seja bem-vindo!",
      position: "top",
      visibilityTime: 1000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      keyboardOffset: 10,
    });
  };

  const showToastError = () => {
    Toast.show({
      type: "error",
      text1: "Olá 👋",
      text2: "Esse usuário não existe!",
      position: "top",
      visibilityTime: 1000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 40,
      keyboardOffset: 10,
    });
  };

  async function Login() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuário logado");
      showToast();

      setTimeout(() => {
        navigation.navigate("Home", { user: user.uid });
      }, 1500);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Erro de login:");
      showToastError();
    }
  }

  return (
    <ImageBackground
      source={require("../../assets/inicialpageimage.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <Toast />
      <View style={styles.boxInicial}>
        <View style={styles.HeaderBox}>
          <Text style={styles.textHeader}>Login</Text>
        </View>

        <View style={styles.HeaderButtons}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(email) => setEmail(email)}
            placeholder="Digite seu email..."
          />

          <TextInput
            style={styles.TextInput}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry
            placeholder="Digite sua senha..."
          />

          <ButtonComponent
            onPress={Login}
            text={"Login"}
            style={styles.TextInput}
          />

          <TouchableOpacity onPress={() => navigation.navigate("RegisterPage")}>
            <Text>Se voce não tem conta, clique aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
