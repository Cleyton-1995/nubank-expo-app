import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../../assets/Nubank_Logo.png")}
        />
        <Text style={styles.title}>Cleyton</Text>
      </View>
      <MaterialIcons
        name="keyboard-arrow-down"
        color="#FFFFFF"
        size={20}
        style={styles.icon}
      />
    </View>
  );
}
