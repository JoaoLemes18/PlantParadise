import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  boxInicial: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "40%",
    width: "100%",
  },

  textHeader: {
    top: 13,
    right: 12,
    fontSize: 50,
    fontWeight: "bold",
    width: 200,
  },
  textapp: {
    top: 10,
    right: 12,
    fontSize: 18,
    width: 303,
  },
  HeaderBox: {
    bottom: 35,
    padding: 10,
    gap: 15,
  },
  HeaderButtons: {
    gap: 18,
    bottom: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
