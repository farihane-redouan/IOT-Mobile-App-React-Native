import React from 'react';
import StatScreen from './StatScreen';

function CurrentScreen({navigation}) {
    return (
        <StatScreen
        navigation={navigation}
        title="Courant"
        DataNow="100mA"
        previousScreen="VoltageScreen"
      />
    );
}




export default CurrentScreen;