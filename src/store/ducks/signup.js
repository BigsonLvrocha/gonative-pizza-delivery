// types
export const Types = {
  CREATE_USER_REQUEST: 'signup/CREATE_USER_REQUEST',
  CREATE_USER_FAILURE: 'signup/CREATE_USER_FAILURE',
  CREATE_USER_SUCCESS: 'signup/CREATE_USER_SUCCESS',
  SIGNUP_CLEAR_ERRORS: 'signup/CLEAR_ERRORS',
};

// reducer
const INITIAL_STATE = {
  isLoading: false,
  error: false,
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.CREATE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
      };
    case Types.CREATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case Types.SIGNUP_CLEAR_ERRORS:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}

// creators
export const Creators = {
  createUserRequest: (username, email, password, passwordConfirmation) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: {
      username,
      email,
      password,
      passwordConfirmation,
    },
  }),
  createUserSuccess: () => ({
    type: Types.CREATE_USER_SUCCESS,
  }),
  createUserFailure: error => ({
    type: Types.CREATE_USER_FAILURE,
    payload: {
      error,
    },
  }),
  clearSignupError: () => ({
    type: Types.SIGNUP_CLEAR_ERRORS,
  }),
};
