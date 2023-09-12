import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
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
  userimage: {
    bottom: 20,
  },
  logoutButton: {
    alignItems: "center",
    padding: 16,
    bottom: 230,
  },
  logoutText: {
    fontSize: 24,
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
