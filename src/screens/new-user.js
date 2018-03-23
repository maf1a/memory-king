import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, ContainerDouble, Input } from '../components/common';

// https://docs.expo.io/versions/latest/sdk/imagepicker.html

class NewUser extends Component {
  first() {
    return(
      <View>
        <Input
          placeholder="login"
        />
        <Input
          placeholder="password"
        />
        <Input
          placeholder="repeat password"
        />
        <Input
          placeholder="nickname"
        />
      </View>
    )
  }

  second() {
    return(
      <View style={{marginBottom:-5}}>
        <Button>
          Upload avatar
        </Button>
        <Button>
          Continue
        </Button>
      </View>
    )
  }

  render() {
    return(
      <View style={{flex:1}}>
        <ContainerDouble
          first={() => this.first()}
          second={() => this.second()}
        />
      </View>
    )
  }
}

export default NewUser;
