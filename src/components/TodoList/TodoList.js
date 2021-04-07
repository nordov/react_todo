import React from 'react';
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ todos = [{text: "Wake up"}, {text: "Brush my teeth"}, {text: "Drink coffee"}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map( todo => <TodoListItem todo={todo} /> ) }
    </div>
);

export default TodoList;