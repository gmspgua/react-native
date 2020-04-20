import React from 'react';
import {View, StyleSheet, TextInput, Button, ActivityIndicator, Text} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import  FormRow  from '../components/FormRow'; 

export default class LoginPage extends  React.Component {

    constructor(props){
        super(props);
        this.state = {
            mail: '',
            password: '',
            authenticating: false,
            message: '',
        }
    }

    componentDidMount(){


        var firebaseConfig = {
            apiKey: "AIzaSyBZtIIeDxMYyAwPTI9ZqjbnuIj53j_PsLo",
            authDomain: "series-e5ead.firebaseapp.com",
            databaseURL: "https://series-e5ead.firebaseio.com",
            projectId: "series-e5ead",
            storageBucket: "series-e5ead.appspot.com",
            messagingSenderId: "252163341549",
            appId: "1:252163341549:web:a18da88fabc08e226d60e4",
            measurementId: "G-SM1MRC0DR1"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
         
    }

    onChangeHandle(field, value){
       this.setState({
        [field] : value,
       });
    }

    tryLogin(){

        this.setState({ authenticating: true, message: '' })

        const {mail, password} = this.state 

        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(user => {
                console.log('usuario autenticado! ', user );
                this.setState({
                    message: ''
                })
            })
            .catch(error =>{
                console.log('usuario incorreto! ', error );  
                this.setState({
                    message: error.message
                });         
            })
            .then(() =>  this.setState({ authenticating: false }))
     }

     onMessageError(){
        if(!this.state.message)
        return null

        return <Text>{this.state.message}</Text>
     }

render(){
    return(
        <View style={styles.container}>
            <FormRow>
                <TextInput  
                    style={styles.input}
                    placeholder="user@email.com"
                    value = {this.state.mail}
                    onChangeText = {value => this.onChangeHandle('mail', value)}/>
            </FormRow>
            <FormRow>
                <TextInput 
                    style={styles.input}
                    placeholder= "******"
                    secureTextEntry={true}
                    value = {this.state.password}
                    onChangeText
                     = {value => this.onChangeHandle('password', value)}/>
            </FormRow>
            {this.state.authenticating 
            ?
            <ActivityIndicator size="large" color="#3646d1"/>
            :
            <Button 
                title="Entrar"
                onPress={() => this.tryLogin()}/>
            }
            {this.onMessageError()}
          
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