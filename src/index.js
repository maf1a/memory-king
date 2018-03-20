import React from 'react';
import { Text, View } from 'react-native';

import Loader from './screens/loader';
import WelcomeScreen from './screens/welcome-screen';
import LoginForm from './screens/login-form';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <LoginForm />
      </View>
    );
  }
}
