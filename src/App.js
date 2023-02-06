import React from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import ContainerTodo from "./components/ContainerTodo/ContainerTodo";


export default function App() {
    return (
        <div className="container">
            <div className="section-todos">
                <h1>todos</h1>
                <Calendar /> 
                <ContainerTodo/>
            </div>
        </div>
    );
}
