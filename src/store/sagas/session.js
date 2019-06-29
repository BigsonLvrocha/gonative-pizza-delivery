import { call, put } from 'redux-saga/effects';
import { AppApi } from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { Creators as SessionActions } from '~/store/ducks/session';

export function* fetchLoggedUser(token) {
  try {
    const { data } = yield call(AppApi.get, '/session', {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    if (data.role === 'admin') {
      yield call(AsyncStorage.removeItem, 'pizzaria/token');
      yield put(SessionActions.fetchLoggedUserFailure('Admins are not allowed'));
      return;
    }
    yield call(AsyncStorage.setItem, 'pizzaria/token', token);
    yield put(SessionActions.fetchLoggedUserSuccess(data, token));
  } catch (e) {
    if (!!e.response && e.response.status === 401) {
      yield call(AsyncStorage.removeItem, 'pizzaria/token');
      yield put(SessionActions.fetchLoggedUserFailure('There was a problem authenticating'));
    }
    yield put(SessionActions.fetchLoggedUserFailure('There was a problem authenticating'));
  }
}

export function* initialUserLoggedRequest() {
  // yield call(AsyncStorage.removeItem, 'pizzaria/token');

  const loggedUserToken = yield call(AsyncStorage.getItem, 'pizzaria/token');
  if (loggedUserToken === null) {
    yield put(SessionActions.fetchLoggedUserFailure(false));
    return;
  }
  yield call(fetchLoggedUser, loggedUserToken);
}

export function* fetchLoggedUserRequest({ payload: { email, password } }) {
  try {
    const { data } = yield call(AppApi.post, '/session', {
      email,
      password,
    });
    yield call(fetchLoggedUser, data.token);
  } catch (e) {
    yield put(SessionActions.fetchLoggedUserFailure('E-mail ou senha incorretos'));
  }
}
