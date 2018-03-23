import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, ContainerDouble } from '../components/common';
import { goodTryStyle } from '../styles';

const { container, counter, percentage, missedHeader, missedWords } = goodTryStyle;

class GoodTry extends Component {
  first() {
    return(
      <View style={container}>
        <Text style={counter}>6 of 10</Text>
        <Text style={percentage}>66% correct</Text>
        <Text style={missedHeader}>Missed:</Text>
        <Text style={missedWords}>Banana, treasure, king, bankBanana, treasure, king, bankBanana, treasure, king, bankBanana, treasure, king, bank</Text>
      </View>
    )
  }

  second() {
    return(
      <View>
        <Button>Play again</Button>
        <Button>Choose another level</Button>
      </View>
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

export default GoodTry;
