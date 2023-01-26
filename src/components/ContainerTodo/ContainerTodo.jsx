import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../app/actions/todos";

export default function ContainerTodo({ children }) {
    const [todoList, date] = useSelector((state) => [
        state.todos.filter((todo) => todo.date === state.date),
        state.date,
    ]);
    const dispatch = useDispatch();

    const onAddTodo = (title) => {
        dispatch(addTodo({ title, date }));
    };

    return <>{children(todoList, date, onAddTodo)}</>;
}
