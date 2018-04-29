import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Profile from './Profile';


const RootStack = StackNavigator({
  Login: { screen: Login },
  Profile: { screen: Profile }
})

export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
}
