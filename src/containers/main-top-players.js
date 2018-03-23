import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { mainTopPlayersStyle } from '../styles';
import Item from '../components/main-top-players-item';

const {
  container,
  headerContainer,
  headerText,
  headerLogo,
  containerList
} = mainTopPlayersStyle;

class MainTopPlayers extends Component {
  render() {
    return(
      <ScrollView style={container}>
        <View style={headerContainer}>
          <Image style={headerLogo} source={require('../assets/icons/podium.png')} />
          <Text style={headerText}>Top players</Text>
        </View>
        <View style={containerList}>
          <Item />
        </View>
      </ScrollView>
    );
  }
}

export default MainTopPlayers;
