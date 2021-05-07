import React from "react";
import {
  Picker,
  StyleSheet,
  View,
} from "react-native";
import colors from "../config/colors";

function SSIDPicker({SSID,setSSID,password,onChangePass}) {
  
  const SSIDArray = ["SSIDSSID1", "SSIDSSID2", "SSIDSSID3", "SSIDSSID4"];

  return (
    <View style={styles.container}>
          <Picker selectedValue={SSID} onValueChange={setSSID} mode="dialog">
            {SSIDArray.map((ssid, k) => (
              <Picker.Item key={k} label={ssid} value={ssid} />
            ))}
          </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 400,
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default SSIDPicker;
