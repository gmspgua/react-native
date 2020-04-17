import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import {capitalizeFirstLetter}  from '../util'



const PeopleListItem = props => {
    const {people, onPressItem} = props;
    const {title, first, last} = people.name;
        return (
       <TouchableOpacity onPress = {() => {onPressItem({people})}}>     
        <View key={first} style = {style.line}>
            <Image style= {style.avatar} source={{uri: people.picture.thumbnail}} ></Image>
            <Text  style = {style.lineText}>
                {`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
            </Text>
        </View>
        </TouchableOpacity>
        );
      

}    

const style = StyleSheet.create({
    line : {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7,
    },
    avatar : {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
})

export default PeopleListItem;