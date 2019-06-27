import { combineReducers } from 'redux';
import session from './session';
import signup from './signup';
import product from './product';
import type from './type';
import size from './size';
import cart from './cart';
import cep from './cep';
import order from './order';

export default combineReducers({
  session,
  signup,
  product,
  type,
  size,
  cart,
  cep,
  order,
});
