import React from "react";
import { View, Text, StyleSheet } from "react-native";


import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";

import AppControl from "../components/AppControl";
import colors from "../config/colors";

function PlugingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeading>Brancher Smart Plug</AppHeading>
      <AppText>
        Brancher votre Smart Plug. Appuyer sur le button Power On. si le Led
        n'est pas allumer.
      </AppText>
      <AppButton title="suivant"/>
      <AppControl navigation={navigation} nextScreen="ConnectScreen" previousScreen ="WelcomeScreen"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
});

export default PlugingScreen;
