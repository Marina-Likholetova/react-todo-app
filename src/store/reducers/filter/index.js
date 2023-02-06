import { SET_TODO_FILTER } from "../../actions/filter";

const initialState = "all";


export default function filterReducer(state = initialState, {type, payload}) {
    switch (type) {
        case (SET_TODO_FILTER): return payload
        default: return state
    }
    
} 