import { useTodos } from "../store/StoreTodo"
import { useSearchParams } from "react-router-dom";


const Todos = () => {
  const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();

  let filterData = todos;

  const [searchParams] = useSearchParams();
  const todoData = searchParams.get("todos");
  // console.log("console here => "+todoData);
  if(todoData === "active"){
    filterData = filterData.filter((todo)=> !todo.completed)
  }
  if(todoData === "completed"){
    filterData = filterData.filter((todo)=> todo.completed)
  }

  return (
    <>
     <ul>
      {
        filterData.map((todo)=> {
          return <li key={todo.id}>
            <input 
              type="checkbox"
              id={`todo-${todo.id}`} 
              checked={todo.completed}
              onChange={()=>toggleTodoAsCompleted(todo.id)}
              />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {
              todo.completed && <button 
              type="button"
              id={`todo-${todo.id}`}
              onClick={()=>handleDeleteTodo(todo.id)}
              >delete</button>
            }
            
          </li>
        })
      }
     </ul>
    </>
  )
}

export default Todos
