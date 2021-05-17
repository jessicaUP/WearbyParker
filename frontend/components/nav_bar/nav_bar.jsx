import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.currentUser;
  }

  
  render() {
    const accountButton = (
      this.props.currentUser ? (
        <div className='side-r' >
          <Link to='/account' className='nav-link'>Account</Link>
        </div >
        ) : (
        <div className='side-r' >
          <Link to='/signin' className='nav-link'>Sign in</Link>
        </div>
        )
      )
    
    return (
    <div className='total-menu'>
      <div className='ribbon' >
        <p className='ribbon' >The latest on shopping with us.</p>
      </div>

      <div className='nav-bar'>
        <div className='side-l' >
          <a 
            className='nav-link' 
            href='https://www.linkedin.com/in/jessica-uphoff-b2584b69/' 
            target="_blank">Jessica Uphoff Linkedin></a>
        </div>
        <h3>WEARBY PARKER</h3>
          {accountButton}
      </div>
        <div className='nav-bottom'>
          <button>Home Try-on</button>
          <button>Eyeglasses</button>
          <button>Sunglasses</button>
        </div>
    </div>
    )
  }
}

export default NavBar;
