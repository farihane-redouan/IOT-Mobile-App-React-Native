import React from "react";
import { Text, StyleSheet} from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";

function AppText({children,style}) {
  

    return <Text style={[styles.text,style]}>{children}</Text>;
  
}
const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        position: "absolute",
        top: 250,
        fontFamily:fonts.RalewayL,
        color:colors.black,
        width:'98%',
        textAlign:'center',
    },
});

export default AppText;
