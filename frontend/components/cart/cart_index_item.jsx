import React from 'react';

class CartIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cart-item-container'>
        <div className='ci-right'>

        </div>
        <div className='ci-left'>

          <div className='cart-selections'>
            <label className='sub'>Frame width
              <p className='selected-option' >{cartItem.frame_width}</p>
            </label>
          </div>

          <div className='cart-selections'>
            <label className='sub'>Prescription
              <p className='selected-option' >{cartItem.prescription_type}</p>
            </label>
          </div>

          <div className='cart-selections'>
            <label className='sub'>Lense type
                <p className='selected-option' >{cartItem.lense_type}</p>
              <input type='hidden' value={cartItem.lense_type} />
            </label>
          </div>

          <div className='cart-selections'>
            <label className='sub'>Lense material
                <p className='selected-option' >{cartItem.lense_material}</p>
              <input type='hidden' value={cartItem.lense_material} />
            </label>
          </div>

          <div className='sub-total'>
            <p id='sub'>Subtotal</p>
            <p id='sub'>${totalPrice}</p>


        </div>
      </div>
      </div>

    )

  }

}

export default CartIndexItem;