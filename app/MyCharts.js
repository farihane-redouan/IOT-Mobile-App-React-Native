import React from 'react';
import { StyleSheet, View } from 'react-native';
import AChart from './AChart'


function MyCharts(props) {
    return (
        <View style={styles.container}>
        <AChart title="Voltage"/>
        <AChart title="Courant"/>
        <AChart title="Energie"/>
        <AChart title="Puissance"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    }
})

export default MyCharts;
