import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppControl from "../components/AppControl";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import Wifi from "../components/Wifi";
import colors from "../config/colors";

function AccessPScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeading > Le prise est détecté</AppHeading>
      <AppText>
        Connectez-vous au wi-fi SmartPlug-GEP, puis revenez à l'application
      </AppText>
      
      <AppButton title="Suivant" onPress={() => navigation.navigate('WifiScreen')}/>
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

export default AccessPScreen;
