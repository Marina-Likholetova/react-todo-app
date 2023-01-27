import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { setDate } from "../../store/actions/date";
import { initialDate } from "../../utils/calendar/calendar";
import "./TodoInfo.css";



export default function TodoInfo({ todos, date }) {
    const restTodos = todos.filter(todo => !todo.isCompleted).length;
    const dispatch = useDispatch();

    const onBackToToday = () => {
        dispatch(setDate({date: initialDate}));
    }

  
    return (
        <div className="todo-info">
            <p>{restTodos} item left</p>
            <p>{new Date(date).toLocaleDateString()}</p>
            <Button
                size="small"
                variant="contained"
                disabled={date === initialDate}
                onClick={onBackToToday}
                sx={{fontSize: "10px" }}
            >
                Back to today
            </Button>
        </div>
    );
}
