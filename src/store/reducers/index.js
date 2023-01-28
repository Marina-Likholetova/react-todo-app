import { combineReducers } from "redux";
import todosReducer from "./todos"; 
import dateReducer from "./date";


export default combineReducers({
    todos: todosReducer,
    date: dateReducer
})
