import React from 'react'

import Todos from './Component/Todos'
import NewTodos from './Component/NewTodos'
import TodoProvider from './Component/Provider/TodoProvider'


function App() {
  return (
    <TodoProvider>
    <div className='main-container'>
      <div>
      <NewTodos/>
      <Todos/>
      </div>
      
    </div>
    </TodoProvider>
  )
}

export default App