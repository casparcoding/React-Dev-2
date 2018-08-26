/**
 * A wholesome store for the Search module.
 * All data calls and mutations for the module must be handled within this store
 * 
 * Created by daniel on 09/08/2018.
 */
import Api from 'api/searchMockApi';
import * as types from 'store/actionTypes';

// Declare initial state
export const initialState = {
  loader: {
    submit: false,
    search: false,
  },
  searchForm: {
    search: '',
  },
  results: [],
}

// Declare reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_LOADER:
      return {
        ...state,
        loader: { ...state.loader, ...action.payload },
      };
    case types.UPDATE_SEARCH_FORM:
      return {
        ...state,
        searchForm: { ...action.payload },
      };
    case types.UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        results: [...action.payload],
      };
    default:
      return state;
  }
}

// Declare actions
export const actions = {
  updateSearchForm: (payload) => {
    return (dispatch) => {
      dispatch({
        type: types.UPDATE_SEARCH_FORM,
        payload,
      });
    };
  },
  searchFriend: (payload) => {
    return (dispatch) => {
      dispatch({
        type: types.SEARCH_LOADER,
        payload: { search: true },
      });
      dispatch({
        type: types.UPDATE_SEARCH_FORM,
        payload,
      });
      return Api(payload)
        .then(res => {
          dispatch({
            type: types.SEARCH_LOADER,
            payload: { search: false },
          });
          dispatch({
            type: types.UPDATE_SEARCH_RESULTS,
            payload: [...res],
          });
        }).catch(error => {
          dispatch({
            type: types.SEARCH_LOADER,
            payload: { search: false },
          });
          dispatch({
            type: types.UPDATE_SEARCH_RESULTS,
            payload: [],
          });
        });
    };
  },
}

export default {
  initialState,
  reducer,
  actions,
};
