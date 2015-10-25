import actions from '../constants/ActionTypes';

const initialState = null;

export default function user(state = initialState, action) {
  switch (action.type) {
  case actions.GET_USER:
    if (action.response.status === 'success') {
      return action.response.result;
    } else {
      return state;
    }
    break;
  default:
    return state;
  }
}
