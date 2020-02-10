import React, {Component} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/pages/Home';
import CreateSubmission from './src/pages/CreateSubmission';

export default class App extends Component {
  render () {
    return (
    <AppContainer />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStackNavigator = createStackNavigator({
  Home: Home,
  CreateSubmission: CreateSubmission,
});

const AppContainer = createAppContainer(AppStackNavigator);