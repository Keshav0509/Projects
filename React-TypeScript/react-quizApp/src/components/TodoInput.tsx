import { useState, FormEvent } from 'react'

const TodoInput = () => {
  const [task, setTask] = useState('');
  setTask(task);
  function hadleOnSubmitTodo(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(e);
  }
  return (
    <form onSubmit={hadleOnSubmitTodo}>
      <input 
        onChange={(e)=>setTask(e.target.value)}
        value={task}
        type="text" />
      <button>add</button>
    </form>
  )
}

export default TodoInput
