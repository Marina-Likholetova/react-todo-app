import React from "react";
import { useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./ItemTodo.css";
import { deleteTodo, toggleStatus } from "../../app/actions/todos";



export default function ItemTodo({ title, id, isCompleted }) {
    const dispatch = useDispatch();

    const onToggleStatus = () => {
        dispatch(toggleStatus({ id }))
    }

    const onDeleteTodo = () => {
        dispatch(deleteTodo({ id }))
    }


    return (
        <>
            <ListItem
                className={`item-todo ${isCompleted ? "item-todo-success" : ""}`}
                secondaryAction={
                    <IconButton
                        className="delete-btn"
                        edge="end"
                        aria-label="delete"
                        color="error"
                        onClick={onDeleteTodo}
                    >
                        <DeleteForeverIcon />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            className={`checkbox${isCompleted ? "-success" : ""}`}
                            checked={isCompleted}
                            tabIndex={-1}
                            color="success"
                            inputProps={{ "aria-labelledby": id }}
                            onClick={onToggleStatus}
                        />
                    </ListItemIcon>
                    <ListItemText id={id} primary={title} />
                </ListItemButton>
            </ListItem>
        </>
    );

}



