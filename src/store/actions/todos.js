import apis from "../../api/todos";

export const SET_TODOS = "SET_TODOS"
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELET_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_TODO_LOADING = "SET_TODO_LOADING";
export const SET_TODO_ERROR = "SET_TODO_ERROR"


export const setTodoLoading = (payload) => ({ type: SET_TODO_LOADING, payload })
export const setTodoError = (payload) => ({ type: SET_TODO_ERROR, payload })


export const setTodos = () => async (dispatch) => {
    dispatch(setTodoError(null));
    dispatch(setTodoLoading(true));

    try {
        const payload = await apis.getTodos();
        dispatch({ type: SET_TODOS, payload });
    } catch (err) {
        dispatch(setTodoError(err.message))
    } finally {
        dispatch(setTodoLoading(false))
    }
}

export const addTodo = (data) => async (dispatch) => { 
    dispatch(setTodoError(null));
    dispatch(setTodoLoading(true));
    try {
        const payload = await apis.addNewTodo(data);
        dispatch({ type: ADD_TODO, payload });
    } catch (err) {
        dispatch(setTodoError(err.message))
    } finally {
        dispatch(setTodoLoading(false))
    }

}

export const deleteTodo = ({ id }) => async (dispatch) => {
    dispatch(setTodoError(null));
    dispatch(setTodoLoading(true));
    try {
        await apis.deleteTodo(id);
        dispatch({ type: DELETE_TODO, payload: {id} });
    } catch (err) {
        dispatch(setTodoError(err.message))
    } finally {
        dispatch(setTodoLoading(false))
    }
}

export const toggleStatus = ({ id }) => async (dispatch, getState) => {
    dispatch(setTodoError(null));
    dispatch(setTodoLoading(true));

    const { todos } = getState();
    const todo = todos.value.find(item => item.id === id);
    const newTodo = {...todo, completed: !todo.completed}


    try {
        await apis.toggleTodo(id, );
        dispatch({ type: TOGGLE_TODO, payload: newTodo});
    } catch (err) {
        dispatch(setTodoError(err.message))
    } finally {
        dispatch(setTodoLoading(false))
    }
}






