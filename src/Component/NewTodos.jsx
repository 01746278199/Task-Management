import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../Context/GlobalContext'
import GetLocalData  from './GetLocalData/GetLocalData'

function NewTodos() {
 
  const [input,setInput] = useState('')
  const {dispatch} = useContext(TodoContext)
  const inputHandler = (e)=>{
        e.preventDefault()
        const newTodo ={
          id:Date.now(),
          task:input
        }
        if(input.trim() === ''){
          return input
        }
        setInput('')
        console.log(newTodo)
        dispatch({type:'ADD_TODO',payload:newTodo})

  }

   useEffect(() => {
       localStorage.setItem('input', JSON.stringify(input))
  }, [input])
  
  GetLocalData(input)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Task Management</h1>
      <form action="#" onSubmit={inputHandler}>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='what are you thinking ?..' />
        <button type='submit'>Add</button>
      </form>
      
    </div>
  )
}
export default NewTodos;