import { createContext, ReactNode, useContext, useState } from "react";

export type TodoProviderProps = {
  children: ReactNode
}

export type Todos ={
  id: string,
  task: string,
  completed: boolean,
  createdAt: Date
}

export type TodosContext = {
  todos: Todos[],
  handleAddTodo: (task: string) => void,
  toggleTodoAsCompleted: (id: string) => void
  handleDeleteTodo: (id: string) => void
}

export const todosContext = createContext<TodosContext | null>(null);

export function TodoProvider ({children}: TodoProviderProps){
  const [todos, setTodos] = useState<Todos[]>([]);

  function handleAddTodo(task: string){
    setTodos((prev) => {
      const newTodos: Todos[] =[
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date()
        },
        ...prev
      ]
      // console.log(prev);
      // console.log(newTodos);
      return newTodos
    })
  }
  // complete status or toggle complete or mark complete
  function toggleTodoAsCompleted(id: string){
    setTodos((prev)=>{
      const newTodos = prev.map((todo)=>{
        if(todo.id !== id){
          return todo;
        }else{
          return {...todo, completed: !todo.completed};
        }
      });

      return newTodos;
    })
  }

  // delete todo
  function handleDeleteTodo(id: string){
    setTodos((prev)=>{
      const newTodos = prev.filter(todo => todo.id !== id)
      return newTodos;
    })
  }

  return<todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleDeleteTodo}}>
    {children}
  </todosContext.Provider>
}

// consumer
export function useTodos(){
  const todoConsumer = useContext(todosContext);
  if(!todoConsumer){
    throw new Error("useTodos used outSide of Provider")
  }

  return todoConsumer;
}
