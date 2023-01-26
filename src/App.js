import React from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import ListTodos from "./components/ListTodos/ListTodos";
import TodoInfo from "./components/TodoInfo/TodoInfo";
import Calendar from "./components/Calendar/Calendar";
import ContainerTodo from "./components/ContainerTodo/ContainerTodo";


export default function App() {
    return (
        <div className="container">
            <div className="section-todos">
                <h1>todos</h1>
                <Calendar />
                <ContainerTodo>
                    {(todos, date, onSubmit) => (
                        <>
                            <ListTodos todos={todos} date={date} />
                            <InputField onSubmit={onSubmit}/>
                            <TodoInfo todos={todos} date={date} />
                        </>
                    )}
                </ContainerTodo>
            </div>
        </div>
    );
}
