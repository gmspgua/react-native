import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const AppNAvigator = createStackNavigator({

    Login: {
        screen: LoginScreen
    },
});

const AppContainer = createAppContainer(AppNAvigator);

export default AppContainer;