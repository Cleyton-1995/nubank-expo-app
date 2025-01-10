import React from "react";
import { StatusBar, Text, View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Menu } from "../../components/Menu";

export function Main() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="#8A05BE" />
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
<<<<<<< HEAD
          <Menu/>
=======
          <Menu />
>>>>>>> 78fb837dc7855d1ac1430c944fe91f12c15e05b8

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <MaterialIcons name="attach-money" size={28} color="#665" />

              <MaterialIcons name="visibility-off" size={20} color="#665" />
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.title}>Saldo disponível</Text>

              <Text style={styles.description}>R$ 597.644,50</Text>
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.annotation}>
                Transferência de R$ 5.444,33 reccebida de Olívia Cristina hoje
                às 08h00min.
              </Text>
            </View>
          </View>
        </View>

        <Tabs />
      </View>
    </>
  );
}
