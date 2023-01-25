import React, { useState} from "react";
import { Button, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";



export default function InputField({ onSubmit }) {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onClick = () => {
        if (inputValue.trim().length) {
            onSubmit(inputValue);
            setInputValue("");
        }
    };
   
    return (
        <Stack direction="row" spacing={2}>
            <TextField
                fullWidth
                label="What needs to be done?"
                value={inputValue}
                onChange={onInputChange}
            />
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={onClick}
            >
                Add
            </Button>
        </Stack>
    );
}
