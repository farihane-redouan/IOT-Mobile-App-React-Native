import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function EnergyScreen({navigation}) {
    return (
        <View style={styles.container}>  
        <Text style={{padding:'10px',borderBottomWidth:'2px'}}> Energie maintenant</Text>
        <Text>Energy Chart</Text>
        <Text onPress={()=> navigation.navigate("PowerScreen")} style={{marginTop:'50px'}}> Suivant </Text>
        <Text onPress={()=> navigation.navigate("OnOffScreen")} > Precedant </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#29AB87',
    }
})


export default EnergyScreen;