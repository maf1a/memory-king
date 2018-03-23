import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { logoStyle } from '../styles';

export default Logo = () => {
  return (
    <View style={logoStyle.container}>
      <Image style={logoStyle.image} source={require('../assets/icons/idea.png')} />
      <Text style={logoStyle.text}>Memory{'\n'}King</Text>
    </View>
  )
}
