import React from "react";
import { ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export function Tabs() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        <View style={styles.tabItem}>
          <MaterialIcons name="person-add" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Indicar amigos</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Cobrar</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons name="arrow-downward" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Depositar</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons name="pix" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Pix</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons name="lock" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Bloquear cartão</Text>
        </View>
      </ScrollView>
    </View>
  );
}
