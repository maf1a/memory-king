import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, ContainerDouble, Input } from '../components/common';

class Login extends Component {
  first() {
    return(
      <View>
        <Input
          placeholder="login"
        />
        <Input
          placeholder="password"
        />
      </View>
    )
  }

  second() {
    return(
      <View style={{marginBottom:-5}}>
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

export default Login;
