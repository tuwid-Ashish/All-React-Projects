import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world bro" }]

}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((e) => e.id !== action.payload)

        }

    }

})

export const { addtodo, removeTodo } = TodoSlice.actions

export default TodoSlice.reducer 