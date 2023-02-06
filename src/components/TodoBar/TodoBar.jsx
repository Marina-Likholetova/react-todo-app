import React, { useState, useEffect} from "react";
import { useDispatch} from "react-redux";
import { Button, Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { setTodoFilter } from "../../store/actions/filter";

const radioButtons = [
    { label: "All", value: "all" },
    { label: "Only done", value: "done" },
    { label: "Only undone", value: "undone" },
];

const defaultValue = "all";



export default function TodoBar({ onCleanUpTodos }) {
    const [radioValue, setRadioValue] = useState(defaultValue);
    const dispatch = useDispatch();

    const onChange = (e) => {
        setRadioValue(e.target.value);
    };

    const onShowTodos = () => {
        dispatch(setTodoFilter(radioValue));
    };

    const onCleanTodos = () => {
        onCleanUpTodos(radioValue);
    }

    useEffect(() => {
        return () => {
            dispatch(setTodoFilter(defaultValue));
        };
    }, []);

    
    return (
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <FormControl>
                <RadioGroup row defaultValue={defaultValue} name="radio-buttons-group" onChange={onChange}>
                    {radioButtons.map((btn) => (
                        <FormControlLabel
                            key={Math.random()}
                            sx={{
                                ".MuiFormControlLabel-label": {
                                    fontSize: "10px",
                                },
                            }}
                            value={btn.value}
                            control={<Radio size="small" />}
                            label={btn.label}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Button size="small" variant="contained" sx={{ fontSize: "10px" }} onClick={onShowTodos}>
                    Show
                </Button>
                <Button size="small" variant="contained" sx={{ fontSize: "10px" }} onClick={onCleanTodos}>
                    Clean
                </Button>
            </Stack>
        </Stack>
    );
}
