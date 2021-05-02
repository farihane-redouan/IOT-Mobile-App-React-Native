import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

import AppText from "../components/AppText";
import AppHeading from "../components/AppHeading";

import colors from "../config/colors";
import AppControl from "../components/AppControl";

function ConnectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeading>Déctecter l'appareil</AppHeading>
      <AppText> Attendez quelques secondes </AppText>

      <ActivityIndicator style={styles.loading} size="large" color="#0f0" />

      <AppControl
        navigation={navigation}
        nextScreen="AccessPScreen"
        previousScreen="PlugingScreen"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  loading: {
    position: "absolute",
    top: 480,
  },
});

export default ConnectScreen;
