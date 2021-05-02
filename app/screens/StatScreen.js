import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppControl from "../components/AppControl";
import AppStatNow from "../components/AppStatNow";
import AChart from "../components/AppChart";

import { FontAwesome5 } from "@expo/vector-icons";
import AppHeader from "../components/AppHeader";

function StatScreen({
  navigation,
  title,
  DataNow,
  nextScreen,
  previousScreen,
}) {
  return (
    <View style={styles.container}>
      <AppHeader navigation={navigation} />

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
        <AChart title={title} navigation={navigation} />
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
    }
});

export default StatScreen;
