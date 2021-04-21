import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ConnectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Se connecter à l'appareil</Text>
      <Text> Attendez quelques secondes</Text>
      <Text> Loading</Text>
      <Text
        onPress={() => navigation.navigate("AccessPScreen")}
        style={{ marginTop: "50px" }}
      >
        Suivant
      </Text>
      <Text onPress={() => navigation.navigate("PlugingScreen")}>
        Precedant
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682b4",
  },
});

export default ConnectScreen;
