import React from "react";

import StatScreen from "./StatScreen";

function EnergyScreen({ navigation }) {
  return (
      <StatScreen
        navigation={navigation}
        title= 'Energie'
        DataNow= '150J'
        nextScreen= 'PowerScreen'
      />
    
  );
}

export default EnergyScreen;
