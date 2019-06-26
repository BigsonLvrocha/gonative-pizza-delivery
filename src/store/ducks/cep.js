// Types

export const Types = {
  FETCH_CEP_REQUEST: 'cep/FETCH_CEP_REQUEST',
  FETCH_CEP_SUCCESS: 'cep/FETCH_CEP_SUCCESS',
  FETCH_CEP_FAILURE: 'cep/FETCH_CEP_FAILURE',
  CLEAR_RESULT: 'cep/CLEAR_RESULT',
};

// reducer

const INITIAL_STATE = {
  result: null,
  isLoading: false,
  error: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.FETCH_CEP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.FETCH_CEP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        result: payload.result,
      };
    case Types.FETCH_CEP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case Types.CLEAR_RESULT:
      return {
        ...state,
        result: null,
      };
    default:
      return state;
  }
}

// Creators
export const Creators = {
  fetchCepRequest: cep => ({
    type: Types.FETCH_CEP_REQUEST,
    payload: {
      cep,
    },
  }),
  fetchCepSuccess: result => ({
    type: Types.FETCH_CEP_SUCCESS,
    payload: {
      result,
    },
  }),
  fetchCepError: error => ({
    type: Types.FETCH_CEP_FAILURE,
    payload: {
      error,
    },
  }),
  clearResult: () => ({
    type: Types.CLEAR_RESULT,
  }),
};
