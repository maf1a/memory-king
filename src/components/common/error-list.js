import React from 'react';
import { Text, View } from 'react-native';
import { errorText } from '../../styles';

const ErrorList = ({ errors, show }) => {
  return (
    <View style={errorText.container}>
      {show && errors.map(e => <Text style={errorText.text} key={e}>{e}</Text>)}
    </View>
  )
};

export { ErrorList };
