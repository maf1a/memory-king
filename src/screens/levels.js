import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import LevelListItem from '../components/level-list-item';
import { levelsStyle } from '../styles';

const { list } = levelsStyle;

class Levels extends Component {
  render() {
    return(
      <View style={{flex:1}}>
        <ScrollView style={list}>
          <LevelListItem />
        </ScrollView>
      </View>
    );
  }
}

export default Levels;
