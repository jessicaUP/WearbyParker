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
    let ele2 = document.querySelector('#amount-count');
    let count = parseInt(ele2.innerHTML.split(' ')[0])
    ele2.innerHTML = `${count - 1} of 5 Home Try-On frames chosen`
    let cartCount = document.querySelector('.circle')
    let count2 = parseInt(cartCount.innerHTML);
    cartCount.innerHTML = count2 - 1;
    ele.remove(); 
  }



  deleteItem(itemId) {
    return (e) => {
      e.preventDefault();
      this.props.deleteItem(itemId)
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
            <h2 className='section-title' id='item-name'>{cartItem.frame_width}</h2>
            <p className='option-color'>{cartItem.color_name}</p>
            <label className='subtitle'>Frame width
              <p className='option-description' id='p-option'>{cartItem.description}</p>
              <input type='hidden' value={cartItem.products_frame_width_id} />
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


