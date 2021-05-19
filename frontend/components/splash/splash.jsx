import React from 'react';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash' >
        <img src={window.banner} alt='people-with-shades' />
        <div className='text-overlay' >
          <div className='flex'>
            <h2 className='banner-title' >Try 5 frames at home for free</h2>
            <button id='men' >Shop Men</button>
            <button id='women' >Shop Women</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;