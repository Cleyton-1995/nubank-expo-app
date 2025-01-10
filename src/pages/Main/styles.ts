import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A05BE",
    width: "100%",
    paddingTop: getStatusBarHeight() + 17,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    marginTop: 0,
    marginHorizontal: 20,
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 380,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30
  },
  cardContent: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 13,
    color: "#998",
  },
  description: {
    fontSize: 32,
    marginTop: 3,
    color: "#333",
  },
  cardFooter: {
    padding: 30,
    backgroundColor: "#EEE",
    borderRadius: 4
  },
  annotation: {
    fontSize: 12,
    color: "#333",
  },

});