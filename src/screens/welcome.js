import React, { Component } from 'react';
import { View } from 'react-native';
import Logo from '../components/logo';
import { Button, ContainerDouble } from '../components/common';

class WelcomeScreen extends Component {

  render() {
    return(
      <View style={{flex:1}}>
        <ContainerDouble
          first={
            <Logo />
          }
          second={
            <View style={{marginBottom:-5}}>
              <Button>
                Log in with email
              </Button>
              <Button>
                Log in with facebook
              </Button>
              <Button>
                Create new account
              </Button>
            </View>
          }
          stylesFirst={{justifyContent:'space-around'}}
        />
      </View>
    )
  }
}

export default WelcomeScreen;
