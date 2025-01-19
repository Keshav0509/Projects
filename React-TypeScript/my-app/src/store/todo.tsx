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
  handleAddTodo: (task: string) => void
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
      return newTodos
    })
  }

  return<todosContext.Provider value={{todos, handleAddTodo}}>
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
