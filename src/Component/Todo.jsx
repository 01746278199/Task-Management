import React, { useContext } from 'react'
import { TodoContext } from '../Context/GlobalContext'

function Todo({todo}) {
  const {dispatch} = useContext(TodoContext)
  const {task} = todo
  const delTodo =(id)=>{
      dispatch({type:'DELETE_TODO',payload:id})
  }
  return (
      
     <div className='view-container'>
     <p>{task}</p>
     <button>Edit</button>
      <button className='deleteBtn' onClick={()=>delTodo(todo.id)}>delete</button>
    </div>
  )
}

export default Todo;