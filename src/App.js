import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Router from './Router';

StatusBar.setHidden(true);
const AppContainer = createAppContainer(Router);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
