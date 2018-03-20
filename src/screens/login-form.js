import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Input, Header, Button, BottomContainer } from '../components/common';
import { fullScreenHeader, containerDouble } from '../styles';

class LoginForm extends Component {
  render() {
    return(
      <View style={fullScreenHeader}>
        <Header headerText="Log in" />
        <View style={[containerDouble, styles.container]}>
          <View>
            <Input
              placeholder="Login"
            />
            <Input
              placeholder="Password"
            />
          </View>

          <BottomContainer>
            <Button>
              Continue
            </Button>
            <Button>
              Sign Up
            </Button>
          </BottomContainer>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
}

export default LoginForm;
