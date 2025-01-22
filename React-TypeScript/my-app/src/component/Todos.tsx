import { useTodos } from "../store/StoreTodo"
import { useSearchParams } from "react-router-dom";
import { AiOutlineDelete  } from "react-icons/ai";
import style from '../App.module.css';


const Todos = () => {
  const {todos, toggleTodoAsCompleted, handleDeleteTodo} = useTodos();

  let filterData = todos;
  // console.log(filterData);
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
     <ul className={`list-group ${style.list}`}>
      {
        filterData.map((todo)=> {
          return <li 
            className={`list-group-item`}
            key={todo.id}>
              <div>
                <input 
                  type="checkbox"
                  id={`todo-${todo.id}`} 
                  checked={todo.completed}
                  onChange={()=>toggleTodoAsCompleted(todo.id)}
                  />
                <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
              </div>
            {
              todo.completed && <button 
              type="button"
              id={`todo-${todo.id}`}
              onClick={()=>handleDeleteTodo(todo.id)}
              ><AiOutlineDelete /></button>
            }
            
          </li>
        })
      }
     </ul>
    </>
  )
}

export default Todos
