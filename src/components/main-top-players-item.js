import React from 'react';
import { View, Text, Image } from 'react-native';
import { mainTopPlayersStyle } from '../styles';

const {
  containerListItem,
  listImage,
  listName,
  listStats
} = mainTopPlayersStyle;

const Item = () => {
  return(
    <View style={containerListItem}>
      <Image  style={listImage} source={require('../assets/icons/idea.png')} />
      <View>
        <Text style={listName}>Name</Text>
        <Text style={listStats}>30 of 50</Text>
      </View>
    </View>
  )
}

export default Item;
