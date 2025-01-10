import React from "react";
import { Animated, StatusBar, Text, View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Tabs } from "../../components/Tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Menu } from "../../components/Menu";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from "react-native-gesture-handler";

export function Main() {
  const translateY = new Animated.Value(0);

  let offset = 0;

  const animatedEvent = Animated.event<PanGestureHandlerGestureEvent>(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event: any) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let newOffset = event.nativeEvent.translationY + offset;

      if (newOffset < 0) {
        newOffset = 0;
      } else if (newOffset > 380) {
        newOffset = 380;
      }

      Animated.timing(translateY, {
        toValue: newOffset,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = newOffset;
        translateY.setValue(offset);
      });
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor="#8A05BE" />
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <Menu translateY={translateY}  />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
          >
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: [-350, 0, 380],
                        outputRange: [-50, 0, 380],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                },
              ]}
            >
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
            </Animated.View>
          </PanGestureHandler>
        </View>

        <Tabs />
      </View>
    </GestureHandlerRootView>
  );
}
