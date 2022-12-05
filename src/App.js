import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleStatus } from "./features/todo/todoSlice";
import "./App.css";
import InputField from "./components/InputField/InputField";
import ListTodos from "./components/ListTodos/ListTodos";
import TodoInfo from "./components/TodoInfo/TodoInfo";



class App extends React.Component {
    render() {
        const { todos, addTodo, deleteTodo, toggleStatus} = this.props;
        return (
            <div className="container">
                <div className="section-todos">
                    <h1>todos</h1>
                    <ListTodos
                        todos={todos}
                        toggleStatus={toggleStatus}
                        deleteTodo={deleteTodo}
                    />
                    <InputField addTodo={addTodo} todos={todos} />
                    <TodoInfo todos={todos} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos.value,
});

const mapDispatchToProps = { addTodo, deleteTodo, toggleStatus }; 

export default connect(mapStateToProps, mapDispatchToProps)(App)