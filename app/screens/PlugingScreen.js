import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function PlugingScreen({navigation}) {
    return (
        <View style={styles.container}>  

        <Text> Brancher Smart Plug</Text>
        <Text> Brancher votre Smart Plug. Appuyer sur le button Power On. si le Led n'est pas allumer.</Text>
     
        <Text onPress={()=> navigation.navigate("ConnectScreen")} style={{marginTop:'50px'}}> Suivant</Text>
        <Text onPress={()=> navigation.navigate("WelcomeScreen")} > Precedant</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'tomato',
    }
})


export default PlugingScreen;