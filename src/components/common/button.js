import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width

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
    color: '#007aaf',
    fontSize: 21,
    fontWeight: '600',
    padding:15
  },
  buttonStyle: {
    width: SCREEN_WIDTH - 30,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aaf',
    marginVertical: 5,
    marginHorizontal: 15
  }
}

export {Button};
