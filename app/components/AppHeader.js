import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fonts from '../config/fonts';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from 'react/cjs/react.development';

function AppHeader({navigation}) {
  const [showStat, changeShowStat] = useState(false);
    return (
        <View style={styles.header}>

        <TouchableOpacity   onPress={() => navigation.push("WelcomeScreen")}>
        <Text style={styles.headText}><FontAwesome5 name="home" size={20} color="black" /> Accueil</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigation.navigate("OnOffScreen")}>
        <Text style={styles.headText}><Entypo name="switch" size={20} color="black" /> Control</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => changeShowStat(!showStat)}>
        <Text style={styles.headText}><AntDesign name="piechart" size={20} color="black" /> Statistique</Text>
        </TouchableOpacity>
        { (showStat === true) ? (          
        <View style={styles.statChoices} >
        <TouchableOpacity  onPress={() => navigation.navigate("OnOffScreen")}>
        <Text style={styles.itemText}>Energie</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("OnOffScreen")}>
        <Text style={styles.itemText}>Puissance</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("OnOffScreen")}>
        <Text style={styles.itemText}>Voltage</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("OnOffScreen")}>
        <Text style={styles.itemText}>Courant</Text>
        </TouchableOpacity>
        </View>
        ):null}

        </View>

    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        position:'relative',
        top:0,
        left:0,
        paddingBottom:10,
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",
      },
      headText:{
        fontFamily:fonts.RalewayM,
        fontSize:16,
      },
      statChoices:{
        backgroundColor:'tomato',
        height:40,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        position:'relative',
        position:'absolute',
        top:40,
        left:0,
      }
})

export default AppHeader;

