import { combineReducers } from "redux";
import ModeReducer from './ModeReducer'

const AllReducers = combineReducers({
    mode: ModeReducer
})
export default AllReducers