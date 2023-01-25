import React from "react";
import "./TodoInfo.css";


export default function TodoInfo({ todos, date }) {
    const restTodos = todos.filter(todo => !todo.isCompleted).length;
  
    return (
        <div className="todo-info">
            <p>{restTodos} item left</p>
            <p>{new Date(date).toLocaleDateString()}</p>
        </div>
    );
}
