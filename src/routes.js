import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '~/pages/Login';
import Main from '~/pages/Main';

export default userLogged => createAppContainer(
  createStackNavigator(
    {
      Login,
      Main,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
      initialRouteName: userLogged ? 'Main' : 'Login',
    },
  ),
);
