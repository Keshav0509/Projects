import { useState, FormEvent } from "react"

const AddTodo = () => {
  const [todo, setTodo] = useState('');

  function handleFormSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(e)
    handleAddTodo();
    setTodo('');
  }

  function handleAddTodo(){

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
