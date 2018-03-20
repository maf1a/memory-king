import React from 'react';
import { View, Image, Text } from 'react-native';
import { Spinner } from '../components/common';
import Logo from '../components/logo';
import { fullScreen } from '../styles';

const Loader = () => {
  return(
    <View style={fullScreen}>
      <Logo />
      <Spinner style={{marginTop: 30}} size="large" />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default Loader;
