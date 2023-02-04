import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    SET_TODOS,
    SET_TODO_LOADING,
    SET_TODO_ERROR,
} from "../../actions/todos";

const initialState = {
    value: [],
    isLoading: false,
    error: null,
};

export default function todosReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                value: state.value.concat({
                    id: Date.now(),
                    title: payload.title,
                    completed: false,
                    date: payload.date,
                }),
            };

        case DELETE_TODO:
            return {
                ...state,
                value: state.value.filter((todo) =>
                    Array.isArray(payload) ? !payload.includes(todo.id) : todo.id !== payload.id
                ),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                value: state.value.map((todo) =>
                    todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case SET_TODOS:
            return {
                ...state,
                value: payload.map((item) => ({
                    ...item,
                    date: item.date * (Math.random() * (1001 - 1000) + 1000),
                })),
            };

        case SET_TODO_LOADING:
            return { ...state, isLoading: payload };

        case SET_TODO_ERROR:
            return { ...state, error: payload };

        default:
            return state;
    }
}
