import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ id }) => {
  const accountButton = !id ? (
    <Link to='/signin' className='account-button'>Sign in</Link>
    ) : (
    <Link to='/account' className='account-button'>Account</Link>
  )

  

  
  return (
    <header className='nav-bar'>
      <a href='https://www.linkedin.com/in/jessica-uphoff-b2584b69/' target="_blank">Jessica Uphoff Linkedin></a>
      <h3>WEARBY PARKER</h3>
      <div>
        {accountButton}
      </div>
    </header>
  )
}

export default NavBar;
