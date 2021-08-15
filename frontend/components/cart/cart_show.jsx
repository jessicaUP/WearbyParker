import React from 'react';
import ItemShow from './item_show';
import ItemTryonShow from './item_tryon_show';

class CartShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: null,
<<<<<<< HEAD
      check: true,
      checkReload: true
=======
      check: true
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    };

    this.totalCost = this.totalCost.bind(this);
    // this.removePageItem = this.removePageItem.bind(this);
  }


<<<<<<< HEAD
  componentDidMount() { 
    this.props.fetchCart()
    if ( this.state.checkReload ) {
      this.setState({ checkReload: false })
    }
=======

  componentDidMount() { 
    this.props.fetchCart()
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    
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
<<<<<<< HEAD
    // if ( this.state.checkReload ) {
    //   this.setState({ checkReload: false })
    // }
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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

<<<<<<< HEAD
    let tryonSection = '';
    if ( itemTryonArray.length !== 0 ) {
      tryonSection = (
        <>
        <p className='option-description' id='amount-count' >{itemTryonArray.length} of 5 Home Try-On frames chosen</p>
        { tryonPopup }
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
        </>
      )
    }

    return (
      <div className='cart-show'>
        <div className='cart-top'>
        <div className='cart-item-index'>
          <h2 className='product-name' id='price-num'>Your Cart: ${total}</h2>
=======
    return (
      <div className='cart-show'>
        <h2 className='product-name' id='price-num'>Your Cart: ${total}</h2>
        <div className='cart-item-index'>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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
<<<<<<< HEAD
          {tryonSection}
            </div>
          <div className='checkout-info'>
            <div className='checkout-list'>
              <ul>
                <li><i class="fas fa-check"></i><p>Includes frame case and lens cloth</p></li>
                <li><i class="fas fa-check"></i><p>Free standard shipping and free returns</p></li>
              </ul>
            <div className='checkout-price'>
              <div className='checkout-sub'>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className='checkout-sub'>
                <p>Subtotal</p>
                <p>${total}</p>
              </div>
            </div>
            <button className='cart-button' id='buy-button' onClick={() => this.props.openModal('thanks', { cartId: cart.id })} >Next step</button>
          </div>
        </div>
        </div>
=======
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

>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
      </div>
    )
  }

}

export default CartShow;