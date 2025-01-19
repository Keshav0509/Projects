import AddTodo from "./component/AddTodo"
import NavBar from "./component/NavBar"
import Todos from "./component/Todos"

const App = () => {
  return (
    <div>
      <h2>Todo - TypeScript + React</h2>
      <NavBar />
      <AddTodo />  
      <Todos />
    </div>
  )
}

export default App
