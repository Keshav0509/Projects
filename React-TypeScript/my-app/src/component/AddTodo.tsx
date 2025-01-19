import { useState, FormEvent } from "react"
import { useTodos } from "../store/todo";

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const {handleAddTodo} = useTodos();

  function handleFormSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    // console.log(e)
    handleAddTodo(todo);
    setTodo('');
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        type="text"/>  
        <button
          // onClick={}
          type="submit"
        >
          add
        </button>
      </form>      
    </div>
  )
}

export default AddTodo
