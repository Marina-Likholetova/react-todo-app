import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { Button, Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { deleteTodo } from "../../store/actions/todos";


const radioButtons = [
    { label: "All", value: "all" },
    { label: "Only done", value: "0" },
    { label: "Only undone", value: "1"},
];

const defaultValue = "all";


export default function TodoBar({todos}) {
    const [radioValue, setRadioValue] = useState(defaultValue);
    const dispatch = useDispatch();

    const onChange = (e) => {
        setRadioValue(e.target.value);
    };

    const onCleanUpTodos = () => {
        const deletedTodos =
            radioValue === "all"
                ? todos.map((todo) => todo.id)
                : todos.filter((todo) => todo.isCompleted === !Number(radioValue)).map((todo) => todo.id);
        
        dispatch(deleteTodo(deletedTodos));
    };

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
                <Button size="small" variant="contained" sx={{ fontSize: "10px" }} onClick={() => {}}>
                    Show
                </Button>
                <Button size="small" variant="contained" sx={{ fontSize: "10px" }} onClick={onCleanUpTodos}>
                    Clean
                </Button>
            </Stack>
        </Stack>
    );
}
