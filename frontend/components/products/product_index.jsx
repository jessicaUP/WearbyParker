import React from 'react';
import AddTryon from '../cart/add_tryon_form';
import ProductTile from './product_tile';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tryon: true
    };

    this.handleTryon = this.handleTryon.bind(this);
    // this.tryonElements = this.tryonElements.bind(this);
    // this.tryonAdd = this.tryonAdd.bind(this);
  };

  handleTryon() {
    return (e) => {
      // e.preventDefault();
      debugger
      if (this.state.tryon) {
        this.setState({ tryon: false })
      } else {
        this.setState({ tryon: true })
      }
      
    }
  };

  // tryonAdd() {
  //   //:product_id, :products_color_id, :products_frame_width_id)
  
  //   return (e) => {
  //     e.preventDefault();
  //     let colot
  //   }
  // }

  // tryonElements(item, cartArray) {
  //   // if (!this.state.tryon) return;
  //   let final;

  //   if (cartArray.includes(item.id)) {
  //     final = (
  //       <>
  //       <div className='pop-up'></div>
  //         <button className='icon-button' id='tryon' onClick={() => this.props.deleteTryonItem(item.id)}>x</button>
  //       </>
  //     )
  //   } else {
  //     final = (
  //       <button className='icon-button' id='tryon' onClick={() => this.props.createTryonItem()}>+</button>
  //     )
  //   }
  //   return final;
  // }

  componentDidMount() {
    this.props.fetchGenderProducts(this.props.match.params.genderId)
    this.props.fetchCart()
  };

  render() {
    let { genderId, cart } = this.props
    if (!genderId || !cart) return null;
    let productArray = Object.values(genderId)[0]
    let cartArray = [];
    cart.forEach(item => {
      debugger
      cartArray.push({ id: item.product_id, frameWidth: item.framewidths.frame_width});
    });

    let switchButton;
    if (this.state.tryon) {
      switchButton = <i class="fas fa-toggle-on fa-lg" onClick={this.handleTryon()}></i>
    } else {
      switchButton = <i class="fas fa-toggle-off fa-lg" onClick={this.handleTryon()}></i>
    };

    return (
      <div className='product-show'>
        <div className='banner-cont' >
          <img src={window.banner2} className='img-banner' alt='woman-in-glasses' /> 
          <h2 className='product-name' >Shop frames below or pick five pairs to try for free</h2>
        </div>

        <div className='tryon-ribbon' >
          <div className='switch-button' >
            {switchButton}
            <p>Available for Home Try-On</p>
          </div>
          <div className='search-filter-cont' >
            <label className='label' >
              <i class="fas fa-sort"></i>
              Filter
            </label>
            <label className='label'>
              <i class="fas fa-search"></i>
              Search
            </label>
          </div>
        </div>
        <div className='product-index'>
          {
            productArray.map((product, idx) => {
              return (
                <div className='product-cont' >
                  <ProductTile 
                    key={idx}
                    product={product}
                    cart={cart}
                    createTryonCartItem={this.props.createTryonItem}
                    deleteTryonItem={this.props.deleteTryonItem}
                    switchOn={this.state.tryon}/>
                  {this.state.tryon ? <AddTryon product={product} cart={cartArray} createTryonItem={this.props.createTryonItem} /> : ''}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
};


export default ProductIndex; 