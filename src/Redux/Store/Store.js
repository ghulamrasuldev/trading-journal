import { legacy_createStore as createStore, applyMiddleware } from "redux";
import AllReducer from "../Reducer/AllReducer";
import thunk from "redux-thunk";

export const store = createStore(AllReducer, {}, applyMiddleware(thunk));
