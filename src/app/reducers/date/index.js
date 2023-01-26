import { SET_DATE } from "../../actions/date"; 
import { initialDate } from "../../../utils/calendar/calendar";

const initialState = initialDate;

export default function dateReducer(state = initialState, {type, payload}) {
    switch (type) {
        case (SET_DATE): return payload.date
        default: return state
    }
}