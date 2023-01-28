export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELET_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


export const addTodo = (payload) => ({ type: ADD_TODO, payload })
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload })
export const toggleStatus = (payload) => ({ type: TOGGLE_TODO, payload })
