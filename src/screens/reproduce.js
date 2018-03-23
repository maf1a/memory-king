import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Input, ContainerDouble } from '../components/common';
import { reproduceStyle } from '../styles';

const { container, header, counter, words, input } = reproduceStyle;

class Reproduce extends Component {
  first() {
    return(
      <View style={container}>
        <Text style={header}>Type in the words:</Text>
        <View style={{width:"100%"}}>
          <Input
            style={input}
            placeholder="e.g. Cat"
            autofocus={true}
          />
        </View>
        <Text style={counter}>10 of 20</Text>
        <Text style={words}>Banana, treasure, king, bankBanana, treasure, king, bankBanana, treasure, king, bankBanana, treasure, king, bank</Text>
      </View>
    )
  }

  second() {
    return(
      <Button>Cancel</Button>
    );
  }

  render() {
    return(
      <View style={{flex:1}}>
        <ContainerDouble
          first={() => this.first()}
          second={() => this.second()}
        />
      </View>
    );
  }
}

export default Reproduce;
