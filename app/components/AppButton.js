import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import fonts from '../config/fonts';

function AppButton({title, onPress,style,styleText}) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.title,styleText]} >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.btnColor,
        borderRadius:15,
        padding:8,
        width:170,
        position: "absolute",
        top:650,
    },
    title:{
        color:colors.black,
        fontSize:18,
        textAlign:'center',
        fontFamily:fonts.RalewayL,
        textTransform:'uppercase',
    }
})

export default AppButton;