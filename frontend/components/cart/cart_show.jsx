import React from 'react';
import ItemShow from './item_show';

class CartShow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   total: 0
    // };

    this.totalCost = this.totalCost.bind(this);
  }

  componentDidMount() { 
    this.props.fetchCart();   
    
  }

  totalCost(items) {
    let final = 0;
    items.forEach((item) => {
      final += item.price;
    })
    return final;
    // this.setState({ total: final })
  }


  render () {
    let cart = this.props.cart;
    if (!cart.id) return null;
    // if (Object.values(cart).length === 0) return null;
    // let { cartItems } = this.props
    // if (cartItems !== []) return null;
    
    
    let total = this.totalCost(cart.cartItems)
    // cart.cartItems.forEach((item) => this.totalCost(item.price))
    debugger
    let itemArray = cart.cartItems

    return (
      <div className='cart-show'>
        <div className='cart-item-index'>
          {
            itemArray.map(cartItem => <ItemShow key={cartItem.id} cartItem={cartItem} />)
          }
        </div>
        <h2>Your Cart: {total}</h2>


      </div>
    )
  }

}

export default CartShow;