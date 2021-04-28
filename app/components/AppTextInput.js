import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";

function AppTextInput({ password, onChangePass }) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      onChange={onChangePass}
      style={styles.password}
      placeholder="MOT DE PASSE"
      value={password}
    />
  );
}

const styles = StyleSheet.create({
  password: {
    height: 50,
    width: 300,
    marginTop: 10,
    paddingLeft: 12,
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

export default AppTextInput;
