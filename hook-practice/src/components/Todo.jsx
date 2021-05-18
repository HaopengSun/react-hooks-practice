import React from 'react'
import { ACTION } from './UseReducer'

export default function Todo (props){
  console.log('todo component:', props.todo)
  const color = props.todo.complete ? 'green' : 'red'
  const name = props.todo.name
  return (
    <div>
      <span style={{ color }}>{name}</span>
      <button onClick={() => {
        props.toggle(props.todo.id)
      }}>toggle</button>
      <button onClick={() => props.dispatch({ type: ACTION.DELETE_TODO, payload: {id: props.todo.id}})}>delete</button>
    </div>
  )
}

// do object destruction directly
// function Todo({todo, toggle, dispatch}){}