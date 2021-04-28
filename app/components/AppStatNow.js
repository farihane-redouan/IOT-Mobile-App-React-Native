import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import fonts from "../config/fonts";
function AppStatNow({
  title,
  DataNow,
  navigation,
  nextScreen,
  previousScreen,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.textheading}>{title }</Text>
      </View>
      <View style={styles.control}>
      {typeof previousScreen !== "undefined" ? (
        <TouchableOpacity onPress={() => navigation.navigate(previousScreen)}>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        ) : null}
        <Text style={styles.text}>
            {DataNow} 
            <Text style={{fontFamily:fonts.RalewayEL}}> (maintenant)</Text>
        </Text>
        {typeof nextScreen !== "undefined" ? (
          <TouchableOpacity onPress={() => navigation.navigate(nextScreen)}>
            <AntDesign name="right" size={30} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1
  },
  heading:{
    alignItems:'center',
    marginBottom:30,
  },
  textheading:{
    fontFamily:fonts.RalewayM,
    fontSize:30,
  },
  control: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.RalewayM,
  },
  title: {
    position: "absolute",
    top: 0,
  },
});

export default AppStatNow;
