
import { persistCombineReducers } from 'redux-persist';
import { routerReducer as routing } from 'react-router-redux';
import storage from 'redux-persist/lib/storage';
import search from 'store/modules/search';

const config = {
  key: 'deedmob-client',
  storage,
  whitelist: ['search'],
};

const rootReducer = persistCombineReducers(config, {
  routing,
  search: search.reducer,
})

export default rootReducer;
