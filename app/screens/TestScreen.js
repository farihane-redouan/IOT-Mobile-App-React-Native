import React from "react";
import { StyleSheet } from "react-native";
import AppTable from "../components/AppTable";

function TestScreen(props) {

  const Data = {
    tableHead: ["Head1", "Head2", "Head3", "Head4"],
    tableData: [
      ["1", "2", "3", "4"],
      ["a", "b", "c", "d"],
      ["1", "2", "3", "456\n789"],
      ["a", "b", "c", "d"],
    ],
  };
  
  return (
    <AppTable tableHead={Data.tableHead} tableData={Data.tableData}/>
  );
}

const styles = StyleSheet.create({
 
  
})

export default TestScreen;
