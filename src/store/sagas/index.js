import { all, takeLatest } from 'redux-saga/effects';
import * as SessionSagas from './session';
import * as SignupSagas from './signup';
import * as ProductSagas from './product';
import * as TypeSagas from './type';
import * as SizeSagas from './size';
import { Types as SessionTypes } from '~/store/ducks/session';
import { Types as SignupTypes } from '~/store/ducks/signup';
import { Types as ProductTypes } from '~/store/ducks/product';
import { Types as TypeTypes } from '~/store/ducks/type';
import { Types as SizeTypes } from '~/store/ducks/size';

export default function* rootSaga() {
  return yield all([
    takeLatest(SessionTypes.INITIAL_LOGGED_USER_REQUEST, SessionSagas.initialUserLoggedRequest),
    takeLatest(SessionTypes.FETCH_LOGGED_USER_REQUEST, SessionSagas.fetchLoggedUserRequest),
    takeLatest(SignupTypes.CREATE_USER_REQUEST, SignupSagas.createUserRequest),
    takeLatest(ProductTypes.FETCH_PRODUCTS_REQUEST, ProductSagas.fetchProductRequest),
    takeLatest(TypeTypes.FETCH_TYPES_REQUEST, TypeSagas.fetchTypeRequest),
    takeLatest(SizeTypes.FETCH_SIZES_REQUEST, SizeSagas.fetchSizesRequest),
  ]);
}
