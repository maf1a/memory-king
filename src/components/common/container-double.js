import React from 'react';
import { View, Text } from 'react-native';

const ContainerDouble = ({ first, second, stylesFirst, stylesSecond }) => {
  return (
    <View style={styles.main}>
      <View style={[styles.first, stylesFirst && stylesFirst]}>
        {first}
      </View>
      <View style={[styles.second, stylesSecond && stylesSecond]}>
        {second}
      </View>
    </View>
  )
}

const styles = {
  main: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15
  },
  first: {
    flex:1,
    marginBottom:15
  },
  second: {
    justifyContent: 'flex-end'
  }
}

export { ContainerDouble };
