import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";



import { AntDesign } from "@expo/vector-icons";

function AppControl({ navigation, nextScreen, previousScreen }) {
  return (
    <View style={styles.control}>
      <TouchableOpacity onPress={() => navigation.navigate(previousScreen)}>
        <AntDesign name="leftcircleo" size={24} color="black" />
      </TouchableOpacity>
      {(typeof nextScreen !== 'undefined')?
      <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </TouchableOpacity>
    : null}
    </View>
  );
}

const styles = StyleSheet.create({
  control: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "90%",
    paddingBottom: 50,
  },
});

export default AppControl;
