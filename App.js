import React, { Component } from 'react';
import { View } from 'react-native'
import Index from './src';
import { Font } from 'expo';

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
      <View style={{flex:1}}>
        {this.state.fontLoaded && <Index />}
      </View>
    );
  }
}
