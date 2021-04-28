import React from 'react';
import StatScreen from './StatScreen';

function VoltageScreen({navigation}) {
    return (
            <StatScreen
            navigation={navigation}
            title="Voltage"
            DataNow="100V"
            nextScreen="CurrentScreen"
            previousScreen="PowerScreen"
          />
    );
}

export default VoltageScreen;