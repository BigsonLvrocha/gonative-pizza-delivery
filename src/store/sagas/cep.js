import { call, put } from 'redux-saga/effects';
import { ViaCepApi } from '~/services/api';
import { Creators as CepActions } from '~/store/ducks/cep';

export function* fetchCepRequest({ payload: { cep } }) {
  try {
    const { data } = yield call(ViaCepApi.get, `/ws/${cep}/json`);
    if (data.error) {
      yield put(CepActions.fetchCepError('O cep não foi encontrado'));
    } else {
      yield put(CepActions.fetchCepSuccess(data));
    }
  } catch (e) {
    yield put(CepActions.fetchCepError('Houve um erro buscando informação do cep'));
  }
}
