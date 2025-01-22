import { createContext, ReactNode, useContext, useState } from "react"

export type TodoProviderProps = {
  children: ReactNode;
}

export type Todos = {
  id: string,
  task: string,
  completed: boolean,
  date: Date
}

export type TodoContext = {
  todo: Todos[],
  handleAddTodo: (task: string) => void,
  handleDeleteTodo: (id: string) => void,
  handleMarkCompleteTodo: (id: string) => void
}

export const todoContext = createContext<TodoContext | null>( null )

export function TodoProvider ({children}: TodoProviderProps){
  // todo list here
  const [todos, setTodos] = useState<Todos[]>(()=>{
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todos[];
    } catch (error) {
      return[]
    }
  });
  //add new todo in todos
  function handleAddTodo(task: string){
    if(task.trim() !== ''){
      setTodos((prevTodos)=>{
        const newTodos: Todos[] = [{
          id: Math.random().toString(),
          task: task,
          completed: false,
          date: new Date()
        }, ...prevTodos]

        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      })
    }else{
      alert("Todo can't accecpt spaces or empty task... :(")
    }
  }
  //handle deleteing the completed todo.
  function handleDeleteTodo(id: string){
    setTodos((prevTodos)=>{
      const newTodos = prevTodos.filter((todo)=> todo.id !== id)
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    })
  }
  // handle todoComplete
  function handleMarkCompleteTodo(id: string){
    setTodos((prevTodos)=>{
      const newTodos = prevTodos.map((todo)=>{
        return todo.id === id ? {...todo, completed: !todo.completed} : todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    })
  }
  // providing the whole todo list with functionality...
  return <todoContext.Provider value={
    { todos, 
      handleAddTodo,
      handleDeleteTodo,
      handleMarkCompleteTodo
    }}>
      {children}
  </todoContext.Provider>
}
// consumer & making the custom hook...
export function useTodos(){
  const todoCunsumer = useContext(todoContext);
  if(!todoCunsumer){
    throw new Error("useTodos used outSide of the Provider...")
  }
  return todoCunsumer;
}
