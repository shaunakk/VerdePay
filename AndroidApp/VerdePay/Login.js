import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {  AuthSession } from 'expo';
import Profile from './Profile';


function toQueryString(params) {
  return '?' + Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: null,
      loggedIn: false
    }
  }
  handleLogin = () => {
    const { navigate } = this.props.navigation;
    if(this.state.loggedIn) {
      navigate('Profile');
    } else {
      return;
    }
  }

  componentDidMount() {
    if(this.state.loggedIn){
      navigate('Profile')
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <Text>Veridium</Text>
        <Button title="Login with PayPal" onPress={this.login} />
      </View>
    );
  }

  login = async () => {
    const { navigate } = this.props.navigation;
    const redirectUrl = AuthSession.getRedirectUrl();
    const result = await AuthSession.startAsync({
      authUrl: `https://verdepay.auth0.com/authorize` + toQueryString({
      client_id: '6G6tUMTDTEAlWivQFYiL5S4a9WemPzYf',
      response_type: 'token',
      scope: 'openid profile',
      redirect_uri: redirectUrl,
    }),
    });
    this.setState({
      accessToken: result.params.access_token,
      loggedIn: true
    });

    console.log(this.state)
    navigate('Profile')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
