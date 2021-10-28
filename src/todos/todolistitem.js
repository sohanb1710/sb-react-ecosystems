import React from "react";
import Button from '@mui/material/Button';

const TodoListItem = ({ todo, onRemovePressed }) => {
    
    return(
        <div className = "todo-item-container">
            <h3> { todo.text } </h3>
            <div className = "buttons-container">
                <Button variant="contained" className="completed-button">Mark As Completed</Button>
                <Button 
                    onClick = {() => onRemovePressed( todo.text )}
                    variant="outlined" className="remove-button" >Remove
                </Button>
            </div>
        </div>
    );

};

export default TodoListItem;