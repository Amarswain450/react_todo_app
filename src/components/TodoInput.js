import React, { useContext, useEffect, useRef, useState } from 'react'
import { TodoContext } from '../context/TodoProvider';
const shortid = require('shortid');

const TodoInput = () => {
    const inputRef = useRef();
    const todoContext = useContext(TodoContext);
    // console.log(todoContext);
    const {createTodo, currentState, updateTodo} = todoContext;
    const [title, setTitle] = useState("");

    useEffect(() => {
        if(currentState !== null){
            setTitle(currentState.title);
            inputRef.current.focus();
        }
    }, [currentState]);

    const submitHandler = (e) => {
        e.preventDefault();
        if(currentState !== null){
            const updated_todo = {
                id: currentState.id,
                title,
                completed: currentState.completed
            }
            updateTodo(updated_todo);
        }else{
            const new_todo = {
                id: shortid.generate(),
                title,
                completed: false
            }
            createTodo(new_todo);
        }
        setTitle("");
        inputRef.current.blur();
    }
    return (
        <>
            <form action="" onSubmit={submitHandler}>
                    <input type="text"
                     className={`todo-input ${currentState != null ? `update` : null}`}
                      placeholder="Enter Your Todo"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      ref={inputRef}
                       />
            </form>  
        </>
    )
}

export default TodoInput
