// types
export const Types = {
  FETCH_SIZES_REQUEST: 'type/FETCH_SIZES_REQUEST',
  FETCH_SIZES_SUCCESS: 'type/FETCH_SIZES_SUCCESS',
  FETCH_SIZES_FAILURE: 'type/FETCH_SIZES_FAILURE',
  CLEAR_ERRORS: 'type/CLEAR_ERRORS',
};

// reducers
const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.FETCH_SIZES_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: [],
      };
    case Types.FETCH_SIZES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        error: false,
      };
    case Types.FETCH_SIZES_FAILURE:
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
  fetchSizesRequest: (productId, typeId) => ({
    type: Types.FETCH_SIZES_REQUEST,
    payload: {
      productId,
      typeId,
    },
  }),
  fetchSizesSuccess: data => ({
    type: Types.FETCH_SIZES_SUCCESS,
    payload: {
      data,
    },
  }),
  fetchSizesFailure: error => ({
    type: Types.FETCH_SIZES_FAILURE,
    payload: {
      error,
    },
  }),
  clearErrors: () => ({
    type: Types.CLEAR_ERRORS,
  }),
};
