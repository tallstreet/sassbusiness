import actions from '../constants/ActionTypes';

export default function request(url, data, dispatch) {
  return fetch(`http://localhost:3000${url}`, {
    ...data,
    credentials: 'include',
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    dispatch({
      type: actions.BACKEND_ERROR,
      error,
    });
  });
}
