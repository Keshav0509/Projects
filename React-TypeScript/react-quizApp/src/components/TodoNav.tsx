// import {MouseEvent} from 'react'

import { Link } from "react-router-dom";


const TodoNav = () => {
  return (
    <div>
      <Link to="/?home">All</Link>
      <Link to="/?statusActive">Active</Link>
      <Link to="/?statusCompleted">Completed</Link>
    </div>
  )
}

export default TodoNav
