import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../features/date/dateSlice";
import { getWeek, getPrevWeek, getNextWeek, convertIntoString, DAYS } from "../../utils/calendar/calendar.js";
import { Button, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import './Calendar.css'




export default function Calendar() {
    const date = useSelector(state => state.date.value);
    const dispatch = useDispatch();

    const [week, setWeek] = useState(getWeek(date));
 
    const onMoveLeft = () => {
        setWeek(getPrevWeek(week[0].time));
    };

    const onMoveRight = () => {
        setWeek(getNextWeek(week[0].time));
    };

    const onPickDate = (date) => {
        dispatch(setDate({ date }));
    }

 

    return (
        <div className="calendar">
            <h2 className="calendar-title">
                {convertIntoString(week[0].year, week[0].month)}
            </h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {DAYS.map((day) => (
                            <th>{day}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <IconButton size="small" onClick={onMoveLeft}>
                                <NavigateBeforeIcon />
                            </IconButton>
                        </td>
                        {week.map((day) => (
                            <td>
                                <Button
                                    size="small"
                                    color={day.time === date ? "secondary" : "primary"}
                                    variant="contained"
                                    onClick={() => onPickDate(day.time)}
                                >
                                    {day.date}
                                </Button>
                            </td>
                        ))}
                        <td>
                            <IconButton size="small" onClick={onMoveRight}>
                                <NavigateNextIcon />
                            </IconButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
