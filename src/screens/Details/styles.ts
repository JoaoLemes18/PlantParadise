import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SafeAereaContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productImage: {
    width: "100%",
    height: 280,
    marginBottom: 16,
  },
  textproduct: {
    paddingHorizontal: 20,
  },
  productName: {
    fontSize: 24,
    top: 6,
    fontWeight: "bold",
    marginBottom: 30,
  },
  productName2: {
    fontSize: 12,
    color: "#9c9c9c",
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "bold",
    bottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 10,
  },
  stylecontainerprice: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 16,
  },
  productDescription: {
    fontSize: 14,
    top: 10,
    width: "90%",
    color: "#969595",
  },
  productDescriptioncentrilize: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  totalPrice: {
    fontSize: 14,
    color: "#000",
  },
  totalPrice2: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCartButton: {
    backgroundColor: "#418B64",
    paddingHorizontal: 16,
    width: 114,
    height: 48,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: "#FFF",
    top: 7,
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
  },
  favoriteButton: {
    backgroundColor: "transparent",
    zIndex: 1,
  },
  // Adicione heartButtonClicked ao estilo
  heartButtonClicked: {
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  footerPrice: {
    flexDirection: "column",
  },
});
