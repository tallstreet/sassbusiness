import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
  // create a store that has redux-thunk middleware enabled
  const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
}
