import { SET_DATE } from "../../actions/date"; 
import { convert } from "../../../utils/calendar/calendar";

const initialState = convert(Date.now());

export default function dateReducer(state = initialState, {type, payload}) {
    switch (type) {
        case (SET_DATE): return payload.date
        default: return state
    }
}