import React from 'react';
import Links from './links';

class Thanks extends React.Component {
  constructor(props) {
    super(props);

    this.clearCart = this.clearCart.bind(this);

  }

  clearCart(cartId) {
    return () => {
      this.props.closeModal();
      this.props.deleteCart(cartId);
      location.reload();

    }
  }

  render() {
    let { cartId, closeModal } = this.props;
    return (
      <div className='thanks' onClick={() => closeModal()}>
        <div className='thanks-cont' onClick={(e) => e.stopPropagation()}>
          <button className='icon-button' id='thanks-exit' onClick={() => closeModal()}>X</button>
          <Links type='thanks' />
          <div className='thanks-buttons' >
            {/* <button onClick={() => closeModal()}>Continue 'shopping' ;)</button> */}
            <button onClick={this.clearCart(cartId)}>Clear cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Thanks;