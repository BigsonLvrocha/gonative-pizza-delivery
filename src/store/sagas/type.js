import { call, put, select } from 'redux-saga/effects';
import { AppApi } from '~/services/api';
import { Creators as TypeActions } from '~/store/ducks/type';

export function* fetchTypeRequest({ payload: { productId } }) {
  try {
    const { loggedUserToken } = yield select(state => state.session);
    const { data } = yield call(AppApi.get, `/product/${productId}/type`, {
      headers: {
        Authorization: `bearer ${loggedUserToken}`,
      },
    });
    yield put(TypeActions.fetchTypesSuccess(data));
  } catch (e) {
    yield put(TypeActions.fetchTypesFailure('there was a problem loading'));
  }
}
