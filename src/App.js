import React from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import ListTodos from "./components/ListTodos/ListTodos";
import TodoInfo from "./components/TodoInfo/TodoInfo";
import Calendar from "./components/Calendar/Calendar";
import DateContainer from "./components/ContainerDate/ContainerDate";
import TodoContainer from "./components/ContainerTodo/ContainerTodo";

export default function App() {
    return (
        <div className="container">
            <div className="section-todos">
                <h1>todos</h1>
                <DateContainer>
                    {(date) => (
                        <>
                            <Calendar date={date} />
                            <TodoContainer
                                date={date}
                                children={(todos, addTodo) => (
                                    <>
                                        <ListTodos todoList={todos} date={date} />
                                        <InputField onSubmit={addTodo} />
                                        <TodoInfo todos={todos} date={date} />
                                    </>
                                )}
                            />
                        </>
                    )}
                </DateContainer>
            </div>
        </div>
    );
}
