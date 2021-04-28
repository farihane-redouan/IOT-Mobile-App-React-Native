import React from "react";
import { Text, View, StyleSheet, Image ,ActivityIndicator} from "react-native";

import AppControl from "../components/AppControl";
import colors from "../config/colors";


function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View  style={styles.logoContainer}>
      <Image source={require('../assets/logo.png')}/>
      <Text style={styles.logoDescription}>Plateforme de recherche et de formation en énergies solaires</Text>
      </View>
      <ActivityIndicator style={styles.loading} size="large" color="#999999" animating={true}/>
      <AppControl navigation={navigation} nextScreen="OnOffScreen" previousScreen="PlugingScreen" />
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
  loading:{
    position:'absolute',
    top:500,
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

   }
});

export default WelcomeScreen;
