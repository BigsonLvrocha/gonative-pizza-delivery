// types
export const Types = {
  FETCH_TYPES_REQUEST: 'type/FETCH_TYPES_REQUEST',
  FETCH_TYPES_SUCCESS: 'type/FETCH_TYPES_SUCCESS',
  FETCH_TYPES_FAILURE: 'type/FETCH_TYPES_FAILURE',
  CLEAR_TYPES: 'type/CLEAR_TYPES',
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
    case Types.FETCH_TYPES_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: [],
      };
    case Types.CLEAR_TYPES:
      return {
        ...state,
        data: [],
      };
    case Types.FETCH_TYPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        error: false,
      };
    case Types.FETCH_TYPES_FAILURE:
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
  fetchTypesRequest: productId => ({
    type: Types.FETCH_TYPES_REQUEST,
    payload: {
      productId,
    },
  }),
  fetchTypesSuccess: data => ({
    type: Types.FETCH_TYPES_SUCCESS,
    payload: {
      data,
    },
  }),
  fetchTypesFailure: error => ({
    type: Types.FETCH_TYPES_FAILURE,
    payload: {
      error,
    },
  }),
  clearErrors: () => ({
    type: Types.CLEAR_ERRORS,
  }),
  clearTypes: () => ({
    type: Types.CLEAR_TYPES,
  }),
};
