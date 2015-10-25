import actions from '../constants/ActionTypes';
import request from '../utils/request';

function setUser(dispatch, response, redirect) {
  if (redirect && response.result) {
    window.location = '/#/dashboard';
  }
  if (redirect && !response.result) {
    window.location = '/';
  }
  dispatch({
    type: actions.GET_USER,
    response,
  });
}


export function signup({username, email, password}) {
  return (dispatch) => {
    const data = JSON.stringify({
      username,
      email,
      password,
    });
    request('/api/users/0.1/users', {
      method: 'POST',
      body: data,
    }, dispatch).then((response) => {
      if (response.status === 'success') {
        setUser(dispatch, response, true);
      } else {
        dispatch({
          type: actions.SIGNUP_FAILURE,
          response,
        });
      }
    });
  };
}

export function login({username, password}) {
  return (dispatch) => {
    const data = JSON.stringify({
      username,
      password,
    });
    request('/api/auth/0.1/auth', {
      method: 'POST',
      body: data,
    }, dispatch).then((response) => {
      if (response.status === 'success') {
        setUser(dispatch, response, true);
      } else {
        dispatch({
          type: actions.LOGIN_FAILURE,
          response,
        });
      }
    });
  };
}


export function logout() {
  return (dispatch) => {
    request('/api/auth/0.1/logout', {}, dispatch).then((response) => {
      if (response.status === 'success') {
        setUser(dispatch, response, true);
      } else {
        dispatch({
          type: actions.LOGOUT_FAILURE,
          response,
        });
      }
    });
  };
}


export function getUser() {
  return (dispatch) => {
    request('/api/users/0.1/users/self', {}, dispatch)
    .then((response) => {
      setUser(dispatch, response, false);
    });
  };
}
