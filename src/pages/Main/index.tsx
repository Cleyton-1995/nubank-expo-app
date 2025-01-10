import React from "react";
import { StatusBar, Text, View } from "react-native";

import { styles } from "./styles";

export function Main() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="#8B10AE" />
      <View style={styles.container}>
      </View>
    </>
  );
}
