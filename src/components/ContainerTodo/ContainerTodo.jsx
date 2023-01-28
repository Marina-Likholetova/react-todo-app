import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todos";
import ListTodos from "../ListTodos/ListTodos";
import InputField from "../InputField/InputField"
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoBar from "../TodoBar/TodoBar";


export default function ContainerTodo() {
    const [todoList, date] = useSelector((state) => [
        state.todos.filter((todo) => todo.date === state.date),
        state.date,
    ]);
    const dispatch = useDispatch();


    const onAddTodo = (title) => {
        dispatch(addTodo({ title, date }));
    };


    return (
        <>
            <ListTodos todos={todoList} date={date} />
            <InputField onSubmit={onAddTodo} />
            <TodoInfo todos={todoList} date={date} />
            <TodoBar todos={todoList} />
        </>
    );
}
