import React from 'react';
import { View } from 'react-native';
import Logo from '../components/logo';
import { Spinner, Button, BottomContainer } from '../components/common';
import { fullScreen, containerDouble } from '../styles';

const WelcomeScreen = () => {
  return(
    <View style={[fullScreen, containerDouble]}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <BottomContainer>
        <Button>
          Log in with email
        </Button>
        <Button>
          Log in with facebook
        </Button>
        <Button>
          Create new account
        </Button>
      </BottomContainer>
    </View>
  )
};

const styles = {
  logoContainer: {
    flex:1,
    justifyContent:'space-around'
  }
};

export default WelcomeScreen;
