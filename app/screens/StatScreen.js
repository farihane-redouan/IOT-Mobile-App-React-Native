import React from "react";
import { View, StyleSheet } from "react-native";
import AppStatNow from "../components/AppStatNow";
import AChart from "../components/AppChart";


function StatScreen({
  navigation,
  title,
  DataNow,
  nextScreen,
  previousScreen,
}) {
  return (
    <View style={styles.container}>

      <View style={styles.now}>
        <AppStatNow
          title={title}
          DataNow={DataNow}
          navigation={navigation}
    
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
        marginTop:150,
      
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
