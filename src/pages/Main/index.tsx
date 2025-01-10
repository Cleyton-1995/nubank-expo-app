import React from "react";
import { StatusBar, Text, View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";

export function Main() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="#8A05BE" />
      <View style={styles.container}>
        <Header/>
        <Tabs/>
      </View>
    </>
  );
}
