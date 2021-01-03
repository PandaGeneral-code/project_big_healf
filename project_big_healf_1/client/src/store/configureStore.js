import { combineReducers, createStore } from "redux";

import utilsReducer from "./utils";

export const store = createStore(combineReducers({ utils: utilsReducer }));
