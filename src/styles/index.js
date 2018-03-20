import { Dimensions, Platform } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const fullScreen = {
  paddingTop:25,
  alignItems: 'center',
  justifyContent: 'center',
  flex:1
}

export const fullScreenHeader = {
  flex:1,
  paddingTop:25
}

export const logoText = {
  textAlign: 'center',
  fontSize: 35,
  marginTop: 30
};

export const containerDouble = {
  justifyContent:'space-between',
  paddingBottom: 10
}
