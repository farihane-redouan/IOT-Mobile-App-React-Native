import React from 'react';

//import OnOffScreen from './app/OnOffScreen';
//import LoginForm from './app/LoginForm'
//import MyCharts from './app/MyCharts';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import WelcomeScreen from './app/screens/WelcomeScreen';
import PlugingScreen from './app/screens/PlugingScreen';
import ConnectScreen from './app/screens/ConnectScreen';
import AccessPScreen from './app/screens/AccessPScreen';
import WifiScreen from './app/screens/WifiScreen';
import OnOffScreen from './app/screens/OnOffScreen';
import EnergyScreen from './app/screens/EnergyScreen';
import PowerScreen from './app/screens/PowerScreen';
import VoltageScreen from './app/screens/VoltageScreen';
import CurrentScreen from './app/screens/CurrentScreen';
import TestScreen from './app/screens/TestScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="TestScreen">
    <Stack.Screen name="TestScreen" component={TestScreen}/>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
    <Stack.Screen name="PlugingScreen" component={PlugingScreen}/>
    <Stack.Screen name="ConnectScreen" component={ConnectScreen}/>
    <Stack.Screen name="AccessPScreen" component={AccessPScreen}/>
    <Stack.Screen name="WifiScreen" component={WifiScreen}/>
    <Stack.Screen name="OnOffScreen" component={OnOffScreen}/>
    <Stack.Screen name="EnergyScreen" component={EnergyScreen}/>
    <Stack.Screen name="PowerScreen" component={PowerScreen}/>
    <Stack.Screen name="VoltageScreen" component={VoltageScreen}/>
    <Stack.Screen name="CurrentScreen" component={CurrentScreen}/>
  </Stack.Navigator>
);

/*
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Etape 1"
     component={LoginForm}
     options={{title: ""}} />
    <Stack.Screen 
    name="Etape 2" 
    component={OnOffScreen} 
    options={{title: ""}} />
    <Stack.Screen 
    name="Etape 3" 
    component={MyCharts} 
    options={{title: ""}} />
  </Stack.Navigator>
);

const App = () => {
  return (
     <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
*/

const App = () => {
  return (
    <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
  );
};
  
export default App;