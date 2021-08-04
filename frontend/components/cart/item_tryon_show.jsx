import React from 'react';

class CartTryonItemShow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cartItem: props.cartItem
    },
      this.deleteItem = this.deleteItem.bind(this);
    this.removePageItem = this.removePageItem.bind(this);

  };

  removePageItem(itemId) {
    let ele = document.querySelector(`#tryon-${itemId}`);
    ele.remove();
  }



  deleteItem(itemId) {
    return (e) => {
      e.preventDefault();
      this.props.deleteTryonItem(itemId)
        .then(() => this.removePageItem(itemId))
    }
  }



  render() {
    let { cartItem } = this.state;
    return (
      <div className='cart-item-info' id='info-tryon'>
        <div className='item-picture'>
          <img className='cart-picture' src={cartItem.photo0Url} alt='eyewear-picture' />
        </div>
        <div className='cart-item-desc'>
          <button className='icon-button' onClick={this.deleteItem(cartItem.id)}>X</button>
          <div className='cart-selections'>
            <h2 className='section-title' id='item-name'>{cartItem.name}</h2>
            <p className='option-color'>{cartItem.color_name}</p>
            <label className='subtitle'>Frame width
              <p className='option-description' id='p-option'>{cartItem.framewidths.frame_width}</p>
              <input type='hidden' value={cartItem.framewidths.id} />
            </label>
          </div>
          <div className='sub-total' id='sub-final'>
            <p id='sub'>Free</p>
          </div>
        </div>
      </div>
    )
  }

}

export default CartTryonItemShow;


