import React from 'react';
import { TextInput, View, Text, Dimensions } from  'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width

const Input = ({ label, value, onchangeText, autocorrect,
  placeholder, secureTextEntry }) => {

  const { inputStyle, containerStyle } = styles;
  return(
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        autocorrect={autocorrect}
        style={inputStyle}
        onChangeText={ onchangeText }
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    width: SCREEN_WIDTH - 30,
    fontSize: 21,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  containerStyle: {

  }
}

export { Input };
