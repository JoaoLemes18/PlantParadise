import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  content: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userimage: {
    width: 25,
    height: 25,
    bottom: 5,
  },
  usertext: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
  cardList: {
    paddingLeft: 5,
  },
  cardContainer: {
    right: 15,
    marginHorizontal: 10,
  },
  flatlistText: {
    right: 9,
    fontSize: 20,
    left: 3,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  flatlisthorizontalText: {
    top: 10,
    left: 10,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    paddingHorizontal: 68,
    right: 76,
    top: 10,
  },
  button: {
    backgroundColor: "transparent",
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#969595",
  },
  selectedButton: {
    backgroundColor: "none",
    color: "#969595",
  },
  selectedButtonText: {
    color: "#000", // Texto branco para o botão selecionado
  },

  longcardlist: {
    alignItems: "center",
    justifyContent: "center",
  },
});
