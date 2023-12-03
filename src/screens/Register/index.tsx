import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import ButtonComponent from "../../components/Button/button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import Toast from "react-native-toast-message";

export default function RegisterPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Congratulations🎉🥳",
      text2: "Welcome to app!",
      position: "top",
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 10,
      bottomOffset: 60,
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
      await updateProfile(user, {
        displayName: name,
      });

      showToast();
    } catch (error) {
      console.error("Erro no createUserWithEmailAndPassword:", error);
    }
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
              onChangeText={(name) => setName(name)}
              placeholder="Enter your name"
            />

            <TextInput
              style={styles.TextInput}
              onChangeText={(email) => setEmail(email)}
              placeholder="Enter a email"
            />

            <TextInput
              style={styles.TextInput}
              onChangeText={(password) => setPassword(password)}
              secureTextEntry
              placeholder="Type your password"
            />

            <ButtonComponent
              onPress={Register}
              text={"Register"}
              style={styles.TextInput}
            />

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text>
                Already have an account?{" "}
                <Text style={styles.clickHereText}>Click here</Text>
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Initial")}>
              <Text>Back to initial</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
