
import React, { useState } from 'react';
import {
    Alert,
    Button,
    StyleSheet, Text, TextInput, View,
} from 'react-native';


const ESPWIFIAlert = () =>
    Alert.alert(
        "Consigne",
        "SVP connecter au Reseau WIFI-ESP",
        [
            { text: "OUI", onPress: () => console.log("OUI Pressed") }
        ]
    );
const NOWIFIAlert = () =>
    Alert.alert(
        "Consigne",
        "Pas De Réseau sans fils Détecté, Essayer une Autre Fois",
        [
            { text: "OUI", onPress: () => console.log("OUI Pressed") }
        ]
    );
const AnswerConnectionAlert = (ReponseDescription) =>
    Alert.alert(
        "Reponse",
        ReponseDescription,
        [
            { text: "OUI", onPress: () => console.log("OUI Pressed") }
        ]
    );
//Cette fonction envoie une requête http (/setting) au point accès aui contient le SSID et Mot de passe
// entrés par l'utilisateur. la réponse et l'affirmation ou non de  la connection avec le WIFI.
async function submitForm(id, password) {
    //const xhttp2 = new XMLHttpRequest();
    id = id.replace(/ /g, "+");
    let url = "http://192.168.4.1/setting?ssid=" + id + "&pass=" + password;
    if (id === "" && password === "")
        url = "http://192.168.4.1/setting"
        const response = await fetch(url)
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
    const response = await fetch("https://reqres.in/api/user/2")
    const data = await response.text();
    console.log(data,typeof data)
}

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
    }
    if (typeof NetworkData !== "undefined" &&  NetworkData.toUpperCase().includes('FAILED') === false) {
        console.log(1, NetworkData);
        let NetworkDataArray, NetworkNumb, IP, SSIDArray;
        NetworkDataArray = NetworkData.split(',');
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



function LoginForm({ navigation }) {
    const [id, onChangeId] = useState();
    const [password, onChangePass] = useState();
    const [SSIDArray, setSSIDArray] = useState([]);

    return (
        <View style={styles.container}>
            <Text style={{
                fontWeight: 'bold',
                width: 600,
                fontSize: 18,
                color: 'red'
            }}>{SSIDArray.length !== 0 ? 'Réseaux Sans Fils Détecté :' : ''} </Text>
            <View style={{ margin: 10 }}></View>
            {
                SSIDArray.slice(0, 10).map((ssid, k) => (
                    <Text style={{
                        fontSize: 16,
                        width: 200,
                    }} key={k}>{k + 1}. {ssid}</Text>
                ))
            }
            <View style={{ margin: 10 }}></View>

            <TextInput
                style={styles.input}
                onChangeText={onChangeId}
                placeholder='SSID'
                placeholderTextColor={"#00000055"}
                autoCapitalize="none"
                value={id}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePass}
                placeholderTextColor={"#00000055"}
                placeholder='PASSWORD'
                autoCapitalize="none"
                value={password}
            />
            <View style={{ margin: 10 }}></View>

            <Button title="ENVOYER" onPress={submitForm.bind(this, id, password)} />
            <View style={{ margin: 10 }}></View>

            <Button title="SCAN" color='orange'
                onPress={scan.bind(this, setSSIDArray)}
                // onPress={getData}
            />
            <View style={{ margin: 10 }}></View>

            <Button title="SUIVANT" 
            onPress={() => navigation.navigate("Etape 2")} 
            />
        </View>
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center'
    }, input: {
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#111',
        height: 40,
        width: '100%',
        marginBottom: 20,
        alignContent: 'center',
    }
})