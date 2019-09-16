import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getReducers, injectDependencies } from "./reducer-registry";
import { compose } from "redux";

let composeFunc = compose;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeFunc = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ maxAge: 50 });
}

export const store = createStore(
  combineReducers(getReducers()),
  composeFunc(applyMiddleware(thunk))
);
injectDependencies(store);
