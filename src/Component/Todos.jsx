import React, { useContext } from 'react'
import { TodoContext } from '../Context/GlobalContext'
import Todo from './Todo';

function Todos() {
  const {state} = useContext(TodoContext)
  return (
    <div>
        {
          state.todos && state.todos.map((todo)=> <Todo key={todo.id} todo= {todo}/>)
        }
    </div>
  )
}

export default Todos