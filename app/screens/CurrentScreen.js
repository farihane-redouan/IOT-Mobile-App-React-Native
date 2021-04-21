import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

function CurrentScreen({navigation}) {
    return (
        <View style={styles.container}>  
        <Text style={{padding:'10px',borderBottomWidth:'2px'}}> Courant maintenant</Text>
        <Text>Courant Chart</Text>
        <Text onPress={()=> navigation.navigate("VoltageScreen")} style={{marginTop:'50px'}}> Precedant </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#679267',
    }
})


export default CurrentScreen;