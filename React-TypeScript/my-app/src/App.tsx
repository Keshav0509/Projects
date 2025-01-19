import AddTodo from "./component/AddTodo"
import Todos from "./component/Todos"

const App = () => {
  return (
    <div>
      <h2>Todo - TypeScript + React</h2>
      <AddTodo />  
      <Todos />
    </div>
  )
}

export default App
