import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function PowerScreen({navigation}) {
    return (
        <View style={styles.container}>  
        <Text style={{padding:'10px',borderBottomWidth:'2px'}}> Power  maintenant</Text>
        <Text> Power Chart</Text>
        <Text onPress={()=> navigation.navigate("VoltageScreen")} style={{marginTop:'50px'}}> Suivant</Text>
        <Text onPress={()=> navigation.navigate("EnergyScreen")} > Precedant</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#98FB98',
    }
})


export default PowerScreen;