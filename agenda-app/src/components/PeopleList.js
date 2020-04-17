import React from 'react';
import { ScrollView, StyleSheet,FlatList } from 'react-native';

import PeopleListItem from './PeopleListItem';


const PeopleList = props => {

const {peoples, navigate} = props;




  return (
    <FlatList
    data={peoples}
    keyExtractor={item => item.login.uuid}
    renderItem={ ({item}) => (
    <PeopleListItem  people={item} onPressItem={navigate} />
    )}/>
  );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#e2f9ff',
    }
})
export default PeopleList;