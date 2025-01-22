import React, { useState, FormEvent } from 'react'
import { useTodos } from '../store/TodoStore';

const TodoInput = () => {
  const [task, setTask] = useState('');
  const {handleAddTodo} = useTodos();

  function handleTodoSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(e);
    handleAddTodo(task);
    setTask('');
  }
  return (
    <>
      <form
        className='flex items-center self-stretch justify-center'
        onSubmit={handleTodoSubmit}>
        <input
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          placeholder='Add Task here...'
          className='border border-gray-300 px-2 py-1 rounded-sm'
          type="text"/>
        <button
          type='submit'
        >add</button>
      </form>
    </>
  )
}

export default TodoInput
