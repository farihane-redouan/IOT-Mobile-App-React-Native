import React, { useState } from 'react';

import OnOffScreen from './app/OnOffScreen';
import LoginForm from './app/LoginForm'
import MyCharts from './app/MyCharts';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Etape 1" component={LoginForm} />
    <Stack.Screen name="Etape 2" component={OnOffScreen} />
    <Stack.Screen name="Etape 3" component={MyCharts} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
