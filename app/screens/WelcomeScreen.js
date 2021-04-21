import React from "react";
import { Text, View, StyleSheet } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> logo</Text>
      <Text> Loading</Text>
      <Text
        onPress={() => navigation.navigate("OnOffScreen")}
        style={{ marginTop: "50px" }}
      >
        Config is Done
      </Text>
      <Text onPress={() => navigation.navigate("PlugingScreen")}>Not Yet!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});

export default WelcomeScreen;
