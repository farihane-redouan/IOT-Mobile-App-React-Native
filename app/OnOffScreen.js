import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

function OnOffScreen({ navigation }) {
  const [flashMessage, setMessage] = useState('Reponse du Serveur');
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.heading}>Smart Plug</Text>
      </View>
      <Button title="ON" onPress={() => fonctionOn(setMessage)}></Button>
      <View style={styles.br}></View>
      <Button title="OFF" onPress={() => fonctionOff(setMessage)}></Button>
      <View style={styles.message}><Text style={{ color: '#fff', fontSize: 20 }}>{flashMessage == 0 ? "Réessayer" : "Requête a réussie"}</Text></View>
      <View style={styles.br}></View>
      <Button title="SUIVANT" onPress={() => navigation.navigate("Etape 3")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  br: {
    margin: 10,
  },
  heading: {
    alignItems: 'center',
    color: '#ff6347cc',
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'sans-serif-medium',

  },
  message: {
    width: 215,
    height: 100,
    marginTop: 20,
    backgroundColor: '#ff6347cc',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default OnOffScreen;