
import { createStackNavigator } from 'react-navigation';
import Main from './components/Main/Main';
import Authentication from './components/Authentication/Authentication';

const RootStack = createStackNavigator(
  {
    _main: Main,
    _authentication: Authentication,
  },
  {
    initialRouteName: '_main',
  }
);

export default RootStack;
