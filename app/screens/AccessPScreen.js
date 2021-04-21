import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function AccessPScreen({navigation}) {
    return (
        <View style={styles.container}>  
        <Text> Le prise est  détecté</Text>
        <Text> Connectez-vous au wi-fi de l'appareil, puis revenez à l'application</Text>
        <Text>ESP Wi-Fi</Text>
        <Text>Suivant</Text>
        <Text onPress={()=> navigation.navigate("WifiScreen")} style={{marginTop:'50px'}}> Suivant</Text>
        <Text onPress={()=> navigation.navigate("ConnectScreen")} > Precedant</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'olive',
    }
})


export default AccessPScreen;