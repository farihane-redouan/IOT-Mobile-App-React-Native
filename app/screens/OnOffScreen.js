import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import fonts from "../config/fonts";
import AppTable from "../components/AppTable";
import AppHeader from "../components/AppHeader";
import { FontAwesome } from '@expo/vector-icons';



function OnOffScreen({ navigation }) {

  const [waitRed,setWaitRed] = useState(false);
  const [waitGreen,setWaitGreen] = useState(false);

  let table = {
    tableHead: ["Date", "Durée (h)"],
    tableData: [
      ["01/11", "20"],
      ["09/11", "15"],
      ["10/11", "22"],
      ["13/11", "05"],
    ],
  };

  return (
    <View style={styles.container}>

      <AppHeader navigation={navigation} />

      <View style={styles.onOff}>
        <TouchableOpacity 
        style={[styles.button,{ backgroundColor : waitGreen ? '#FAD201':colors.btnColor}]} 
        onPress={() =>  switchOn(setWaitGreen)}>
        <FontAwesome name="power-off" size={130} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.button, { backgroundColor: waitRed ? '#FAD201': 'red' }]} 
        onPress={() => switchOff(setWaitRed)}>
        <FontAwesome name="power-off" size={130} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.table}>
        <AppText
          style={{ position: "relative", top: 0, fontFamily: fonts.RalewayM }}
        >
          Durée du fonctionnement
        </AppText>
        <AppTable tableHead={table.tableHead} tableData={table.tableData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:70,
    backgroundColor: colors.white,
    flexDirection: "column",
    alignItems: "center",
  },
  onOff: {
    zIndex: 3,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: 100,
    position: "absolute",
    top: 250,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75,
    padding: 8,
    width: 150,
    height: 150,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontFamily: fonts.RalewayL,
    textTransform: "uppercase",
  },
  table: {
    marginTop: 20,
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: 310,
    position: "absolute",
    top: 460,
  },
  header:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    position:'relative',
    top:80,
    left:0,
    paddingBottom:10,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  headText:{
    fontFamily:fonts.RalewayM,
    fontSize:16,
    
  }
});

export default OnOffScreen;

   function switchOn(setWaitGreen) {
    setWaitGreen(true)
    const fetchNow = function() { fetch("https://api.thingspeak.com/update?api_key=NS8W5PWJY92J9436&field1=1")
      .then(response =>  {return response.text()})
      .then(function(text){
          console.log(text);
          if(text == 0)
           fetchNow();
      });
    }
    fetchNow();
    setTimeout( () => setWaitGreen(false) , 14000)
}

async function switchOff(setWaitRed) {
  setWaitRed(true)
  const fetchNow = function() { fetch("https://api.thingspeak.com/update?api_key=NS8W5PWJY92J9436&field1=0")
  .then(response =>  {return response.text()})
  .then(function(Entier){
      console.log(Entier);
      if(Entier == 0)
       fetchNow();
  });
}
fetchNow();
setTimeout( () => setWaitRed(false) , 14000)
}