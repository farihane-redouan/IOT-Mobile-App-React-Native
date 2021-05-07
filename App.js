import React, { useState } from "react";
import { Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import PlugingScreen from "./app/screens/PlugingScreen";
import ConnectScreen from "./app/screens/ConnectScreen";
import AccessPScreen from "./app/screens/AccessPScreen";
import WifiScreen from "./app/screens/WifiScreen";
import OnOffScreen from "./app//screens/OnOffScreen";
import EnergyScreen from "./app/screens/EnergyScreen";
import PowerScreen from "./app/screens/PowerScreen";
import VoltageScreen from "./app/screens/VoltageScreen";
import CurrentScreen from "./app/screens/CurrentScreen";
import TestScreen from "./app/screens/TestScreen";
import  MyCharts  from "./app/MyCharts";

//Chargement des fonts externs:
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFont = () => {
  return Font.loadAsync({
    RalewayEL: require("./app/assets/fonts/Raleway-ExtraLight.ttf"),
    RalewayM: require("./app/assets/fonts/Raleway-Medium.ttf"),
    RalewayL: require("./app/assets/fonts/Raleway-Light.ttf"),
    Surfer: require("./app/assets/fonts/OriginalSurfer-Regular.ttf"),
  });
};

// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StatScreen from "./app/screens/StatScreen";
import LoginForm from "./app/LoginForm";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="WelcomeScreen"
  >
    <Stack.Screen name="LoginForm" component={LoginForm} />
    <Stack.Screen name="MyCharts" component={MyCharts} />
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="PlugingScreen" component={PlugingScreen} />
    <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
    <Stack.Screen name="AccessPScreen" component={AccessPScreen} />
    <Stack.Screen name="WifiScreen" component={WifiScreen} />
    <Stack.Screen name="OnOffScreen" component={OnOffScreen} />
    <Stack.Screen name="EnergyScreen" component={EnergyScreen} />
    <Stack.Screen name="PowerScreen" component={PowerScreen} />
    <Stack.Screen name="VoltageScreen" component={VoltageScreen} />
    <Stack.Screen name="CurrentScreen" component={CurrentScreen} />
  </Stack.Navigator>
);

const App = () => {
  //S'il y a un problème avec les fonts.
  const [fontLoaded, setfontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={() => console.log("Error")}
        onFinish={() => setfontLoaded(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
