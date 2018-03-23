import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{ children }</Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'balsamiq-sans-regular',
    padding:10
  },
  buttonStyle: {
    width: null,
    alignSelf: 'stretch',
    backgroundColor: '#ddd',
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 5,
  }
}

export {Button};
