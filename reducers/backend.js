import actions from '../constants/ActionTypes';

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
  case actions.LOGIN_FAILURE:
    return {
      ...state,
      login: action.response,
    };

  case actions.SIGNUP_FAILURE:
    return {
      ...state,
      signup: action.response,
    };

  case actions.LOGOUT_FAILURE:
    return {
      ...state,
      logout: action.response,
    };

  case actions.BACKEND_ERROR:
    return {
      ...state,
      backend: action.response,
    };

  default:
    return state;
  }
}
