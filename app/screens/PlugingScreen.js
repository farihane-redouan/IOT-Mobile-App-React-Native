import React from "react";
import { View, StyleSheet, Image } from "react-native";


import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";

import colors from "../config/colors";

function PlugingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <AppHeading>Brancher Smart Plug</AppHeading>
      <AppText>
        Brancher votre Smart Plug. Appuyer sur le button Power On. si la Led
        n'est pas allumer.
      </AppText>
      <View style={styles.imgContainer}>
      <Image style={styles.img} source={require('../assets/Plug.webp')}/>
      </View>
      <AppButton title="suivant" onPress={() => navigation.navigate('AccessPScreen')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  imgContainer:{
    position:'absolute',
    top:400,
    width:'100%',
    height:300,
    alignItems:'center',
  },
  img:{
    width:'70%',
  height:'60%'  },
});

export default PlugingScreen;
