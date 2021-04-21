import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function VoltageScreen({navigation}) {
    return (
        <View style={styles.container}>  
        <Text style={{padding:'10px',borderBottomWidth:'2px'}}> Voltage maintenant</Text>
        <Text>Voltage Chart</Text>
        <Text onPress={()=> navigation.navigate("CurrentScreen")} style={{marginTop:'50px'}}> Suivant </Text>
        <Text onPress={()=> navigation.navigate("PowerScreen")} > Precedant </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'tomato',
    }
})


export default VoltageScreen;