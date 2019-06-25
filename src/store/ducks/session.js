// types
export const Types = {
  INITIAL_LOGGED_USER_REQUEST: 'session/INITIAL_LOGGED_USER_REQUEST',
  FETCH_LOGGED_USER_REQUEST: 'session/FETCH_LOGGED_USER_REQUEST',
  FETCH_LOGGED_USER_SUCCESS: 'session/FETCH_LOGGED_USER_SUCCESS',
  FETCH_LOGGED_USER_FAILURE: 'session/FETCH_LOGGED_USER_FAILURE',
  SESSION_CLEAR_ERROR: 'session/CLEAR_ERROR',
};

// reducer

const INITIAL_STATE = {
  loggedUserData: null,
  loggedUserToken: null,
  userChecked: false,
  error: false,
  loading: false,
};

export default function session(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.INITIAL_LOGGED_USER_REQUEST:
    case Types.FETCH_LOGGED_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.FETCH_LOGGED_USER_SUCCESS:
      return {
        ...state,
        loggedUserData: payload.data,
        loggedUserToken: payload.token,
        userChecked: true,
        error: false,
        loading: false,
      };
    case Types.FETCH_LOGGED_USER_FAILURE:
      return {
        ...state,
        loggedUserData: null,
        loggedUserToken: null,
        userChecked: true,
        error: payload.error,
        loading: false,
      };
    case Types.SESSION_CLEAR_ERROR:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  initialLoggedUserRequest: () => ({
    type: Types.INITIAL_LOGGED_USER_REQUEST,
  }),
  fetchLoggedUserRequest: (email, password) => ({
    type: Types.FETCH_LOGGED_USER_REQUEST,
    payload: {
      email,
      password,
    },
  }),
  fetchLoggedUserSuccess: (data, token) => ({
    type: Types.FETCH_LOGGED_USER_SUCCESS,
    payload: {
      data,
      token,
    },
  }),
  fetchLoggedUserFailure: (error = false) => ({
    type: Types.FETCH_LOGGED_USER_FAILURE,
    payload: {
      error,
    },
  }),
  clearSessionErrors: () => ({
    type: Types.SESSION_CLEAR_ERROR,
  }),
};
