import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { mainHeaderStyle } from '../styles';

class MainHeader extends Component {
  render() {

    const {
      container,
      containerMiddle,
      containerText,
      containerImage,
      image,
      name,
      points,
      percentage,
      playButton,
      playButtonText
    } = mainHeaderStyle;

    return(
      <View style={container}>
        <View style={containerMiddle}>
          <View style={containerImage}>
            <Image style={image} source={require('../assets/icons/idea.png')} />
          </View>
          <View style={containerText}>
            <Text style={name}>John</Text>
            <Text style={points}>20 of 50</Text>
            <Text style={percentage}>50% correct</Text>
          </View>
        </View>
        <TouchableOpacity style={playButton}>
          <Text style={playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default MainHeader;
