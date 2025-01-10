<<<<<<< HEAD
import React from "react";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";
import QRCode from "react-native-qrcode-svg";

export function Menu() {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={styles.container}
    >
      <View style={styles.code}>
        <QRCode
          value="https://example.com.br"
          size={80}
          backgroundColor="#8A05BE"
          color="#FFFFFF"
        />
      </View>
    </ScrollView>
  );
}
=======
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export function Menu() {
  return (
    <View style={styles.container}>

    </View>
  );
}
>>>>>>> 78fb837dc7855d1ac1430c944fe91f12c15e05b8
