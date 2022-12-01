import React from "react";
import { List } from "@mui/material";
import Todo from "../ItemTodo/ItemTodo";



export default class ListTodos extends React.Component {
    render() {
        const { todos, toggleStatus, deleteTodo } = this.props;
        return (
            <List>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        {...todo}
                        toggleStatus={toggleStatus}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </List>
        );
    }
}
