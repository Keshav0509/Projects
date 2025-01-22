import { useState } from "react"
import { useTodos } from "../store/StoreTodo";
import style from '../App.module.css';
import { AiOutlinePlus } from "react-icons/ai";

const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const {handleAddTodo} = useTodos();

  function handleFormSubmit(){
    // e.preventDefault();
    // console.log(e)
    handleAddTodo(todo);
    setTodo('');
  }
  
  return (
    <div>
      <form 
        className={`${style.flexCenter} ${style.flexJustifyCenter}`}
        onSubmit={handleFormSubmit}>
        <input
        className={`${style.input}`}
        placeholder="Add Some Todo Here..."
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        type="text"/>  
        <button
          className={`${style.btn} ${style.flexCenter}`}
          // onClick={}
          type="submit"
        >
          <AiOutlinePlus/>add
        </button>
      </form>      
    </div>
  )
}

export default AddTodo
