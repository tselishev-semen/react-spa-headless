import { combineReducers } from "redux";
import { pageReducer } from "./page";

let store;
export const injectDependencies = newStore => {
  store = newStore;
};

const reducers = {
  page: pageReducer
};

export const getReducers = () => ({ ...reducers, ...injectedReducers });

let injectedReducers = {};
export const injectReducerOnce = (key, reducer) => {
  if (!injectedReducers[key]) {
    injectedReducers[key] = reducer;
    store.replaceReducer(combineReducers(getReducers()));
  }
};
