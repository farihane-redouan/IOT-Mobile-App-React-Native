import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppControl from "../components/AppControl";
import AppStatNow from "../components/AppStatNow";
import AChart from "../components/AppChart";

import { FontAwesome5 } from "@expo/vector-icons";

function StatScreen({
  navigation,
  title,
  DataNow,
  nextScreen,
  previousScreen,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("OnOffScreen")}>
        <FontAwesome5 name="home" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.now}>
        <AppStatNow
          title={title}
          DataNow={DataNow}
          navigation={navigation}
          nextScreen={nextScreen}
          previousScreen={previousScreen}
        />
      </View>

      <View style={styles.chart}>
        <AChart title={title} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        marginTop:70,
    },
    now:{
        flex:2,
        width:'100%',
        marginTop:20,
    },
    chart:{
        flex:6,
        width:'100%',
    }
});

export default StatScreen;
