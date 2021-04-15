import React from 'react';
import { StyleSheet, View } from 'react-native';
import AChart from './AChart'



function MyCharts(props) {
    return (
        <View style={styles.container}>
        <AChart title="Voltage"/>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    }
})

export default MyCharts;
