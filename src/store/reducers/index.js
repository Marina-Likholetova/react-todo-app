import { combineReducers } from "redux";
import todosReducer from "./todos"; 
import dateReducer from "./date";
import filterReducer from "./filter";


export default combineReducers({
    todos: todosReducer,
    date: dateReducer,
    filter: filterReducer
})
