import React, { useState } from "react";
import { connect } from 'react-redux';
import { addTodoRequest } from "./thunk";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import "./todos.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    
    return (
        <div className = "new-todo-form">
            <Input 
                className = "new-todo-input"
                id="outlined-basic" 
                placeholder = "Type your new todo here"             
                value = { inputValue } 
                onChange = { e => setInputValue(e.target.value) }
                variant="outlined" />
            <Button 
                onClick = {() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue); //checking duplicate todos
                    if(!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}                
                variant="contained" className="new-todo-button">Create Todo</Button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);