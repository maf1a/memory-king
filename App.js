import React, { Component } from 'react';
import { View } from 'react-native';
import Router from './src/router';
import { Font } from 'expo';

import { Provider } from  'react-redux';
import store from './src/store';

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    await Font.loadAsync({
      'balsamiq-sans-regular': require('./src/assets/fonts/BalsamiqSansRegular.ttf'),
      'balsamiq-sans-italic': require('./src/assets/fonts/BalsamiqSansItalic.ttf'),
      'balsamiq-sans-bold': require('./src/assets/fonts/BalsamiqSansBold.ttf'),
    });

    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          {this.state.fontLoaded && <Router />}
        </View>
      </Provider>
    );
  }
}
