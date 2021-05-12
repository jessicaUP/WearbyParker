import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser }) => {
  const display = currentUser ? (
    <div>
        <Link to='/account' className='nav-bar'>Account</Link>
    </div>
  ) : (
    <Link to='/signin' className='nav-bar'>Sign in</Link>
  )
  
  return (
    <header className='nav-bar'>
      <a href='https://www.linkedin.com/in/jessica-uphoff-b2584b69/' target="_blank">Jessica Uphoff Linkedin></a>
      <h3>WEARBY PARKER</h3>
      <div>
        {display}
      </div>
    </header>
  )
}

export default NavBar;
