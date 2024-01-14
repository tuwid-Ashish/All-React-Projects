//
 import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState(""); // Use useState correctly

    const { addTodo } = useTodo();

    const addItem = (e) => {
        e.preventDefault();

        console.log(todo);
        if (!todo) return; // Use `todo` instead of `Todo`
        addTodo({Todo:todo, checked: false });
        setTodo("");
    }

    return (
        <form onSubmit={addItem} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todo} // Use `todo` instead of `Todo`
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
