import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../../store/actions/todos";
import ListTodos from "../ListTodos/ListTodos";
import InputField from "../InputField/InputField";
import TodoInfo from "../TodoInfo/TodoInfo";
import TodoBar from "../TodoBar/TodoBar";
import { filterBy } from "../../utils/filter/filterTodosBy";
import { setTodos } from "../../store/actions/todos";
import { convert } from "../../utils/calendar/calendar";


export default function ContainerTodo() {
    // const [todoList, date] = useSelector((state) => [
    //     state.todos.filter((todo) => {
    //         if (state.filter !== "all") {
    //             return (
    //                 (state.filter === "done" && todo.date === state.date && todo.isCompleted) ||
    //                 (state.filter === "undone" && todo.date === state.date && !todo.isCompleted)
    //             );
    //         } else {
    //             return todo.date === state.date;
    //         }
    //     }),
    //     state.date,
    // ]);

    const [todos, date, filter, isLoading] = useSelector((state) => [
        state.todos.value.filter(todo => convert(todo.date) === state.date),
        state.date,
        state.filter,
        state.todos.isLoading
    ]);

    const dispatch = useDispatch();

    const todoList = useMemo(() => filterBy(todos, filter), [todos, filter]);

    const onAddTodo = (title) => {
        dispatch(addTodo({ title, date }));
    };

    const onCleanUpTodos = (filter) => {
        dispatch(deleteTodo(filterBy(todos, filter).map((todo) => todo.id)));
    };

    useEffect(() => {
        dispatch(setTodos());
    }, [])


    return (
        <>
            <ListTodos todos={todoList} date={date} filter={filter} />
            {isLoading && <div>Loading...</div> }
            <InputField onSubmit={onAddTodo} />
            <TodoInfo todos={todos} date={date} />
            <TodoBar onCleanUpTodos={onCleanUpTodos} />
        </>
    );
}
