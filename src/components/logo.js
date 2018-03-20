import React from 'react';
import { View, Text, Image } from 'react-native';
import { logoText } from '../styles';

const Logo = () => {
  return(
    <View>
      <Image
        style={{alignSelf:'center', height: 150, width: 150}}
        source={require('../assets/icons/idea.png')} />
      <Text style={logoText}>Memory{'\n'}King</Text>
    </View>
  )
}

export default Logo;
