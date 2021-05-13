import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ id }) => {
  const accountButton = !id ? (
    <div className='side-r' >
      <Link to='/signin' className='nav-link'>Sign in</Link>
    </div>
    ) : (
    <div className='side-r' >
      <Link to='/account' className='nav-link'>Account</Link>
    </div >
  )

  
  return (
    <>
    <div className='ribbon' >
      <p className='ribbon' >The latest on shopping with us.</p>
    </div>
    <header className='nav-bar'>
      <div className='side-l' >
        <a 
          className='nav-link' 
          href='https://www.linkedin.com/in/jessica-uphoff-b2584b69/' 
          target="_blank">Jessica Uphoff Linkedin></a>
      </div>
      <h3>WEARBY PARKER</h3>
      {accountButton}
    </header>
    </>
  )
}

export default NavBar;
