// types
export const Types = {
  ADD_ITEM: 'cart/ADD_ITEM',
  REMOVE_ITEM: 'cart/REMOVE_ITEM',
  CLEAR_CART: 'cart/CLEAR_CART',
  PLACE_ORDER_REQUEST: 'cart/PLACE_ORDER_REQUEST',
  PLACE_ORDER_SUCCESS: 'cart/PLACE_ORDER_SUCCESS',
  PLACE_ORDER_FAILURE: 'cart/PLACE_ORDER_FAILURE',
};

// reducer
const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  let initial;
  switch (type) {
    case Types.ADD_ITEM:
      initial = state.items.find(item => item.item.id === payload.item.id);
      if (initial) {
        return {
          ...state,
          items: [
            ...state.items.filter(item => item.item.id !== initial.item.id),
            {
              id: initial.id,
              amount: initial.amount + 1,
              item: initial.item,
            },
          ],
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            // encapsula em outro objeto para possibilitar a adição de
            // dois items iguais sem causar problema na id da lista
            id: Math.random(),
            amount: 1,
            item: payload.item,
          },
        ],
      };
    case Types.REMOVE_ITEM:
      initial = state.items.find(item => item.id === payload.id);
      if (!initial) {
        return state;
      }
      if (initial.amount === 1) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== payload.id),
        };
      }
      return {
        ...state,
        items: [
          ...state.items.filter(item => item.id !== payload.id),
          {
            id: payload.id,
            amount: initial.amount - 1,
            item: initial.item,
          },
        ],
      };
    case Types.CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    case Types.PLACE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        items: [],
        error: false,
        isLoading: false,
      };
    case Types.PLACE_ORDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}

// action creators
export const Creators = {
  addItem: item => ({
    type: Types.ADD_ITEM,
    payload: {
      item,
    },
  }),
  removeItem: id => ({
    type: Types.REMOVE_ITEM,
    payload: {
      id,
    },
  }),
  clearCart: () => ({
    type: Types.CLEAR_CART,
  }),
  placeOrderRequest: (cep, street, number, bairro, observations) => ({
    type: Types.PLACE_ORDER_REQUEST,
    payload: {
      cep,
      street,
      number,
      bairro,
      observations,
    },
  }),
  placeOrderSuccess: () => ({
    type: Types.PLACE_ORDER_SUCCESS,
  }),
  placeOrderFailure: error => ({
    type: Types.PLACE_ORDER_FAILURE,
    payload: {
      error,
    },
  }),
};
