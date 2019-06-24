// types
export const Types = {
  INITIAL_LOGGED_USER_REQUEST: 'session/INITIAL_LOGGED_USER_REQUEST',
  FETCH_LOGGED_USER_REQUEST: 'session/FETCH_LOGGED_USER_REQUEST',
  FETCH_LOGGED_USER_SUCCESS: 'session/FETCH_LOGGED_USER_SUCCESS',
  FETCH_LOGGED_USER_FAILURE: 'session/FETCH_LOGGED_USER_FAILURE',
};

// reducer

const INITIAL_STATE = {
  loggedUserData: null,
  loggedUserToken: null,
  userChecked: false,
  error: false,
};

export default function session(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.FETCH_LOGGED_USER_SUCCESS:
      return {
        ...state,
        loggedUserData: payload.data,
        loggedUserToken: payload.token,
        userChecked: true,
        error: false,
      };
    case Types.FETCH_LOGGED_USER_FAILURE:
      return {
        ...state,
        loggedUserData: null,
        loggedUserToken: null,
        userChecked: true,
        error: payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  intialLoggedUserRequest: () => ({
    type: Types.INITIAL_LOGGED_USER_REQUEST,
  }),
  fetchLoggedUserRequest: () => ({
    type: Types.FETCH_LOGGED_USER_REQUEST,
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
};
