import React from "react";
import StatScreen from "./StatScreen";

function PowerScreen({ navigation }) {
  return (
    <StatScreen
      navigation={navigation}
      title="Puissance"
      DataNow="150Watt"
      nextScreen="VoltageScreen"
      previousScreen="EnergyScreen"
    />
  );
}

export default PowerScreen;
