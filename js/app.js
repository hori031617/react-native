import {StackNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';
import Login from './components/screens/login';
import PropertyList from './components/screens/propertyList';
import PropertyDetail from './components/screens/propertyDetail';
import Call from './components/screens/call';
import Setting from './components/screens/setting';

const routes = {
    Login: {
        screen: Login
    },
    PropertyList: {
        screen: PropertyList
    },
    PropertyDetail: {
        screen: PropertyDetail
    },
    Call: {
        screen: Call
    }
};

const options = {
    initialRouteName: 'Login',
    headerMode: 'screen'
};

export default StackNavigator(routes, options);
