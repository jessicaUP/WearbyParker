import React from 'react';

class CartShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    }
  }

  componentDidMount() {
    this.props.fetchCart()
  }


  render () {

    let { cart } = this.props
    if (!cart) return null
    return (
      <div className='cart-show'>
        <h2>Your Cart: {this.state.total}</h2>


      </div>
    )
  }

}

export default CartShow;