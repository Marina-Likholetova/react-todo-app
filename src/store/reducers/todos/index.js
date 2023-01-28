import { ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "../../actions/todos";

const initialState = [];

export default function todosReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TODO:
            return state.concat({
                id: Date.now(),
                title: payload.title,
                isCompleted: false,
                date: payload.date,
            });

        case DELETE_TODO:
            return state.filter((todo) =>
                Array.isArray(payload) ? !payload.includes(todo.id) : todo.id !== payload.id
            );
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            );
        default:
            return state;
    }
}
