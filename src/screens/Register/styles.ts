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
    width: "100%",
    height: "50%",
  },

  TextInput: {
    padding: 2,
    borderColor: "#969595",
    borderBottomWidth: 1,
    width: 250,
    fontSize: 17,
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
