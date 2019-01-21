import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigation from './AppNavigation';

// StatusBar.setHidden(true);
const AppContainer = createAppContainer(AppNavigation);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
