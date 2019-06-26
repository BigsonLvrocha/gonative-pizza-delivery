import { call, put, select } from 'redux-saga/effects';
import { AppApi } from '~/services/api';
import { Creators as SizeActions } from '~/store/ducks/size';

export function* fetchTypeRequest({ payload: { productId, typeId } }) {
  try {
    const { loggedUserToken } = yield select(state => state.session);
    const { data } = yield call(AppApi.get, `/product/${productId}/type/${typeId}/size`, {
      headers: {
        Authorization: `bearer ${loggedUserToken}`,
      },
    });
    yield put(SizeActions.fetchSizesSuccess(data));
  } catch (e) {
    yield put(SizeActions.fetchSizesFailure('there was a problem loading'));
  }
}
