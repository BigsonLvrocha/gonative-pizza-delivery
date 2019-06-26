import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '~/pages/Login';
import Main from '~/pages/Main';
import Signup from '~/pages/Signup';
import Type from '~/pages/Type';
import Size from '~/pages/Size';

export default userLogged => createAppContainer(
  createStackNavigator(
    {
      Login,
      Main,
      Signup,
      Type,
      Size,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
      initialRouteName: userLogged ? 'Main' : 'Login',
    },
  ),
);
