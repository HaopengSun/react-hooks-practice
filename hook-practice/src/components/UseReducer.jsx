import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTION = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

const reducer = function (todos, action){
  console.log(action)
  switch(action.type){
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTION.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, complete: !todo.complete}
        }
      })
    case ACTION.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
  }
}

const newTodo = function(name){
  return {id: Date.now(), name, complete: false}
}

const UseReducer = function (){
  const [name, setName] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  const handleSubmit = function(event){
    event.preventDefault()
    dispatch({type: ACTION.ADD_TODO, payload: {name}})
    setName('')
  }

  const toggle = function(id){
    dispatch({type: ACTION.TOGGLE_TODO, payload: {id}})
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={event => setName(event.target.value)}/>
        <h2>{name}</h2>
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggle={toggle} dispatch={dispatch}/>
      })}
    </div>
  )
}

export default UseReducer;