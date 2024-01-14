import { createContext, useContext } from "react"

export const TodoContext = createContext({
    Todos:[
    {
        id:1,
        Todo:"todo msg",
        Checked: false
    }
],
   addTodo:(Todo)=>{},
   UpdateTodo:(id,Todo)=>{},
   DeleteTodo:(id)=>{},
   ToggleTodo:(id)=>{}

})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=>{
    return useContext(TodoContext)
}