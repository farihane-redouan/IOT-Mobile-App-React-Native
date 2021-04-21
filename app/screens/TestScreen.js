import React from "react";
import { View } from "react-native";

function TestScreen(props) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems:"center"
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",

          width: 70,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",

          width: 70,
          height: 80,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",

          width: 70,
          height: 70,
        }}
      />
    </View>
  );
}

export default TestScreen;
