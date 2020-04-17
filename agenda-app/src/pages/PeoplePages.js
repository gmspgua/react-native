import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios'
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      peoples: [],
      loading: true,
      error: false, 
      mensagem: "",
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      
    axios.get('https://randomuser.me/api/?nat=BR&results=15')
    .then(response =>{
      const {results} = response.data;
      this.setState({
        peoples:results,
        loading: false

      });
    }).catch(error => {
      console.log(error);
      this.setState({error: true, loading: false, mensagem: "Erro na chamada do serviço."});
    });

    },5000);

  }

  render(){

  return (
    <View style={style.container}>
          {this.state.loading 
          ?
          <View>
             <ActivityIndicator size="large" color="#3646d1"/>  
          </View>
          : this.state.error 
          ?  <Text>{this.state.mensagem}</Text>
          : 
          <PeopleList peoples={this.state.peoples} navigate={(pageParam) => {this.props.navigation.navigate('PeopleDetail', pageParam)}}/>
          }    
  
      </View>  
        
  );
  }

}

const style = StyleSheet.create({
  container:{
      backgroundColor: '#e2f9ff',
      flex: 1,
      justifyContent: 'center'
  }
})

