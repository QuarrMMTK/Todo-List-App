import React from 'react'
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({id, text, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img onClick={() => {toggle(id)}} className='w-7' src={isComplete ? tick : not_tick} alt="tick" />
            <p className={`ml-4 text-[17px] ${isComplete ? 'line-through text-gray-500' : 'text-slate-700'}`}>{text}</p>
        </div> 
        <img onClick={() => deleteTodo(id)} className='w-3.5 cursor-pointer' src={delete_icon} alt="delete" />
    </div>
  )
}

export default TodoItems