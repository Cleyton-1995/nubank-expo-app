import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B10AE",
    width: "100%",
    paddingTop: getStatusBarHeight() + 17,
  }
});