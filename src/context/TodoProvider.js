import React, { createContext, useReducer } from 'react'
import { CREATE_TODO, DELETE_TODO, SET_TODO, UPDATE_TODO } from './constants';

export const TodoContext = createContext();

//initialState
const initialState = {
    todos: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          }
    ],
    currentState: null
}


//reducer
const todoReducer = (state, action) => {
    switch(action.type){
      case SET_TODO:
        return{
          ...state,
          currentState: action.payload
        }
      case CREATE_TODO: 
      return{
        ...state,
        todos: [action.payload, ...state.todos]
      }
      case UPDATE_TODO:
        return{
          ...state,
          todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
        }
      case DELETE_TODO:
        return{
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload)
        }
        default:
            return state
    }
}

const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    //actions
    const setTodo = (todo) => {
      dispatch({
        type: SET_TODO,
        payload: todo
      })
    }

    const createTodo = (todo) => {
      dispatch({
        type: CREATE_TODO,
        payload: todo
      });
    }

    const updateTodo = (todo) => {
      dispatch({
        type: UPDATE_TODO,
        payload: todo
      })
    }

    const deleteTodo = (id) => {
      dispatch({
        type: DELETE_TODO,
        payload: id
      })
    }

    return (
        <TodoContext.Provider value={
          {todos: state.todos, 
          currentState: state.currentState, 
          setTodo,
          createTodo,
          updateTodo,
          deleteTodo
          }
          }>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
