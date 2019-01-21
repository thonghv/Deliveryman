
import { createDrawerNavigator } from 'react-navigation';
import Main from './components/main/Main';


const AppNavigation = createDrawerNavigator(
  {
    Main: { screen: Main }
  },
  {
    initialRouteName: 'Main',
  }
);

export default AppNavigation;
