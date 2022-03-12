import { createStore, combineReducers } from "redux";
import { homeReducer } from "../Reducers/homeReducer";
export const confiStore = () => {
  const Store = createStore(
    combineReducers({ homeReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return Store;
};
