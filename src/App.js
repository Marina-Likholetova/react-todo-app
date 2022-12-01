import React from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import ListTodos from "./components/ListTodos/ListTodos";
import TodoInfo from "./components/TodoInfo/TodoInfo";



export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    }

    addTodo = (title) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: Date.now(),
                    title,
                    isCompleted: false,
                },
            ],
        });
    };

    toggleStatus = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            ),
        });
    };

    deleteTodo = (id) => {
        this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
    };

    render() {
        const { todos } = this.state;
        
        return (
            <div className="container">
                <div className="section-todos">
                    <h1>todos</h1>
                    <ListTodos
                        todos={todos}
                        toggleStatus={this.toggleStatus}
                        deleteTodo={this.deleteTodo}
                    />
                    <InputField addTodo={this.addTodo} todos={todos} />
                    <TodoInfo todos={todos} />
                </div>
            </div>
        );
    }
}
