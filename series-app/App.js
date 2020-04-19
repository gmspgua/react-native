import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import  LoginPage  from './src/pages/LoginScreen';


const AppNAvigator = createStackNavigator({

    Login: {
        screen: LoginPage,
        navigationOptions: {
         // title: 'Bem vindo!',
        }

    }
    },{
      defaultNavigationOptions: {
      title: 'Series!',
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

const AppContainer = createAppContainer(AppNAvigator);

export default AppContainer;