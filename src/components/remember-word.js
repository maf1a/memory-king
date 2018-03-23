import React from 'react';
import { Text, View } from 'react-native';
import { rememberWordStyle } from '../styles';

const { containerWord, word } = rememberWordStyle;

const Word = () => {
  return (
    <View style={containerWord}>
      <Text style={word}>word1</Text>
    </View>
  );
}

export default Word;
