import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import MainHeader from '../containers/main-header';
import MainTopPlayers from '../containers/main-top-players';

class Main extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <MainHeader />
        <MainTopPlayers />
      </View>
    );
  }
}

export default Main;
