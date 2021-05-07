import React, { useState } from "react";

import { View, StyleSheet, Alert, Picker, TextInput } from "react-native";

import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";

import colors from "../config/colors";

import { useNavigation } from '@react-navigation/native';

function WifiScreen({ navigation }) {
  const [SSID, setSSID] = useState();
  const [password, onChangePass] = useState();
  const [SSIDArray, setSSIDArray] = useState(['Mes Réseau Wi-Fi']);
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <AppHeading> connectez l'appareil à votre réseau Wi-Fi</AppHeading>
      <AppText>
        Scannez puis choisissez votre réseau Wi-Fi et entrez son mot de passe.
      </AppText>
     
        <View style={{ position: "absolute", top: 350, flex:1, }}>
          <View style={styles.picker}>
          <Picker selectedValue={SSID} onValueChange={setSSID} mode="dialog">
              {SSIDArray.map((ssid, k) => (
                <Picker.Item key={k} label={ssid} value={ssid} />
              ))}
            </Picker>
          </View>

      <TextInput
                onChangeText={onChangePass}
                placeholderTextColor={"#00000055"}
                style={styles.password}
                placeholder='MOT DE PASSE'
                autoCapitalize="none"
                value={password}/>
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
        onPress={() => submitForm(SSID, password, nav)}
      />

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
  password: {
    height: 50,
    width: 300,
    marginTop: 10,
    paddingLeft: 12,
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default WifiScreen;

const ESPWIFIAlert = () =>
  Alert.alert("Consigne", "SVP connecter au Réseau SmartPlug-GEP", [
    { text: "OUI", onPress: () => console.log("OUI Pressed") },
  ]);
const NOWIFIAlert = () =>
  Alert.alert(
    "Consigne",
    "Pas De Réseau sans fils Détecté, Essayer une Autre Fois",
    [{ text: "OUI", onPress: () => console.log("OUI Pressed") }]
  );
const AnswerConnectionAlert = (ReponseDescription, nav) =>
  Alert.alert("Reponse", ReponseDescription, [
    { text: "OUI", onPress: () => nav.navigate('OnOffScreen') },
  ]);

//Cette fonction envoie une requête http (/setting) au point accès aui contient le SSID et Mot de passe
// entrés par l'utilisateur. la réponse et l'affirmation ou non de  la connection avec le WIFI.
 async function submitForm(SSID, password, nav) {
   if(typeof SSID !== 'undefined'){
  SSID = SSID.replace(/ /g, "+");
  let url = "http://192.168.4.1/setting?ssid=" + SSID + "&pass=" + String(password);
  if (SSID === "" && password === "") url = "http://192.168.4.1/setting";
  console.log(url);

  fetch(String(url))
  .then(response =>  {return response.text()})
  .then(function(text){
    let ReponseDescription = text;
    AnswerConnectionAlert(ReponseDescription, nav);
  })
  .catch(err => console.log(err.message));
}
}

//cette fonction envoie une requête http (/) au point accès
// et répond par la liste des réseaux sans fils dans les environs.
let NetworkData;
async function scan(setSSIDArray) {
  fetch("http://192.168.4.1/")
  .then(response =>  {return response.text()})
  .then(function(text){
    NetworkData = text;
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
  })
  .catch(err => {
    console.log(err.message);
    ESPWIFIAlert();
    console.log("SVP Connecter au Point d'accès WIFI-ESP!");
  });
  
}
