import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function OnOffScreen({navigation}) {
    return (
        <View style={styles.container}>  
        <Text> On Off button</Text>
        <Text> Date (j/m) | Durée (h)</Text>
        <Text>      14/05   |   20</Text>
        <Text>      14/05   |   20</Text>
        <Text>      14/05   |   20</Text>
        <Text>      14/05   |   20</Text>
        <Text>Statistiques</Text>
        <Text onPress={()=> navigation.navigate("EnergyScreen")} style={{marginTop:'50px'}}> Suivant </Text>
        <Text onPress={()=> navigation.navigate("WelcomeScreen")} > Precedant </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#B2D3C2',
    }
})


export default OnOffScreen;