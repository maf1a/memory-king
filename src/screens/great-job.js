import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Button, ContainerDouble } from '../components/common';
import { greatJobStyle } from '../styles';

const { container, text, image } = greatJobStyle;

class GreatJob extends Component {

  render() {
    return(
      <View style={{flex:1}}>
        <ContainerDouble
          first={
            <View style={container}>
              <Text style={text}>Level 7 unlocked!</Text>
              <Image style={image} source={require('../assets/icons/confetti.png')} />
            </View>
          }
          second={
            <View>
              <Button>Continue</Button>
              <Button>Share on facebook</Button>
            </View>
          }
          stylesFirst={{alignItems:'center',justifyContent:'center'}}
        />
      </View>
    )
  }
}

export default GreatJob;
