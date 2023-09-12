import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { auth } from "../../firebase/config";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

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
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.content}>
        {/* Ícone de usuário */}
        <Ionicons name="ios-person" size={100} color="#000" />

        <Text style={styles.name}>{user?.displayName}</Text>
        <Text style={styles.email}> {user?.email}</Text>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: height < 812 ? 20 : 40,
  },
  backButton: {
    position: "absolute",
    left: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    alignItems: "center",
    padding: 16,
    bottom: 230,
  },
  logoutText: {
    fontSize: 18,
    color: "red",
  },
  name: {
    top: 15,
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    top: 25,
    color: "#969595",
    fontSize: 14,
  },
});

export default UserProfile;
