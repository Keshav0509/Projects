import style from '../App.module.css';
// import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className={`${style.navBar} ${style.flexCenter}`}>
        <Link className='active' to="/">Home</Link>
        <Link className='active' to="/?todos=active">Active</Link>
        <Link className='active' to="/?todos=completed">Completed</Link>
      </nav>
    </>
  )
}

export default NavBar;
