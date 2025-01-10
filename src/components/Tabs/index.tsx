import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export function Tabs({ translateY }: { translateY: Animated.Value }) {
  return (
    <Animated.View
      style={[
        styles.container,

        {
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.3],
                extrapolate: "clamp",
              }),
            },
          ],

          opacity: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [1, 0.3],
            extrapolate: "clamp",
          }),
        },
      ]}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        <TouchableOpacity activeOpacity={0.8} style={styles.tabItem}>
          <MaterialIcons name="person-add" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Indicar amigos</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.tabItem}>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Cobrar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.tabItem}>
          <MaterialIcons name="arrow-downward" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Depositar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.tabItem}>
          <MaterialIcons name="pix" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.tabItem}>
          <MaterialIcons name="lock" size={24} color="#FFFFFF" />
          <Text style={styles.tabsText}>Bloquear cartão</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
  );
}
