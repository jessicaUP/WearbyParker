import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartCount: props.cartCount
    }

  }

  componentDidMount() {
    this.props.fetchCart();
  }


  
  render() {

    let { cart } = this.props;
    if (!cart.id) return null;


    const accountButton = (
      this.props.currentUser ? (
        <div className='cart-icon-cont' >
          <Link to='/account' className='nav-link'>
            <i class="fas fa-user-alt"></i>
          </Link>
        </div >
        ) : (
          <div className='cart-icon-cont' >
          <Link to='/signin' className='nav-link'>
          <i class="fas fa-user-alt"></i>
          </Link>
        </div>
        )
      )
    
    // const toggleItem = () => {
    //   $('.dropdown').toggleClass('toggle')
    // }

    return (
    <div className='total-menu'>
      <div className='ribbon' >
        <p className='ribbon' >The latest on shopping with us.</p>
      </div>

      <div className='nav-bar'>
        <div className='side-l' >
            <i class="fas fa-search" onClick={() => this.props.openModal('search')}></i>
          {/* <a 
            className='nav-link' 
            href='https://www.linkedin.com/in/jessica-uphoff-b2584b69/' 
            target="_blank">Jessica Uphoff Linkedin></a> */}
        </div>
          <Link to='/'><h3 className='logo' >WEARBY PARKER</h3></Link>
        <div className='r-buttons'>
          {accountButton}
          <div className='cart-icon-cont' >
            <Link to='/carts' className='cart-link'>
            <div className='circle' >
                {this.props.cart.cartItems.length + this.props.cart.cartTryonItems.length}
            </div>
            <i class="fas fa-shopping-cart"></i>
            </Link>

          </div>
        </div>
      </div>
        <div className='nav-bottom'>
          <button>Home Try-on</button>
            <Link className='drop-options' to='/genders/2' ><button className='menu' >Men</button></Link>
            <Link className='drop-options' to='/genders/1' ><button className='menu' >Women</button></Link>
          <div className='menu-item'>
            {/* <button onClick={toggleItem}>Eyeglasses</button> */}

            {/* <div className="dropdown"> */}
            {/* </div> */}

              {/* <button>Sunglasses</button> */}
        </div>
        </div>
    </div>
    )
  }
}

export default NavBar;
