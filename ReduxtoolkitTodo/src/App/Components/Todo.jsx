import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo,expoid } from '../../Features/Todo/TodoSlice';
function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <div className="btns">

                            <button   onClick={()=>dispatch(expoid(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 mx-3  focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"  >
                                    <polygon fill="#ff5" points="22,1 18.5,4.5 4,19 3,24 2,28 6,27 11,26 19.5,17.5 25.5,11.5 29,8"></polygon><polygon fill="#ff7575" points="29,8 25.5,11.5 22,8"></polygon><polygon fill="#ff9f9f" points="22,1 18.5,4.5 22,8"></polygon><polygon fill="#ffd72b" points="6,27 11,26 7.5,22.5"></polygon><polygon fill="#ff5" points="3,24 4,19 7.5,22.5"></polygon><polygon fill="#ffea3e" points="4,19 18.5,4.5 7.5,22.5"></polygon><polygon fill="#ff8f8f" points="29,8 22,8 22,1"></polygon><polygon fill="#ffea3e" points="7.5,22.5 3,24 6,27"></polygon><polygon fill="#ffca1e" points="19,11 18.5,4.5 25.5,11.5"></polygon><polygon fill="#ffca1e" points="3,24 2,28 5,26"></polygon><polygon fill="#ffb519" points="5,26 2,28 6,27"></polygon><polygon fill="#ffb519" points="7.5,22.5 19.5,17.5 11,26"></polygon><polygon fill="#ffb519" points="25.5,11.5 19.5,17.5 19,11"></polygon><polygon fill="#ffd72b" points="18.5,4.5 19,11 7.5,22.5"></polygon><polygon fill="#ffca1e" points="19,11 19.5,17.5 7.5,22.5"></polygon>
                                </svg>
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo

{/* <div>todos</div>
    {todos.map(todo=>(  
        <li key={todo.id}>{todo.text}
        <button onClick={()=> dispatch(removeTodo(todo.id))}>delete</button>
        </li>
    )
    )} */}