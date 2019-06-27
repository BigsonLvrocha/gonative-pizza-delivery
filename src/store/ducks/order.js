// Types
export const Types = {
  FETCH_ORDER_REQUEST: 'order/FETCH_ORDER_REQUEST',
  FETCH_ORDER_SUCCESS: 'order/FETCH_ORDER_SUCCESS',
  FETCH_ORDER_FAILURE: 'order/FETCH_ORDER_FAILURE',
};

// reducer
const INITIAL_STATE = {
  data: [],
  isLoading: false,
  error: false,
};

export default function order(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.FETCH_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        error: false,
        isLoading: false,
        data: payload.data,
      };
    case Types.FETCH_ORDER_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
      };
    default:
      return state;
  }
}

// creators
export const Creators = {
  fetchOrderRequest: () => ({
    type: Types.FETCH_ORDER_REQUEST,
  }),
  fetchOrderSuccess: data => ({
    type: Types.FETCH_ORDER_SUCCESS,
    payload: {
      data,
    },
  }),
  fetchOrderFailure: error => ({
    type: Types.FETCH_ORDER_FAILURE,
    payload: {
      error,
    },
  }),
};
