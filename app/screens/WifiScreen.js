import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function WifiScreen({navigation}) {
    return (
        <View style={styles.container}>  

        <Text> connectez l'appareil à votre réseau Wi-Fi</Text>
        <Text> Choisissez votre réseau Wi-Fi et entrez son mot de passe.</Text>
        <Text>Envoyer</Text>
        <Text onPress={()=> navigation.navigate("AccessPScreen")} style={{marginTop:'50px'}}> Precedant</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#03AC13',
    }
})


export default WifiScreen;