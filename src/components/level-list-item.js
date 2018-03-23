import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { levelsStyle } from '../styles';

const { containerItem, containerLock, lock, level, containerWord, wordText } = levelsStyle;

const LevelListItem = () => {
  return(
    <TouchableOpacity style={containerItem}>
      <View style={containerLock}>
        <Image style={lock} source={require('../assets/icons/lock.png')} />
      </View>
      <Text style={level}>1</Text>
      <View style={containerWord}>
        <Text style={wordText}>3 words</Text>
      </View>
    </TouchableOpacity>
  )
}

export default LevelListItem;
