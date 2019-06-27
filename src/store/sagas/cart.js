import { call, put, select } from 'redux-saga/effects';
import { AppApi } from '~/services/api';
import { Creators as CartActions } from '~/store/ducks/cart';
import { dispatch } from '~/services/navigation';
import { NavigationActions, StackActions } from 'react-navigation';

export function* placeOrderRequest({
  payload: {
    observations, number, street, bairro, cep,
  },
}) {
  const { items } = yield select(state => state.cart);
  const { loggedUserToken } = yield select(state => state.session);
  const sizes = items.map(item => item.item.id);
  try {
    yield call(
      AppApi.post,
      '/user/order',
      {
        observations,
        number,
        street,
        cep,
        district: bairro,
        sizes,
      },
      {
        headers: {
          Authorization: `bearer ${loggedUserToken}`,
        },
      },
    );
    yield put(CartActions.placeOrderSuccess());
    dispatch(
      StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Main' }),
          NavigationActions.navigate({ routeName: 'Profile' }),
        ],
      }),
    );
  } catch (e) {
    yield put(CartActions.placeOrderFailure('Não foi possível registrar o pedido'));
  }
}
