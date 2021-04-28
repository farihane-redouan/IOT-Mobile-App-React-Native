import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

function Wifi(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name="wifi" size={35} color={colors.white} />
      </View>
      <View style={styles.text}>
        <Text style={styles.basicText}>Wi-Fi</Text>
        <Text style={styles.basicText}>Le nom du Wi-Fi </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    top: 400,
    width: "80%",
  },
  icon: {
    backgroundColor: colors.bgColor6,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 40,
  },
  text: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: "space-between",
    marginLeft: 2,
    borderColor: colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  basicText:{
    color:colors.black,
    fontFamily:'RalewayL',
  }
});

export default Wifi;
