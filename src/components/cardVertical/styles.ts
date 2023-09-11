import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: 300,
    height: 280,
    borderRadius: 8,
    marginLeft: 24,
    marginBottom: 20,
    top: 20,
    overflow: "hidden",
    position: "relative",
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1.5,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "#666",
  },
  cartButton: {
    backgroundColor: "#418B64",
    borderRadius: 50,
    height: 30,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  heartButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
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
});
