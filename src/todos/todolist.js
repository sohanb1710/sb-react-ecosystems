import React from "react";
import { connect } from "react-redux";
import { removeTodo, markAsCompleteTodo } from "./actions";
import TodoListItem from "./todolistitem";
import NewTodoForm from "./newtodoform";

const TodoList = ({ todos = [], onRemovePressed, onMarkAsCompletedPressed }) => (
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

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onMarkAsCompletedPressed: text => dispatch(markAsCompleteTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);