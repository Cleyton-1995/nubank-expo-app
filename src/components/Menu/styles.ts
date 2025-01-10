import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginHorizontal: 30,
  },
  code: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    alignSelf: "center",
  },
  nav: {
    marginTop: 26,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(255, 255, 255, 0.8)",
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255, 255, 255, 0.8)",
  },
  navText: {
    fontSize: 15,
    color: "#FFFFFF",
    marginLeft: 20,
  },
  signOutButton:{
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    marginTop: 15

  },
  signOutButtonText:{
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  },
});
