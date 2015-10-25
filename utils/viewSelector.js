import React from 'react';
import { createSelector } from 'reselect';
import { createComponentSelector, noMatchRouteSelector } from 'redux-reroute';

import routes from '../routes';
import { Home, Login, Signup, Dashboard, Settings } from '../containers';

const userSelector = ({user}) => user;
const isAuthed = createSelector(
  userSelector,
  (user) => user !== null
);

const preAuthSelector = createComponentSelector({
  [routes.home]: () => <Home/>,
  [routes.login]: () => <Login/>,
  [routes.signup]: () => <Signup/>,
});

const postAuthSelector = createComponentSelector({
  [routes.dashboard]: () => <Dashboard />,
  [routes.settings]: (urlParams) => <Settings {...urlParams} />,
});

const auth = createSelector(
  isAuthed,
  state => state,
  (isAuthed, state) => {
    return isAuthed ? postAuthSelector(state) : { component: <Login/> };
  }
);

export const viewSelector = createSelector(
  noMatchRouteSelector(),
  state => state,
  (noMatch, state) => {
    if (noMatch) {
      return { component: <Home routingError="Oh snap"/> };
    }
    return preAuthSelector(state) || auth(state);
  }
);
