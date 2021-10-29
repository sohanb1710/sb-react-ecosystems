import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadTodos, removeTodoRequest, updateRequest } from "./thunk";
import TodoListItem from "./todolistitem";
import NewTodoForm from "./newtodoform";

const TodoList = ({ todos = [], onRemovePressed, onMarkAsCompletedPressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos()
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className = "list-wrapper">
        <NewTodoForm />
        { todos.map(todo => 
            <TodoListItem 
                todo = { todo } 
                onRemovePressed = { onRemovePressed } 
                onMarkAsCompletedPressed = { onMarkAsCompletedPressed }
            />
        )}
        </div>
   );
   return isLoading ? loadingMessage : content;
   
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onMarkAsCompletedPressed: id => dispatch(updateRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);