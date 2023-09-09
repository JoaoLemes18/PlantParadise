import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  content: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
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
  flatlistVerticalText: {
    left: 2,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  flatlisthorizontalText: {
    top: 10,
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
    fontSize: 16,
    fontWeight: "bold",
    color: "#a0a0a0",
  },
  selectedButton: {
    backgroundColor: "none",
  },
  selectedButtonText: {
    color: "#141414", // Texto branco para o botão selecionado
  },

  longcardlist: {
    alignItems: "center",
    justifyContent: "center",
  },
});
