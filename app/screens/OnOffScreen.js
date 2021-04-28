import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppControl from "../components/AppControl";
import AppText from "../components/AppText";
import colors from "../config/colors";
import fonts from "../config/fonts";
import { AntDesign } from "@expo/vector-icons";

import AppTable from "../components/AppTable";

import { FontAwesome5 } from "@expo/vector-icons";

function OnOffScreen({ navigation }) {

  const [flashMessage, setMessage] = useState('Reponse du Serveur');

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
      <AppText
        style={{
          position: "relative",
          top: 80,
          fontFamily: fonts.RalewayM,
          fontSize: 30,
        }}
      >
         <FontAwesome5 name="home" size={24} color="black" /> Accueil({flashMessage})
      </AppText>

      <View style={styles.onOff}>
        <TouchableOpacity style={[styles.button, { backgroundColor: "red" }]} onPress={() => fonctionOn(setMessage)}>
          <Text style={styles.title}>ON Prise</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]} onPress={() => fonctionOff(setMessage)}>
          <Text style={styles.title}>OFF Prise</Text>
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

      <TouchableOpacity
        style={styles.statContainer}
        onPress={() => navigation.navigate("EnergyScreen")}
      >
        <Text style={styles.statText}>Statistiques</Text>
        <AntDesign name="caretright" size={30} color={colors.black} />
      </TouchableOpacity>

      <AppControl
        navigation={navigation}
        previousScreen="WelcomeScreen"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: 150,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 8,
    width: 120,
    height: 60,
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
    top: 260,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  statContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 600,
    height: 60,
    backgroundColor: colors.btnColor,
    borderRadius: 2,
  },
  statText: {
    fontFamily: fonts.RalewayL,
    fontSize: 25,
    top: -5,
  },
});

export default OnOffScreen;



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