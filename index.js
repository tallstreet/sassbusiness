import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import routes from './routes';
import { connectToStore } from 'redux-reroute';
import translate from 'counterpart';

translate.registerTranslations('en', require('./translations/en.json'));

const store = configureStore();

connectToStore(store, routes);

render(
  <Root store={store} />,
  document.getElementById('root')
);
