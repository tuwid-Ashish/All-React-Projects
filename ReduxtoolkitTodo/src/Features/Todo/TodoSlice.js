import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:2,text:"my love code",editable:false}]
}



export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),    
                text: action.payload,
                editable:false
            }
            state.todos.push(todo)
         },
         removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
         },
          
          
         updateTodo:(state,action) =>{
            console.log("its work");
            state.todos.map((todo)=> todo.editable?todo.text=action.payload:todo)
        },
        expoid:(state,action)=>{
            state.todos.map((todo)=> todo.id === action.payload?todo.editable=true:todo)
            

        }
                
          
    }
})

export const {addTodo, removeTodo,updateTodo,expoid} = TodoSlice.actions

export const TodoReducer = TodoSlice.reducer