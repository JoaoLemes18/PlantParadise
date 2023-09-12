import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { auth } from "../../firebase/config";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UserProfile = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.reset({
        index: 0,
        routes: [{ name: "Initial" }],
      });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho personalizado */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.backButton}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.content}>
        {/* Ícone de usuário */}
        <View style={styles.userimage}>
          <AntDesign name="user" size={100} color="black" />
        </View>
        <Text style={styles.name}>{user?.displayName}</Text>
        <Text style={styles.email}> {user?.email}</Text>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
