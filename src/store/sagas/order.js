import { call, put, select } from 'redux-saga/effects';
import { AppApi } from '~/services/api';
import { Creators as OrderActions } from '~/store/ducks/order';

export function* fetchOrderRequest() {
  try {
    const { loggedUserToken } = yield select(state => state.session);
    const { data } = yield call(AppApi.get, '/user/order', {
      headers: {
        Authorization: `bearer ${loggedUserToken}`,
      },
    });
    yield put(OrderActions.fetchOrderSuccess(data));
  } catch (e) {
    yield put(OrderActions.fetchOrderFailure('there was a problem loading'));
  }
}
