import React, { Component } from 'react';
import { View } from 'react-native';
import Logo from '../components/logo';
import { Spinner } from '../components/common';
import { loaderStyle } from '../styles';

const Loader = () => {
  return(
    <View style={loaderStyle.container}>
      <Logo />
      <Spinner style={loaderStyle.spinner} size="large" />
    </View>
  )
}

export default Loader;
