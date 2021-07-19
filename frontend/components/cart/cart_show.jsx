import React from 'react';

class CartShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    }
  }

  componentDidMount() {
    // NEED TO FIND THE CART ID
    debugger
    this.props.fetchCart()
    
  }

  totalCost(amount) {
    let final = this.state.total + amount
    this.setState({ total: final })
  }


  render () {

    debugger
    let { cartItems } = this.props
    if (!cartItems) return null;

    // cartItems.values[1].values.forEach((item) => {
    //   this.totalCost(item.)
    // })
    
    return (
      <div className='cart-show'>
        <h2>Your Cart: {this.state.total}</h2>


      </div>
    )
  }

}

export default CartShow;