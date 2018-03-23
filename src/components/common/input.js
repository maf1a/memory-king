import React from 'react';
import { TextInput, View, Text, Dimensions } from  'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width

const Input = ({ label, value, onchangeText, autocorrect,
  placeholder, secureTextEntry, style, autofocus }) => {

  const { inputStyle, containerStyle } = styles;
  return(
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        autocorrect={autocorrect}
        style={[inputStyle, style && style]}
        onChangeText={ onchangeText }
        value={value}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#aaa"
        autofocus={autofocus}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    width: '100%',
    fontSize: 25,
    padding: 15,
    fontFamily:'balsamiq-sans-regular'
  },
  containerStyle: {

  }
}

export { Input };
