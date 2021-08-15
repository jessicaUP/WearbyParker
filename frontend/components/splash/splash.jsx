import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash' >
        <img src={window.banner} alt='people-with-shades' />
        <div className='text-overlay' >
          <div className='flex'>
            <h2 className='banner-title' >Try 5 frames at home for free</h2>
<<<<<<< HEAD
            <div className='button-genders'>
              <Link to='/genders/2' className='splash-mens'><button id='men' >Shop Men</button></Link>
              <Link to='/genders/1' className='splash-womens'><button id='women' >Shop Women</button></Link>
            </div>
=======
            <Link to='/genders/2' className='splash-mens'><button id='men' >Shop Men</button></Link>
            <Link to='/genders/1' className='splash-womens'><button id='women' >Shop Women</button></Link>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;