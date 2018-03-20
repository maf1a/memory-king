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
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
    marginBottom: 10
  },
  textStyle: {
    fontSize: 20,
    padding: 10,
    fontWeight: '600'
  }
}

export { Header };
