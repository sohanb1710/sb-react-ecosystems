import React, { useState } from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import "./todos.css";

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div className = "new-todo-form">
            <Input 
                id="outlined-basic" 
                placeholder = "Type your new todo here"             
                value = { inputValue } 
                onChange = { e => setInputValue(e.target.value) }
                variant="outlined" />
            <Button variant="contained" className="create-todo-button">Create Todo</Button>
        </div>
    );
};

export default NewTodoForm;