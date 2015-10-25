import { combineReducers } from 'redux';
import user from './user';
import backend from './backend';
import actions from '../constants/ActionTypes';

import { location } from 'redux-reroute';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer.plugin({
    login: (state, action) => {
      switch (action.type) {
      case actions.LOGIN_FAILURE:
        return {
          ...state,
          password: {},
        };
      default:
        return state;
      }
    },
  }),
  location,
  backend,
  user,
});

export default rootReducer;
