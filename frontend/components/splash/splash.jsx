import React from 'react';

class Splash extends React.Component {

  render() {
    return (
      <div className='splash' >
        <img src={window.banner} alt="whale" />
      <div className='text-overlay'>
        <h2>Try 5 frames at home for free</h2>
        <button>Shop Men</button>
        <button>Shop Women</button>
      </div>
      </div>
    )
  }
}

export default Splash;