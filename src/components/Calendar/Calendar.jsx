import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Button, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { getWeek, getPrevWeek, getNextWeek, convertIntoString, DAYS, convert } from "../../utils/calendar/calendar.js";
import generateRandomNumber from "../../utils/helpers/generateRandomNumber";
import { setDate } from "../../app/actions/date";
import "./Calendar.css";



export default function Calendar({date}) {
    const [week, setWeek] = useState(getWeek(date));
    const dispatch = useDispatch();


    const onMoveLeft = () => {
        setWeek(getPrevWeek(week[0].time));
    };

    const onMoveRight = () => {
        setWeek(getNextWeek(week[0].time));
    };

    const onPickDate = (date) => {
        dispatch(setDate({ date }));
    };

    useEffect(() => {
        const currentDate = convert(Date.now());
        onPickDate(currentDate);
        return () => {
            setWeek(getWeek(currentDate));
        }
    }, []);


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


