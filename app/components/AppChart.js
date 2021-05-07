import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";

import { EvilIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function actualiser(setDataX, setDataY) {
  const url =
    "https://api.thingspeak.com/channels/1347195/fields/1.json?api_key=T2I3OY33LCUPH0HH";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
      let len,
        x,
        y,
        y1,
        y2,
        DataX = [],
        DataY = [],
        Last5;
      len = obj.feeds.length;
      for (let i = len - 5; i < len; i++) {
        x = Number(obj.feeds[i].field1);
        y1 = obj.feeds[i].created_at.split("T");
        y2 = y1[1].split(":");
        y = [String(y2[0]), String(y2[1])];
        DataX.push(y);
        DataY.push(x);
      }
      console.log(DataX, DataY);
      setDataX(DataX);
      setDataY(DataY);
    })
    .catch(function (error) {
      console.log("Problem : ", error);
    });
}

function AChart({ title,navigation }) {
  const [DataX, setDataX] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [DataY, setDataY] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      actualiser(setDataX, setDataY)
    });

    return unsubscribe;
  }, [navigation]);


  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: DataX,
          datasets: [
            {
              data: DataY,
            },
          ],
        }}
        width={Dimensions.get("window").width*0.95} // from react-native
        height={250}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        formatXLabel={(Y) => String(Y[0]+'h'+Y[1]) }
        chartConfig={{
          backgroundColor: "#00ff00",
          backgroundGradientFrom: "#40ff40",
          backgroundGradientTo: "#00cc00",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#808080",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <TouchableOpacity
        style={{ fontSize: 24, color: "#6cb9e0" }}
        onPress={actualiser.bind(this, setDataX, setDataY)}
      >
        <EvilIcons name="refresh" size={60} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
  },
});

export default AChart;
