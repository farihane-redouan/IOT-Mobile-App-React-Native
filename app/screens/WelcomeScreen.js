import React from "react";
import { Text, View, StyleSheet, Image ,ActivityIndicator, TouchableOpacity} from "react-native";

import AppControl from "../components/AppControl";
import colors from "../config/colors";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";
import AppButton from "../components/AppButton";
import fonts from "../config/fonts";


function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View  style={styles.logoContainer}>
      <Image source={require('../assets/logo.png')}/>
      <Text style={styles.logoDescription}>Plateforme de recherche et de formation en énergies solaires</Text>
      </View>

      <View style={styles.control}>
      <TouchableOpacity style={styles.Done}  onPress={() => navigation.push("OnOffScreen")}>
      <Text style={styles.BtnText}> Config est faite</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.Done,{backgroundColor:'#d00'}]}  onPress={() => navigation.navigate("PlugingScreen")}>
      <Text style={[styles.BtnText, {color:'#fff'}]}>Pas encore</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    justifyContent:'center',
    alignItems:'center'
  },
   logoContainer:{
    position:"absolute",
    top:100,
    alignItems:'center'
   },
   logoDescription:{
     color:colors.logoText,
     textAlign:'center',
     fontFamily:'RalewayL',
     paddingTop:10,
     fontSize:15,
     width:200,
   },
   control:{
     height:150,
     width:'100%',
     position:'absolute',
     top:500,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center'
   },
   Done:{
    backgroundColor:'#0e0',
        borderRadius:15,
        padding:8,
        width:170,
        marginBottom:10,
   },
   BtnText:{
    color:colors.black,
    fontSize:14,
    textAlign:'center',
    fontFamily:fonts.RalewayM,
    textTransform:'uppercase',
   }

});

export default WelcomeScreen;
