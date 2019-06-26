import { combineReducers } from 'redux';
import session from './session';
import signup from './signup';
import product from './product';

export default combineReducers({
  session,
  signup,
  product,
});
