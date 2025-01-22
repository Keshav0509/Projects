import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoNav from './components/TodoNav'


function App() {
  
  return (
    <>
      <div className='max-w-screen-md m-auto'>
        <h1 className='text-6xl font-san font-extrabold text-center my-5 shadow-sm pb-10'>Todo Project with React + TypeScript</h1>
        <TodoInput />
        <TodoNav />
        <TodoList />
      </div>
    </>
  )
}

export default App
