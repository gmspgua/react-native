import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import  FormRow  from '../components/FormRow'

export default class LoginPage extends  React.Component {

    constructor(props){
        super(props);
        this.state = {
            mail: '',
            password: '',
        }
    }

    onChangeHandle(field, value){
       this.setState({
        [field] : value,
       });
    }

render(){
    return(
        <View style={styles.container}>
            <FormRow>
                <TextInput  
                    style={styles.input}
                    placeholder="user@email.com"
                    value = {this.state.mail}
                    onChange = {value => this.onChangeHandle('mail', value)}/>
            </FormRow>
            <FormRow>
                <TextInput 
                    style={styles.input}
                    placeholder= "******"
                    secureTextEntry={true}
                    value = {this.state.password}
                    onChange = {value => this.onChangeHandle('password', value)}/>
            </FormRow>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d2cfd4',
        flex: 1,
    },
    input : {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
    }
  })