import React, { useState } from "react";

import { View, StyleSheet, Alert, Picker } from "react-native";

import AppButton from "../components/AppButton";
import AppControl from "../components/AppControl";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";

import colors from "../config/colors";

function WifiScreen({ navigation }) {
  const [SSID, setSSID] = useState("SSID1");
  const [password, onChangePass] = useState(null);
  const [SSIDArray, setSSIDArray] = useState(["Identifiant WI-FI"]);

  return (
    <View style={styles.container}>
      <AppHeading> connectez l'appareil à votre réseau Wi-Fi</AppHeading>
      <AppText>
        Scannez puis choisissez votre réseau Wi-Fi et entrez son mot de passe.
      </AppText>
     
        <View style={{ position: "absolute", top: 400, flex:1, }}>
          <View style={styles.picker}>
            <Picker selectedValue={SSID} onValueChange={setSSID} mode="dialog">
              {SSIDArray.map((ssid, k) => (
                <Picker.Item key={k} label={ssid} value={ssid} />
              ))}
            </Picker>
          </View>
          <AppTextInput />
        </View>
     
      <AppButton
        title="Actualiser"
        style={{ backgroundColor: "red", top: 580 }}
        styleText={{color:colors.white}}
        onPress={scan.bind(this, setSSIDArray)}
      />
      <AppButton
        title="Connecter"
        style={{ top: 650 }}
        // onPress={submitForm.bind(this, SSID, password)}
        onPress={() => navigation.navigate('OnOffScreen')}
      />

      <AppControl navigation={navigation} previousScreen="AccessPScreen" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  picker: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default WifiScreen;

const ESPWIFIAlert = () =>
  Alert.alert("Consigne", "SVP connecter au Reseau WIFI-ESP", [
    { text: "OUI", onPress: () => console.log("OUI Pressed") },
  ]);
const NOWIFIAlert = () =>
  Alert.alert(
    "Consigne",
    "Pas De Réseau sans fils Détecté, Essayer une Autre Fois",
    [{ text: "OUI", onPress: () => console.log("OUI Pressed") }]
  );
const AnswerConnectionAlert = (ReponseDescription) =>
  Alert.alert("Reponse", ReponseDescription, [
    { text: "OUI", onPress: () => console.log("OUI Pressed") },
  ]);
//Cette fonction envoie une requête http (/setting) au point accès aui contient le SSID et Mot de passe
// entrés par l'utilisateur. la réponse et l'affirmation ou non de  la connection avec le WIFI.
async function submitForm(id, password) {
  //const xhttp2 = new XMLHttpRequest();
  id = id.replace(/ /g, "+");
  let url = "http://192.168.4.1/setting?ssid=" + id + "&pass=" + password;
  if (id === "" && password === "") url = "http://192.168.4.1/setting";
  const response = await fetch(url);
  //xhttp2.open("GET", url);
  //xhttp2.send();
  console.log(url);
  let ReponseDescription = await response.text();
  // xhttp2.onreadystatechange = (e) => {
  //     console.log(xhttp2.responseText);
  //     ReponseDescription = xhttp2.responseText;
  // }

  AnswerConnectionAlert(ReponseDescription);
  
}
const getData = async () => {
  const response = await fetch("https://reqres.in/api/user/2");
  const data = await response.text();
  console.log(data, typeof data);
};

//cette fonction envoie une requête http (/) au point accès
// et répond par la liste des réseaux sans fils dans les environs.
let NetworkData;
function scan(setSSIDArray) {
  const xhttp2 = new XMLHttpRequest();
  const url = "http://192.168.4.1/";
  xhttp2.open("GET", url);
  xhttp2.send();
  xhttp2.onreadystatechange = (e) => {
    NetworkData = xhttp2.responseText;
    console.log(1, NetworkData);
  };
  if (
    typeof NetworkData !== "undefined" &&
    NetworkData.toUpperCase().includes("FAILED") === false
  ) {
    console.log(1, NetworkData);
    let NetworkDataArray, NetworkNumb, IP, SSIDArray;
    NetworkDataArray = NetworkData.split(",");
    IP = NetworkDataArray[0];
    NetworkNumb = NetworkDataArray[1];
    SSIDArray = NetworkDataArray.slice(2);
    if (typeof SSIDArray !== "undefined") {
      setSSIDArray(SSIDArray);
    } else {
      NOWIFIAlert();
      console.log("Pas De Réseau sans fils Détecté");
    }
  } else {
    ESPWIFIAlert();
    console.log("SVP Connecter au Point d'accès WIFI-ESP!");
  }
}
