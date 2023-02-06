import axios from "axios";

const API_URL = "https://63da6c8c2af48a60a7cd749b.mockapi.io/todos/";

const getTodos = async () => {
    const res = await axios.get(API_URL);
    return res.data;
} 

const addNewTodo = async (data) => {
    const res = await axios.post(API_URL, data);
    return res.data;
} 

const toggleTodo = async (id, data) => {
    const res = await axios.put(API_URL + id, data);
    return res.data;
} 

const deleteTodo = async (id) => {
    const res = await axios.delete(API_URL + id);
    return res.data;
} 

const apis = { getTodos, addNewTodo, toggleTodo, deleteTodo }; 
export default apis;