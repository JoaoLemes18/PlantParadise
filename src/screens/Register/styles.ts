import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 8,
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
    top: 10,
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
  clickHereText: {
    color: "#418B64",
    fontWeight: "bold",
  },
  HeaderButtons: {
    gap: 20,
    bottom: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 9,
  },
});
