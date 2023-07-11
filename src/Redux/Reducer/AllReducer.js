import { combineReducers } from "redux";
import ModeReducer from './ModeReducer'
import dateReducer from "./DatePassingReducer";
import selectedDateReducer from "./selectedDateReducer";
import routeReducer from "./authenticateUser";

const AllReducers = combineReducers({
    mode: ModeReducer,
    date: dateReducer,
    selectedDate: selectedDateReducer,
    authenticateUser:routeReducer
})
export default AllReducers