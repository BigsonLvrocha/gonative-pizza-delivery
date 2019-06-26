import { all, takeLatest } from 'redux-saga/effects';
import * as SessionSagas from './session';
import * as SignupSagas from './signup';
import * as ProductSagas from './product';
import { Types as SessionTypes } from '~/store/ducks/session';
import { Types as SignupTypes } from '~/store/ducks/signup';
import { Types as ProductTypes } from '~/store/ducks/product';

export default function* rootSaga() {
  return yield all([
    takeLatest(SessionTypes.INITIAL_LOGGED_USER_REQUEST, SessionSagas.initialUserLoggedRequest),
    takeLatest(SessionTypes.FETCH_LOGGED_USER_REQUEST, SessionSagas.fetchLoggedUserRequest),
    takeLatest(SignupTypes.CREATE_USER_REQUEST, SignupSagas.createUserRequest),
    takeLatest(ProductTypes.FETCH_PRODUCTS_REQUEST, ProductSagas.fetchProductRequest),
  ]);
}
