import React from 'react';
import Links from './links';

class Thanks extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    let { deleteCart, cartId, closeModal } = this.props;
    return (
      <div className='thanks' onClick={() => closeModal()}>
        <div className='thanks-cont' onClick={(e) => e.stopPropagation()}>
          <button className='icon-button' id='thanks-exit' onClick={() => closeModal()}>X</button>
          <Links type='thanks' />
          <div className='thanks-buttons' >
            {/* <button onClick={() => closeModal()}>Continue 'shopping' ;)</button> */}
            <button onClick={() => deleteCart(cartId)}>Clear cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Thanks;