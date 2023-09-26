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
    height: "45%",
    width: "100%",
  },
  clickHereText: {
    color: "#418B64",
    fontWeight: "bold",
  },
  TextInput: {
    borderColor: "#969595",
    borderBottomWidth: 1,
    padding: 2,
    width: 250,
    fontSize: 20,
    borderRadius: 5,
  },
  here: { color: "pink" },
  textHeader: {
    fontSize: 50,
    marginEnd: 10,
    right: 20,
    fontWeight: "bold",
    width: "100%",
  },
  text: { fontSize: 50, fontWeight: "bold", right: 20, bottom: 10 },
  textcontent: {
    fontSize: 15,
    width: 300,
  },
  HeaderBox: {
    padding: 10,
    gap: 15,
  },
  HeaderButtons: {
    gap: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 20,
    marginTop: 10,
  },
});
