import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    combineReducers({
      ...reducers
    }),
    {},
    composeEnhancers(
      applyMiddleware(thunk, createLogger)
    ),
  );
}
