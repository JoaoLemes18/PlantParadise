import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
      text1: "Hello 👋",
      text2: "Good purchases!",
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
      text1: "Ops😬😬😬",
      text2: "This user does not exist!",
      position: "top",
      visibilityTime: 5000,
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
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={require("../../../assets/loginimage.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <Toast />
        <View style={styles.boxInicial}>
          <View style={styles.HeaderBox}>
            <Text style={styles.textHeader}>Hi!</Text>
            <Text style={styles.text}>Welcome</Text>
          </View>

          <View style={styles.HeaderButtons}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(email) => setEmail(email)}
              placeholder="Email..."
            />

            <TextInput
              style={styles.TextInput}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry
              placeholder="Password..."
            />

            <ButtonComponent
              onPress={Login}
              text={"Login"}
              style={styles.TextInput}
            />

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text>
                Don't have an account?{" "}
                <Text style={styles.clickHereText}>Click here</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
