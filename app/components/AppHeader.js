import React,{ useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fonts from '../config/fonts';
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";

function AppHeader({navigation}) {
  const [showStat, changeShowStat] = useState(false);
    return (
        <View style={styles.header}>
        <View style={styles.header1}>
        <TouchableOpacity   onPress={() => navigation.push("WelcomeScreen")}>
        <Text style={styles.headText}><FontAwesome5 name="home" size={20} color="black" /> Accueil</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigation.navigate("OnOffScreen")}>
        <Text style={styles.headText}><Entypo name="switch" size={20} color="black" /> Control</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => changeShowStat(!showStat)} >
        <Text style={styles.headText}>
          <AntDesign name="piechart" size={20} color="black" /> Statistique&nbsp; 
           <AntDesign  name={(showStat)?'caretdown':'caretup'} size={12} color="#000" /></Text>
        
        </TouchableOpacity>
        </View>

        { (showStat === true) ? (          
        <View style={styles.header2}>

        <TouchableOpacity style={styles.listitem}  onPress={() => navigation.navigate("EnergyScreen")}>
        <Text style={styles.itemText}>Energie</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listitem}  onPress={() => navigation.navigate("PowerScreen")}>
        <Text style={styles.itemText}>Puissance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listitem}  onPress={() => navigation.navigate("VoltageScreen")}>
        <Text style={styles.itemText}>Voltage</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listitem}  onPress={() => navigation.navigate("CurrentScreen")}>
        <Text style={styles.itemText}>Courant</Text>
        </TouchableOpacity>

        </View>
        ):null}
        </View>

    );
}

const styles = StyleSheet.create({
    header:{
        zIndex: 10,
        width:'100%',
        flexDirection:'column',
        position:'absolute',
        top:60,
       
      },
      header1:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingBottom:10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      },
      header2:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'baseline',
        backgroundColor:'#ddd',
        width:'35%',
        alignSelf:'flex-end',
       
        
      },
      listitem:{
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        paddingLeft:15,
        paddingVertical:8,
        width:'100%',
      },
      headText:{
        fontFamily:fonts.RalewayM,
        fontSize:16,
      },
      itemText:{
        fontFamily:fonts.RalewayL,
        fontSize:16,
        
      }
})

export default AppHeader;

