import React from "react";
import "./TodoInfo.css";


export default class TodoInfo extends React.Component {
    render() {
        const { todos } = this.props;
        const completedCount = todos.filter((todo) => !todo.isCompleted).length;

        return (
            <div className="todo-info">
                <p>{completedCount} item left</p>
            </div>
        );
    }
}
