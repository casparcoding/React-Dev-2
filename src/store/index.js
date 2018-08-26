import 'core-js/es6/map';
import 'core-js/es6/set';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'store/rootReducer';
import 'raf/polyfill';
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;