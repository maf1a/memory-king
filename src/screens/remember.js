import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ContainerDouble } from '../components/common';
import { rememberWordStyle } from '../styles';
import Word from '../components/remember-word';

class Remember extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <ContainerDouble
          first={
            <View style={rememberWordStyle.container}>
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
              <Word />
            </View>
          }
          second={
            <View style={rememberWordStyle.clockContainer}>
              <Image style={rememberWordStyle.clockIcon} source={require('../assets/icons/alarm-clock.png')} />
              <Text style={rememberWordStyle.clockTime}>23</Text>
            </View>
          }
          stylesFirst={{flexDirection:'row', alignItems:'flex-start'}}
        />
      </View>
    );
  }
}

export default Remember;
