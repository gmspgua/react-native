import React from 'react';
import { Text, View, Image , StyleSheet} from 'react-native';

import PeopleLine from '../components/PeopleLine'

export default class PeopleDetailPage extends React.Component{



  render(){


    const { people } = this.props.navigation.state.params;

  return (
        <View style= {style.container}> 
          <Image style= {style.avatar} source={{uri: people.picture.large}} ></Image>
          <View  style= {style.containerText}>
            <PeopleLine label='E-mail:' content={people.email}/>
            <PeopleLine label='Cidade:' content={people.location.city}/>
            <PeopleLine label='Estado:' content={people.location.state}/>
            <PeopleLine label='Tel:' content={people.phone}/>
            <PeopleLine label='Cel:' content={people.cell}/>
            <PeopleLine label='Nacionalidade:' content={people.nat}/>
          </View>
        </View>     
    );
  }
}

const style = StyleSheet.create({
  avatar : {
    aspectRatio: 1,
   // borderRadius: 200,
},
  container: {
   padding: 15,
   backgroundColor: '#abd7e0',
   flex: 1,
  },
  containerText: {
   backgroundColor: '#e2f9ff',
   elevation: 1,
   marginTop:20,
   
  },
  line: {
    flexDirection: 'row',
    borderWidth: 1
  },
  cell: {
    paddingLeft: 5,
    fontSize: 18,
 }

});

