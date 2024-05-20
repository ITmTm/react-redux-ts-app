import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

export const store = createStore({}, applyMiddleware(thunk));