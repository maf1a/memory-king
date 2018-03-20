import React from 'react';
import { View } from 'react-native';

const BottomContainer = ({ children }) => {
  return(
    <View style={styles.container}>
      {children}
    </View>
  )
};

const styles = {
  container: {
    alignSelf:"flex-end"
  }
}

export {BottomContainer}
