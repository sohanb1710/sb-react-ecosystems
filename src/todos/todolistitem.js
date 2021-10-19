import React from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const TodoListItem = ({ todo }) => {
    <div className = "todo-item-container">
        <h3> { todo.text } </h3>
        <div className = "buttons-container">
            <Button variant="contained" >Mark As Completed</Button>
            <Button variant="outlined" >Remove</Button>
        </div>
    </div>
};

export default TodoListItem;