import React from 'react';

class CartItemShow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cartItem: props.cartItem
    },
    this.deleteItem = this.deleteItem.bind(this);
    this.removePageItem = this.removePageItem.bind(this);

  };

  removePageItem(itemId, price) {
    let cartCount = document.querySelector('.circle')
    let count = parseInt(cartCount.innerHTML);
    cartCount.innerHTML = count - 1;

    let priceEle = document.querySelector(`#price-num`);
<<<<<<< HEAD
    let newPrice = parseInt(priceEle.innerHTML.split('$')[1]) - price;
    priceEle.innerHTML = `Your cart: $${newPrice}`
    debugger
=======
    let newPrice = parseInt(priceEle.innerHTML.split('$')[-1]) - price;
    priceEle.innerHTML = `Your cart: $${newPrice}`
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a

    let ele = document.querySelector(`#item-${itemId}`);
    ele.remove();
  }



<<<<<<< HEAD
  deleteItem(itemId, cost) {
    return (e) => {
      e.preventDefault();
      this.props.deleteItem(itemId)
      this.removePageItem(itemId, cost)
=======
  deleteItem(itemId) {
    let price = document.getElementById('price-num');
    return (e) => {
      e.preventDefault();
      this.props.deleteItem(itemId)
      .then(this.removePageItem(itemId))
        .then(location.reload());
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    }
  }



  render() {
    let { cartItem } = this.state;

    return (
      <div className='cart-item-info' > 
        <div className='item-picture'>
          <img className='cart-picture' src={cartItem.photo0Url} alt='eyewear-picture' />
        </div>
        <div className='cart-item-desc'>
          <button className='icon-button' onClick={this.deleteItem(cartItem.id, cartItem.price)}>X</button>
          <div className='cart-selections'>
            <h2 className='section-title' id='item-name'>{cartItem.name}</h2>
            <p className='option-color'>{cartItem.color_name}</p>
            <label className='subtitle'>Frame width
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
          <div className='sub-total' id='sub-final'>
            <div></div>
            <p id='sub'>${cartItem.price}</p>
          </div>
        </div>
      </div>
    )
  }

}

export default CartItemShow;


