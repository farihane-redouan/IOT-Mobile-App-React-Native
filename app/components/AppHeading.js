import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import colors from '../config/colors';
import fonts from '../config/fonts';

function AppHeading({children}) { 
        return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        position: "absolute",
        top: 150,
        fontFamily:fonts.RalewayL,
        color:colors.black,
        textAlign:'center',
    },
    
})

export default AppHeading;