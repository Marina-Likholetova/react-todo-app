import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
    getWeek,
    getPrevWeek,
    getNextWeek,
    convertIntoString,
    DAYS,
    initialDate,
} from "../../utils/calendar/calendar.js";
import generateRandomNumber from "../../utils/helpers/generateRandomNumber";
import { setDate } from "../../store/actions/date";
import "./Calendar.css";




export default function Calendar() {
    const date = useSelector(state => state.date);
    const [week, setWeek] = useState(() => getWeek(initialDate));
    const dispatch = useDispatch();
    

    const onMoveLeft = () => {
        setWeek(getPrevWeek(week[0].time));
    };

    const onMoveRight = () => {
        setWeek(getNextWeek(week[0].time));
    };

    const onPickDate = (newDate) => {
        if (newDate !== date) {
            dispatch(setDate({ date: newDate }));
        }  
    };
    

    useEffect(() => {
        onPickDate(initialDate);
    }, []);

    useEffect(() => {
        setWeek((prevWeek) => (!prevWeek.find((day) => day.time === date) ? getWeek(date) : prevWeek));
    }, [date])



    return (
        <div className="calendar">
            <h2 className="calendar-title">{convertIntoString(week[0].year, week[0].month)}</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {DAYS.map((day) => (
                            <th key={generateRandomNumber()}>{day}</th>
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
                            <td key={generateRandomNumber()}>
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


