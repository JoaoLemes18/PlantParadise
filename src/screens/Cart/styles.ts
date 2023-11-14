import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  content: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emptyCartText: {
    left: 25,
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
  },
  clearCartButtonText: {
    color: "red",
    fontSize: 20,
  },
  usertext: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
  },
  subtotalContainer: {
    width: "80%",
    padding: 12,
    marginTop: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#ECF8F3",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#418B64",
  },
  subtotalText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subtotalText2: {
    fontSize: 14,
    fontWeight: "bold",
  },
  checkoutButton: {
    width: "80%",
    backgroundColor: "#418B64",
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  centralize: {
    // flex: 1,
    bottom: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
