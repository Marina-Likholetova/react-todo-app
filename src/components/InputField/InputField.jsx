import React, { useState, useEffect} from "react";
import { Button, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useScrollIntoView from "../../hooks/useScrollIntoView";



export default function InputField({ onSubmit }) {
    const [inputValue, setInputValue] = useState("");
    const [inputRef, scrollIntoView] = useScrollIntoView();
  

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length) {
            onSubmit(inputValue);
            setInputValue("");
        }
    };

    useEffect(() => {
        !inputValue && scrollIntoView();
    }, [inputValue]);


    return (
        <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
                <TextField
                    fullWidth
                    label="What needs to be done?"
                    value={inputValue}
                    onChange={onInputChange}
                    inputRef={inputRef}
                />
                <Button variant="contained" type="submit" startIcon={<AddIcon />}>
                    Add
                </Button>
            </Stack>
        </form>
    );
}
