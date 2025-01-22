import AddTodo from "./component/AddTodo"
import NavBar from "./component/NavBar"
import Todos from "./component/Todos"
import { AiOutlineFileDone   } from "react-icons/ai";
import style from './App.module.css';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  return (
    <div className={`${style.container} ${style.flexCenter}`}>
      <h2 
        className={`${style.heading} ${style.flexCenter}`}>
          <AiOutlineFileDone  />Todo - TypeScript + React<AiOutlineFileDone  /></h2>
      <NavBar />
      <AddTodo />  
      <Todos />
      <SpeedInsights />
    </div>
  )
}

export default App
