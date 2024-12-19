import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {

    const [todoList, setTodoList] = useState([]);

    const inputRef = useRef();

    const addFunction = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === ""){
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteFunction = (id) => {
        setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
    }

    const toggle = (id) => {
        setTodoList((prevTodo) =>{
            return prevTodo.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }


    useEffect(() => {
        console.log(todoList);
    }, [todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

        {/* Title */}
        
        <div className='flex items-center mt-7 gap-2'>
            <img src={todo_icon} alt="todo-icon" className='w-8' />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

        {/* Input Field */}
        
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" name="" id="" placeholder='Add Your Task' />
            <button onClick={addFunction} className='border-none rounded-full bg-range-600 w-32 h-14 text-white text-lg font-medium cursor-pointer bg-orange-600 hover:bg-orange-500'>Add Task</button>
        </div>

        {/* Todo - Lists */}

        <div>
            {todoList.map((item, index)=> {
                return <TodoItems 
                key={index} id={item.id} text={item.text} isComplete={item.isComplete} deleteTodo={deleteFunction} toggle={toggle} />
            })}
        </div>

    </div>
  )
}

export default Todo