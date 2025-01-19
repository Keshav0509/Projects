// import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/?todos=active">Active</Link>
        <Link to="/?todos=completed">Completed</Link>
      </nav>
    </>
  )
}

export default NavBar;
