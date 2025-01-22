// import {MouseEvent} from 'react'

import { Link } from "react-router-dom";


const TodoNav = () => {
  return (
    <div className="flex text-6xl text-[#12013d]">
      <Link to="/?todos=home">All</Link>
      <Link to="/?todos=statusActive">Active</Link>
      <Link to="/?todos=statusCompleted">Completed</Link>
    </div>
  )
}

export default TodoNav
