import { StyleSheet, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

import React from "react";
import fonts from "../config/fonts";

function AppTable({tableHead, tableData}) {

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.textH}
        />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
}

export default AppTable;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: "#fff" , width:'100%'},
  head: { height: 60, backgroundColor: "#f1f8ff" },
  textH: { margin: 6, fontFamily:fonts.RalewayM },
  text: { margin: 6, fontFamily:fonts.RalewayL },
});
