import React from "react";
import { Animated, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import QRCode from "react-native-qrcode-svg";
import { MaterialIcons } from "@expo/vector-icons";

export function Menu({translateY}: {translateY: Animated.Value}) {
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.container, {
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
          extrapolate: "clamp"
        })
      }]}
    >
      <View style={styles.code}>
        <QRCode
          value="https://example.com.br"
          size={80}
          backgroundColor="#8A05BE"
          color="#FFFFFF"
        />
      </View>

      <View style={styles.nav}>
        <View style={styles.navItem}>
          <MaterialIcons name="help-outline" size={20} color="#FFFFFF" />
          <Text style={styles.navText}>Me ajuda</Text>
        </View>

        <View style={styles.navItem}>
          <MaterialIcons name="person-outline" size={20} color="#FFFFFF" />
          <Text style={styles.navText}>Perfil</Text>
        </View>

        <View style={styles.navItem}>
          <MaterialIcons name="credit-card" size={20} color="#FFFFFF" />
          <Text style={styles.navText}>Configurar cartão</Text>
        </View>

        <View style={styles.navItem}>
          <MaterialIcons name="smartphone" size={20} color="#FFFFFF" />
          <Text style={styles.navText}>Configurações do app</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.signOutButton}
        onPress={() => {}}
      >
        <Text style={styles.signOutButtonText}>SAIR DO APP</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
}
