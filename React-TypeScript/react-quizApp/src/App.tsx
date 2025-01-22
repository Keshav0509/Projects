import { FaCheckSquare } from "react-icons/fa";
import './App.css'
import TodoNav from "./components/TodoNav";
import TodoInput from "./components/TodoInput";

function App() {
  
  return (
    <>
     <h1 className='text-center text-7xl font-sans font-extrabold flex justify-center text-[#001824]'><FaCheckSquare />my todo app<FaCheckSquare /></h1>
     <TodoNav />
     <TodoInput />

    </>
  )
}

export default App
