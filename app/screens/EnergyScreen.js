import React from 'react';
import {StyleSheet, View } from 'react-native';
import AppHeader from '../components/AppHeader';
import StatScreen from './StatScreen';

function EnergyScreen({ navigation }) {
  return (
    <View style={styles.container}>

         <AppHeader navigation={navigation} />

      <StatScreen
        navigation={navigation}
        title= 'Energie'
        DataNow= '150J'
        nextScreen= 'PowerScreen'
      />
    </View>
      );
  }
  
  const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    }
  });

export default EnergyScreen;
