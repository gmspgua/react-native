import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';



const PeopleLine = ({label = "", content = ""}) => {

    return(
    <View style= {style.line}>
        <Text style= {[style.cell, style.cellLabel, (label.length > 8) ? style.cellLabelLong : null]}>{label}</Text> 
        <Text style= {[style.cell, style.cellContent]}>{content}</Text> 
    </View>
    )
}

const style = StyleSheet.create({
    line: {
      flexDirection: 'row',
      borderWidth: 1
    },
    cell: {
      paddingLeft: 5,
      fontSize: 18,
   },
   cellLabel: {
    paddingLeft: 5,
    fontSize: 15,
    flex: 2,
    fontWeight: 'bold'
 },
 cellContent: {
  paddingLeft: 5,
  fontSize: 15,
  flex: 4,
},
cellLabelLong: {
    fontSize: 14,
}
  
  });

export default PeopleLine;