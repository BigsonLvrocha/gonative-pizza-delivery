import { call, put, select } from 'redux-saga/effects';
import { AppApi } from '~/services/api';
import { Creators as ProductActions } from '~/store/ducks/product';

export function* fetchProductRequest() {
  try {
    const { loggedUserToken } = yield select(state => state.session);
    const { data } = yield call(AppApi.get, '/product', {
      headers: {
        Authorization: `bearer ${loggedUserToken}`,
      },
    });
    yield put(ProductActions.fetchProductsSuccess(data));
  } catch (e) {
    yield put(ProductActions.fetchProductsFailure('there was a problem loading'));
  }
}
