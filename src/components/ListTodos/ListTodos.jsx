import React from "react";
import { List } from "@mui/material";
import ItemTodo from "../ItemTodo/ItemTodo";

export default function ListTodos({ todos, date }) {
    return (
        <>
            <div className="todo-list">
                {todos.length ? (
                    <>
                        <p className="title-secondary sub-title">
                            Your list for {new Date(date).toDateString()}
                        </p>
                        <List>
                            {todos?.map((todo) => (
                                <ItemTodo key={todo.id} {...todo} />
                            ))}
                        </List>
                    </>
                ) : (
                    <p className="title-secondary">No todos for this date...</p>
                )}
            </div>
        </>
    );
}
