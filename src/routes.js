import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '~/pages/Login';
import Main from '~/pages/Main';
import Signup from '~/pages/Signup';
import Type from '~/pages/Type';
import Size from '~/pages/Size';
import Cart from '~/pages/Cart';
import Order from '~/pages/Order';
import Profile from '~/pages/Profile';

export default userLogged => createAppContainer(
  createStackNavigator(
    {
      Login,
      Main,
      Signup,
      Type,
      Size,
      Cart,
      Order,
      Profile,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
      initialRouteName: userLogged ? 'Main' : 'Login',
    },
  ),
);
