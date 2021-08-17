import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartCount: props.cartCount,
      tryon: false
    }

    this.openMenu = this.openMenu.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  openMenu() {
    return () => {
      let next;
      this.state.tryon ? next = false : next = true;
      this.setState({ tryon: next })

    }
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
          <Link to='/#' className='logo-a' ><h3 className='logo' >WEARBY PARKER</h3></Link>
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
          <button className={`relative-btn btn-line-${this.state.tryon}`} onClick={this.openMenu()}>Home Try-on</button>
          <div className='grey-out' >
          <div className={`hideEle-${this.state.tryon}`}>
            <img className='tryon-info-img' src={window.tryon} alt='tryon-box' />
            <div className='right-tryon'>
            <p className='tryon-over'>Pick 5 frames to try on at home (it's free!)</p>
              <div class='button-drop'>
                <Link className='drop-options' to={{ pathname: '/genders/1', tryon: true }} onClick={this.openMenu()}><button className='menu border-button' >Women</button></Link>
                <Link className='drop-options' to={{ pathname: '/genders/2', tryon: true }} onClick={this.openMenu()}><button className='menu border-button' >Men</button></Link>
              </div>
              </div>
            </div>
            </div>

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
