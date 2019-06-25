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
import store from './store';
import AppDef from './App';

const App = () => (
  <Provider store={store}>
    <AppDef />
  </Provider>
);

export default App;
