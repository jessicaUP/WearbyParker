import React from 'react';
import AddTryon from '../cart/add_tryon_form';
import ProductTile from './product_tile';
import Filter from '../search_filter/filter';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tryon: true,
      filter: false
    };

    this.handleMenus = this.handleMenus.bind(this);
    // this.tryonElements = this.tryonElements.bind(this);
    // this.tryonAdd = this.tryonAdd.bind(this);
  };

  handleMenus(type, status) {
    return (e) => {
      // e.preventDefault();
      
      if (status) {
        this.setState({ [type]: false })
      } else {
        this.setState({ [type]: true })
      }
      
    }
  };


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
      cartArray.push({ id: item.product_id, frameWidth: item.framewidths.frame_width, itemId: item.id});
    });

    let { tryon, filter } = this.state;
    

    let switchButton;
    let message = '';
    if (tryon) {
      switchButton = (
        <>
          <label htmlFor='switch-on' onClick={this.handleMenus('tryon', true)} >
          <i class="fas fa-toggle-on fa-lg" id='switch-on' ></i>
        Available for Home Try-On</label>
        </>
      )
      if (!filter) {
      message = (
        <div className='message-cont' >
          <h2 className='product-name' id='message-text'>Find your perfect frames! <br/> Add to your Cart and try-on at home for free.</h2>
          <button className='selection-button' >View Cart</button>
        </div>
      )

      }
    } else {
      switchButton = (
        <>
          <label htmlFor='switch-off' onClick={this.handleMenus('tryon', false)}>
         <i class="fas fa-toggle-off fa-lg" id='switch-off' ></i>
        Available for Home Try-On</label>
        </>
      )
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
          </div>
          <div className='search-filter-cont' >
            <label className='label' onClick={this.handleMenus('filter', filter)}>
              <i class="fas fa-sort"></i>
              Filter
            </label>
            <label className='label'>
              <i class="fas fa-search"></i>
              Search
            </label>
          </div>
        </div>
        {message}
        {filter ? <Filter key='filter' /> : ''}
        <div className='product-index'>
          {
            productArray.map((product, idx) => {
              return (
                <div className='product-cont' >
                  <ProductTile 
                    key={idx}
                    product={product}
                    cart={cart}
                    switchOn={tryon}/>
                  {tryon ? <AddTryon 
                    product={product}
                    cart={cartArray}
                    deleteTryonItem={this.props.deleteTryonItem}
                    createTryonItem={this.props.createTryonItem} /> : ''}
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