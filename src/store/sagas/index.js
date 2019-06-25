import { all, takeLatest } from 'redux-saga/effects';
import * as SessionSagas from './session';
import { Types as SessionTypes } from '~/store/ducks/session';

export default function* rootSaga() {
  return yield all([
    takeLatest(SessionTypes.INITIAL_LOGGED_USER_REQUEST, SessionSagas.initialUserLoggedRequest),
    takeLatest(SessionTypes.FETCH_LOGGED_USER_REQUEST, SessionSagas.fetchLoggedUserRequest),
  ]);
}
