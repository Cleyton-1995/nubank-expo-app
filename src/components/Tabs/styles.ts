import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 20,
  },

  tabsContainer: {
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },

  tabItem: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  tabsText: {
    fontSize: 13,
    color: "#FFFFFF",
  },
});
