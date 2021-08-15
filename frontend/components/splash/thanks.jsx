import React from 'react';
import { Link } from 'react-router-dom';

class Thanks extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    let { deleteCart, cartId } = this.props;
    return (
      <div className='thanks' >
        <button onClick={() => deleteCart(cartId)}></button>
      </div>
    )
  }
}

export default Thanks;