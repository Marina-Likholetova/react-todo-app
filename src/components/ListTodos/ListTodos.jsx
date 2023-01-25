import React from "react";
import { List } from "@mui/material";
import ItemTodo from "../ItemTodo/ItemTodo";



export default function ListTodos({todoList, date}) {
    return (
        <>
            <div className="todo-list">
                {todoList.length ? (
                    <>
                        <p className="title-secondary sub-title">
                            Your list for {new Date(date).toDateString()}
                        </p>
                        <List>
                            {todoList?.map((todo) => (
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
