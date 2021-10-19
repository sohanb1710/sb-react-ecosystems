import React from "react";
import TodoListItem from "./todolistitem";
import NewTodoForm from "./newtodoform";

const TodoList = ({ todos = [] }) => (
    <div className = "list-wrapper">
        <NewTodoForm />
        { todos.map(todo => <TodoListItem todo = { todos} />)}
    </div>
);

export default TodoList;