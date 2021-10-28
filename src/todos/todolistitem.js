import React from "react";
import Button from '@mui/material/Button';

const TodoListItem = ({ todo, onRemovePressed, onMarkAsCompletedPressed }) => {
    
    return(
        <div className = "todo-item-container">
            <h3 className="todo-text"> { todo.text } </h3>
            <div className = "buttons-container">
                { todo.isCompleted ? null : <Button 
                    onClick = {() => onMarkAsCompletedPressed( todo.text )}
                    variant="contained" className="completed-button">Mark As Completed
                    </Button> }                
                <Button 
                    onClick = {() => onRemovePressed( todo.text )}
                    variant="outlined" className="remove-button" >Remove
                </Button>
            </div>
        </div>
    );

};

export default TodoListItem;