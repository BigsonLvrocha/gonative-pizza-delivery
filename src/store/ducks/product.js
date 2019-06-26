// types
export const Types = {
  FETCH_PRODUCTS_REQUEST: 'product/FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS: 'product/FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE: 'product/FETCH_PRODUCTS_FAILURE',
  CLEAR_ERRORS: 'product/CLEAR_ERRORS',
};

// reducers
const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: [],
      };
    case Types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        error: false,
      };
    case Types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case Types.CLEAR_ERRORS:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}

// action creators
export const Creators = {
  fetchProductsRequest: () => ({
    type: Types.FETCH_PRODUCTS_REQUEST,
  }),
  fetchProductsSuccess: data => ({
    type: Types.FETCH_PRODUCTS_SUCCESS,
    payload: {
      data,
    },
  }),
  fetchProductsFailure: error => ({
    type: Types.FETCH_PRODUCTS_FAILURE,
    payload: {
      error,
    },
  }),
  clearErrors: () => ({
    type: Types.CLEAR_ERRORS,
  }),
};
