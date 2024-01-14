import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import { useEffect } from 'react'
import TodoForm from "./components/TodoForm";
import TodoItem from './components/TodoItem';
function App() {
  const [Todos, setTodos] = useState([])

  const addTodo =(todo)=>{
    console.log(todo);
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}])
  }
  const DeleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !==id))
  }
  const UpdateTodo= (id,todo)=>{
    setTodos((prev)=>prev.map((todoi)=>todoi.id=== id?todo :todoi))
  }
  const ToggleTodo= (id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id === id? {...prevtodo,Checked:!prevtodo.Checked} :prevtodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos&&todos.length >0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(Todos))
  }, [Todos])

  return (
    <TodoProvider value={{addTodo,DeleteTodo,UpdateTodo,ToggleTodo,Todos}}> 
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {Todos.map((todo)=>(
                          <div className='w-full' key={todo.id}>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
