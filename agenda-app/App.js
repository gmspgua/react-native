import{createAppContainer } from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';



import PeoplePage from './src/pages/PeoplePages'
import  PeopleDetailPage from './src/pages/PeopleDetailPage';

import {capitalizeFirstLetter} from './src/util'

const AppNavigator = createStackNavigator({
  Main: {
    screen : PeoplePage
  } ,
  PeopleDetail: {
    screen : PeopleDetailPage,
    navigationOptions : ({navigation}) => {
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first) ;
      return ({
        title: peopleName,
        fontSize : 30,
    });
      
    }
  } 
},{
  defaultNavigationOptions:{
      title: 'Pessoas!',
      headerTintColor: 'white',
      headerStyle: {
          backgroundColor: '#3646d1',
          borderBottomWidth: 1,
          borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle:{
          fontSize : 30,
          color: '#fff',
          flexGrow: 1,
          textAlign: 'center',
      }

    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;