import React, { useContext } from 'react'
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { TodoContext } from '../context/TodoProvider';

const Todo = (props) => {
    const todoContext = useContext(TodoContext);
    //console.log(todoContext);
    const {deleteTodo, setTodo} = todoContext;
    const {todo} = props;
    return (
        <>
          <li> <FaPencilAlt className="todo-pencil" onClick={() => setTodo(todo)} /> {todo.title} <FaTrashAlt className="todo-trash" onClick={() => deleteTodo(todo.id)} /></li>   
        </>
    )
}

export default Todo
