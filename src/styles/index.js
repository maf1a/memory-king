

export const centerFlex = {
  flex:1,
  alignItems: 'center',
  justifyContent: 'center'
}

export const logoStyle = {
  container: [centerFlex, {
    flex:0
  }],
  image: {
    height: 125,
    width: 125
  },
  text: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 45
  }
};

export const loaderStyle = {
  container: [centerFlex, {
    marginTop: 25
  }],
  spinner: {
    marginTop:30
  }
};

export const mainHeaderStyle = {
  container: {
    paddingBottom: 20,
    paddingTop: 45,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderBottomWidth: 0,
    borderBottomColor: 'black',
    elevation: 8,
    width: '100%',
    backgroundColor: 'white'
  },
  containerMiddle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerImage: {
    borderRadius: 10,
    elevation: 6,
    backgroundColor: 'white'
  },
  image: {
    height: 80,
    width: 80,
  },
  name: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 29
  },
  points: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 17
  },
  percentage: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 17
  },
  playButton: {
    paddingVertical: 10,
    width: '100%',
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  playButtonText: {
    fontFamily: 'balsamiq-sans-bold',
    fontSize: 27,
    textAlign: 'center',
  }
};

export const mainTopPlayersStyle = {
  container: {
    padding: 15
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop:15
  },
  headerText: {
    fontFamily: 'balsamiq-sans-bold',
    fontSize: 20,
  },
  headerLogo: {
    marginRight: 15,
    height: 30,
    width: 30
  },
  containerList: {

  },
  containerListItem: {
    flexDirection: 'row',
    marginVertical: 7.5,
    alignItems: 'center'
  },
  listImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  listName: {
    fontFamily: 'balsamiq-sans-bold',
    fontSize: 15
  },
  listStats: {
    fontFamily: 'balsamiq-sans-regular',
  }
};

export const rememberWordStyle = {
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  containerWord: {
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor:'white',
    margin: 5,
  },
  word: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 20,
    paddingHorizontal: 5
  },

  clockContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clockIcon: {
    height: 40,
    width: 40,
    marginRight: 15
  },
  clockTime: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 25
  }
};

export const reproduceStyle = {
  container: {
    alignItems: 'center'
  },
  header: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 20,
    marginTop:20,
    marginBottom: 10
  },
  input: {
    textAlign:'center'
  },
  counter: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 17,
    marginVertical: 20
  },
  words: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 18,
    color: 'green',
    textAlign: 'center'
  }
};

export const goodTryStyle = {
  container: {
    alignItems: 'center'
  },
  counter: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 48,
    marginTop: 12
  },
  percentage: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 20,
  },
  missedHeader: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 18,
    marginTop: 30,
    marginBottom: 12
  },
  missedWords: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 18,
    textAlign: 'center',
    color: 'red'
  }
};

export const levelsStyle = {
  list: {
    flex:1
  },
  containerItem: {
    flexDirection: 'row',
    flex:3,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
    width: '100%'
  },
  containerLock: {
    height: 20,
    width: 20
  },
  lock: {
    height: 20,
    width: 20,
    marginLeft: 20
  },
  level: {
    fontSize: 38,
    flex:1,
    marginLeft:30,
    textAlign: 'center'
  },
  containerWord: {
    flex:1
  },
  wordText: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 20,
    textAlign: 'right',
    marginRight:20
  }
};

export const greatJobStyle = {
  container: {
    alignItems: 'center'
  },
  text: {
    fontFamily: 'balsamiq-sans-regular',
    fontSize: 25
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 50
  }
};

export const routerStyle = {
  titleStyle: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'balsamiq-sans-regular',
    fontWeight: '200'
  },
  navigationBarStyle: {
    marginTop: 25
  }
};

export const errorText = {
  container: {
    marginTop: 20
  },
  text: {
    fontSize: 20,
    color: 'red',
    marginLeft: 10,
    fontFamily: 'balsamiq-sans-regular'
  }
}
