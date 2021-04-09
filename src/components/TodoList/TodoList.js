import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import TodoListItem from '../TodoListItem/TodoListItem';
import { removeTodo } from "../actions";
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map( todo => <TodoListItem todo={todo} onRemovePressed = { onRemovePressed } /> )}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapdispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapdispatchToProps)(TodoList);