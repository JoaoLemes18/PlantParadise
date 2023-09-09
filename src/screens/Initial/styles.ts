import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  },
});
