import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container : {
        marginTop: 25,
        backgroundColor: '#a9e3a8',
    
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    title : {
        fontSize : 50,
        color: '#fff'
    }

})

const Header = (props) => (
<View style={style.container}>
<Text style={style.title}>{props.title}</Text>
</View>
);

export default Header;