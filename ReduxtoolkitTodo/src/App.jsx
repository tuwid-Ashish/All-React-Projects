import { useState } from 'react'
import AddTodo from './App/Components/addTodo'
import Todo from './App/Components/Todo'
import   './App.css'
function App() {
  return (
    <>
     <h1>Current Learning Redux Toolkit</h1>
      <AddTodo/>       
      <Todo/>       
    </>
  )
}

export default App
