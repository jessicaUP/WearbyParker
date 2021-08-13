import React from 'react';
import ItemShow from './item_show';
import ItemTryonShow from './item_tryon_show';

class CartShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: null,
      check: true,
      checkReload: true
    };

    this.totalCost = this.totalCost.bind(this);
    // this.removePageItem = this.removePageItem.bind(this);
  }



  componentDidMount() { 
    this.props.fetchCart()
    if ( this.state.checkReload ) {
      this.setState({ checkReload: false })
    }
    
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
    let total;
    if (!cart.id) {
      // this.setState({ check: false })
      return null;
    } else {
      total = this.totalCost(cart.cartItems)
    }
    // if ( this.state.checkReload ) {
    //   this.setState({ checkReload: false })
    // }
    // if (Object.values(cart).length === 0) return null;
    // let { cartItems } = this.props
    // if (cartItems !== []) return null;

    
    // cart.cartItems.forEach((item) => this.totalCost(item.price))
    let itemArray = cart.cartItems
    let itemTryonArray = cart.cartTryonItems

    let tryonPopup = (
      <div className='popup-cont' >
        <p>Still want to continue shopping? You can try more frames. Shop frames</p>
      </div>
    )

    if ( itemTryonArray.length === 5 ) tryonPopup = '';

    return (
      <div className='cart-show'>
        <h2 className='product-name' id='price-num'>Your Cart: ${total}</h2>
        <div className='cart-item-index'>
          {
            itemArray.map((cartItem, idx) => {
              return (
                <div className='item-cont' id={`item-${cartItem.id}`} >
                  <ItemShow key={`item-${cartItem.id}-${idx}`}
                    cartItem={cartItem} 
                    deleteItem={this.props.deleteCartItem}
                    />
                </div>
            )})
          }
        </div>
        <p className='option-description' id='amount-count' >{itemTryonArray.length} of 5 Home Try-On frames chosen</p>
        {tryonPopup}

        <div className='cart-item-index'>
          {
            itemTryonArray.map((cartItem, idx) => {
              return (
                <div className='item-cont' id={`tryon-${cartItem.id}`} >
                  <ItemTryonShow key={`tryon-${cartItem.id}-${idx}`}
                    cartItem={cartItem}
                    deleteItem={this.props.deleteCartTryonItem}
                    />
                </div>
              )
            })
          }
        </div>

      </div>
    )
  }

}

export default CartShow;