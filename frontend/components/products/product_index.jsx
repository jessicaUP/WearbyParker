import React from 'react';
import AddTryon from '../cart/add_tryon_form';
import ProductTile from './product_tile';
import Filter from '../search_filter/filter';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      tryon: false,
      tryoInfo: true,
      filter: false,
      filterColor: null,
      tryonCount: 0,
      step: true

=======
    
    this.state = {
      tryon: false,
      filter: false
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    };

    this.handleMenus = this.handleMenus.bind(this);
    // this.tryonElements = this.tryonElements.bind(this);
    // this.tryonAdd = this.tryonAdd.bind(this);
<<<<<<< HEAD
    this.colorSelect = this.colorSelect.bind(this);
    this.updateTryonCount = this.updateTryonCount.bind(this);

  };

  updateTryonCount(num) {
    if (this.state.step) {
      this.setState({ tryonCount: num, step: false })
    } else {
      this.setState({ tryonCount: this.state.tryonCount + num })
    }

  }

  colorSelect(color) {
    this.setState({ filterColor: color })
  }

=======
  };

>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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
<<<<<<< HEAD
    if (this.state.step) this.updateTryonCount(cart.length)
    productArray.sort();
=======
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    let cartArray = [];
    cart.forEach(item => {
      cartArray.push({ id: item.product_id, frameWidth: item.framewidths.frame_width, itemId: item.id});
    });

<<<<<<< HEAD
    let { tryon, filter, colorFilter } = this.state;
=======
    let { tryon, filter } = this.state;
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
    

    let switchButton;
    let message = '';
<<<<<<< HEAD
    let infoMessage = '';
    if (tryon) {
      // if (tryoInfo) infoMessage = <div class='tryon-show'></div>
=======
    if (tryon) {
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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


<<<<<<< HEAD
    return (
      <div className='product-show'>
        <div className='banner-cont' >
          <img src={parseInt(this.props.match.params.genderId) === 1 ? window.banner2 : window.banner3} className='img-banner' alt='woman-in-glasses' />
=======

    return (
      <div className='product-show'>
        <div className='banner-cont' >
          <img src={window.banner2} className='img-banner' alt='woman-in-glasses' /> 
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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
<<<<<<< HEAD
            <label className='label' onClick={() => this.props.openModal('search')}>
              <i class="fas fa-search" ></i>
=======
            <label className='label'>
              <i class="fas fa-search"></i>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
              Search
            </label>
          </div>
        </div>
        {message}
<<<<<<< HEAD
        {filter ? <Filter genderId={parseInt(this.props.match.params.genderId)} 
                          key='filter' 
                          fetchGenderSearchProducts={this.props.fetchGenderSearchProducts}
                          fetchGenderProducts={this.props.fetchGenderProducts}
                          totalCount={productArray.length}
                          colorSelect={this.colorSelect}

                          /> : ''}
=======
        {filter ? <Filter key='filter' /> : ''}
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
        <div className='product-index'>
          {
            productArray.map((product, idx) => {
              return (
                <div className='product-cont' >
                  <ProductTile 
                    key={idx}
                    product={product}
                    cart={cart}
<<<<<<< HEAD
                    switchOn={tryon}
                    filterColor={colorFilter}/>
=======
                    switchOn={tryon}/>
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
                  {tryon ? <AddTryon 
                    product={product}
                    cart={cartArray}
                    deleteTryonItem={this.props.deleteTryonItem}
<<<<<<< HEAD
                    createTryonItem={this.props.createTryonItem}
                    updateTryonCount={this.updateTryonCount}
                  /> : ''}
=======
                    createTryonItem={this.props.createTryonItem} /> : ''}
>>>>>>> 18e67994b24a50d8aa9e38abe0f5769f7d53274a
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