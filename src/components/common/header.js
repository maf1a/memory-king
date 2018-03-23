import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    elevation: 2,
    marginTop: 25
  },
  textStyle: {
    fontSize: 25,
    padding: 10,
    fontFamily: 'balsamiq-sans-regular'
  }
}

export { Header };
