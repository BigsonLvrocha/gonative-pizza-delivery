/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import './config/DevTools';
import './config/Reactotron';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import store from './store/index';

const App = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default App;
