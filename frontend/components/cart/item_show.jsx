import React from 'react';

class CartItemShow extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      cartItem: props.cartItem
    }

  };



  render() {
    debugger
    let { cartItem } = this.state;

    return (
      <div className='cart-item-info' > 
        <div className='item-picture'>
          {/* IMAGE GOES HERE */}
        </div>
        <div className='cart-item-desc'>
          <div className='cart-selections'>
            <h2>{cartItem.name}</h2>
            <label className='sub-title'>Frame width
              <p className='option-description' id='p-option'>{cartItem.frame_width}</p>
              <input type='hidden' value={cartItem.frame_width.id} />
            </label>
          </div>
          <div className='cart-selections'>
            <label className='subtitle'>Prescription type
              <p className='option-description' id='p-option'>{cartItem.prescription_type}</p>
              <input type='hidden' value={cartItem.prescription_type} />
            </label>
          </div>
          <div className='cart-selections'>
            <label className='subtitle'>Lense type
              <p className='option-description' id='p-option'>{cartItem.lense_type}</p>
              <input type='hidden' value={cartItem.lense_type} />
            </label>
          </div>
          <div className='cart-selections'>
            <label className='subtitle'>Lense material
              <p className='option-description' id='p-option'>{cartItem.lense_material}</p>
              <input type='hidden' value={cartItem.lense_material} />
            </label>
          </div>
          <hr />
          <div className='sub-total' id='sub-final'>
            <p id='sub'>Subtotal</p>
            <p id='sub'>${cartItem.price}</p>340%
          </div>
        </div>
      </div>
    )
  }

}

export default CartItemShow;


