import React from 'react'
import { Todos, useTodos } from '../store/TodoStore'
import { useSearchParams } from 'react-router-dom';
import { AiOutlineDelete  } from "react-icons/ai";

const TodoList = () => {
  const {todos, handleDeleteTodo, handleMarkCompleteTodo} = useTodos();

  let filterTodo: Todos[] = todos;
  const [searchParams] = useSearchParams();
  const todoData = searchParams.get("todos");
  switch(todoData){
    case('statusActive'):
      filterTodo = filterTodo.filter((todo: Todos)=>!todo.completed);
      break;
    case('statusCompleted'):
      filterTodo = filterTodo.filter((todo: Todos)=> todo.completed);
      break;
    default:
      filterTodo = todos;
      // filterTodo.reverse();
      break;
  }
  return (
    <>
      <ul>
        {
          filterTodo.map((todo, index)=>{
            return (
              <li
                className='flex justify-between' 
                key={todo.id}>
                <div className='flex justify-between max-w-[50px]'>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={()=>handleMarkCompleteTodo(todo.id)}
                    />
                    <div>{ index + 1}</div>
                </div>
                <div className='flex justify-between'>
                  <div>{todo.task}</div>
                  <div>{todo.completed ? 'Completed' : 'Pending'}</div>
                  <button
                    onClick={()=>handleDeleteTodo(todo.id)}
                  ><AiOutlineDelete /></button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default TodoList
