import { call, put } from 'redux-saga/effects';
import { AppApi } from '~/services/api';
import { navigate } from '~/services/navigation';
import { Creators as SignupSession } from '~/store/ducks/signup';

export function* createUserRequest({
  payload: {
    username, email, password, passwordConfirmation,
  },
}) {
  try {
    yield call(AppApi.post, '/user', {
      email,
      username,
      password,
      password_confirmation: passwordConfirmation,
    });
    navigate('Login');
  } catch (e) {
    if (e.response && e.response.status === 400 && Array.isArray(e.response.data)) {
      yield put(SignupSession.createUserFailure(false, e.response.data));
      return;
    }
    yield put(SignupSession.createUserFailure('Não foi possível criar o usuário'));
  }
}
