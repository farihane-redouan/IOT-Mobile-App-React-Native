import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppControl from "../components/AppControl";
import AppText from "../components/AppText";
import colors from "../config/colors";
import fonts from "../config/fonts";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";

import AppTable from "../components/AppTable";
import AppHeader from "../components/AppHeader";
import { FontAwesome } from '@expo/vector-icons';


function OnOffScreen({ navigation }) {

  const [flashMessage, setMessage] = useState('Reponse du Serveur');
  const [powerState,setPowerState] = useState(0);

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
        <TouchableOpacity style={[styles.button, { backgroundColor: (powerState === 1 )? "green":'red' }]} onPress={() => switchKey(powerState, setPowerState, setMessage)}>
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

function switchKey (powerState, setPowerState, setMessage) {
    if(powerState === 0){
      fonctionOn(setMessage);
      setPowerState(1);
    }
    else{
      fonctionOff(setMessage);
      setPowerState(0);
    }
}

function fonctionOn(setMessage) {
  const xhttp1 = new XMLHttpRequest();
  xhttp1.open("GET", "https://api.thingspeak.com/update?api_key=NS8W5PWJY92J9436&field1=1");
  xhttp1.send();
  xhttp1.onreadystatechange = (e) => {
    setMessage(xhttp1.responseText)
    console.log(xhttp1.responseText)
  }
  console.log('ON');
}
function fonctionOff(setMessage) {
  const xhttp2 = new XMLHttpRequest();
  xhttp2.open("GET", "https://api.thingspeak.com/update?api_key=NS8W5PWJY92J9436&field1=0");
  xhttp2.send();
  xhttp2.onreadystatechange = (e) => {
    setMessage(xhttp2.responseText)
    console.log(xhttp2.responseText)
  }
  console.log('OFF');
}