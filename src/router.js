import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import { routerStyle } from './styles';

import Loader from './screens/loader';
import Welcome from './screens/welcome';
import NewUser from './screens/new-user';
import Login from './screens/login';
import Main from './screens/main';
import Levels from './screens/levels';
import Remember from './screens/remember';
import Reproduce from './screens/reproduce';
import GoodTry from './screens/good-try';
import GreatJob from './screens/great-job';

const { titleStyle, navigationBarStyle } = routerStyle;

const Routs = () => {
  return(
    <Router
      cardStyle={{backgroundColor:'white'}}
      titleStyle={titleStyle}
      navigationBarStyle={navigationBarStyle}
    >
      <Stack>
        <Scene key="screenLoader"
          panHandlers={null}
          component={Loader}
          hideNavBar={true} />
        <Scene key="screenWelcome"
          component={Welcome}
          hideNavBar={true} />
        <Scene key="screenNewUser" component={NewUser} title="New user" />
        <Scene key="screenLogin" initial component={Login} title="Log in" />
        <Scene key="screenMain"
          panHandlers={null}
          component={Main}
          hideNavBar={true} />
        <Scene key="screenLevels" component={Levels} title="Level" />
        <Scene key="screenRemember" component={Remember} title="Remember" />
        <Scene key="screenReproduce"
          panHandlers={null}
          component={Reproduce}
          title="Reproduce" />
        <Scene key="screenGoodTry"
          panHandlers={null}
          component={GoodTry}
          title="Good try!" />
        <Scene key="screenGreatJob"
          panHandlers={null}
          component={GreatJob}
          title="Great job!" />
      </Stack>
    </Router>
  )
}

export default Routs;
