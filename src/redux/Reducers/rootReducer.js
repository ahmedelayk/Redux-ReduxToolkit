import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UsersReducer from "./UsersReducer";

export default combineReducers({
    counter: CounterReducer,
    users: UsersReducer
})