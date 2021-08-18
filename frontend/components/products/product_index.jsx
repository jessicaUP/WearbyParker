import React from 'react';
import AddTryon from '../cart/add_tryon_form';
import ProductTile from './product_tile';
import Filter from '../search_filter/filter';
import { Link } from 'react-router-dom';


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      tryon: false,
      tryoInfo: true,
      filter: false,
      filterColor: null,
      tryonCount: 0,
      step: true,
      howTo: true

    };

    this.handleMenus = this.handleMenus.bind(this);
    // this.tryonElements = this.tryonElements.bind(this);
    // this.tryonAdd = this.tryonAdd.bind(this);
    this.colorSelect = this.colorSelect.bind(this);
    this.updateTryonCount = this.updateTryonCount.bind(this);
    this.tryonCheck = this.tryonCheck.bind(this);

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

  tryonCheck() {
      this.setState({ tryon: true, update: false })
      // location.reload();
  }

  render() {
    let { genderId, cart } = this.props
    if (!genderId || !cart) return null;
    let productArray = Object.values(genderId)[0]
    if (this.state.step) {
      this.updateTryonCount(cart.length)
      if (location.hash.includes('?')) this.tryonCheck();

    }
    debugger
    let update = location.hash.split('?')[1];
    // productArray.sort();
    let cartArray = [];
    if (this.state.tryonCount) {
      cart.forEach(item => {
        cartArray.push({ id: item.product_id, frameWidth: item.frame_width, itemId: item.id});
      });

    }
    

    let { tryon, filter, colorFilter, howTo } = this.state;
    

    let switchButton;
    let message = '';
    let infoMessage = '';
    if (tryon) {
      // if (tryoInfo) infoMessage = <div class='tryon-show'></div>
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
          <Link to={`/carts`} ><button className='selection-button' >View Cart</button></Link>
        </div>
      )

      }
    } else {
      switchButton = (
        <>
          <label htmlFor='switch-off' onClick={this.handleMenus('tryon', false)}>
         <i class="fas fa-toggle-off fa-lg" id='switch-off' ></i>
        Available for Home Try-On</label>
        <div className='how-to'>
          <p></p>
        </div>
        </>
      )
    };

    // let yellow = productArray[9];
    // productArray.splice(9, 1)
    // productArray.push(yellow)
    // let change = yellow.colors[3];
    // let change2 = yellow.colors[1];
    // yellow.colors[3] = change2
    // yellow.colors[1] = change

    let picks = [17, 18, 19, 20]
    let jessPicks = <img src={window.jess} className='jess-picks' alt='jess-edits' />
    let genderID = parseInt(this.props.match.params.genderId);
    
    return (
      <div className='product-show'>
        <div className='banner-cont' >
          <img src={genderID === 1 ? window.banner2 : window.banner3} className='img-banner' alt='woman-in-glasses' />
          <div className='banner-over'>
            <h3 className='logo' id='logo-search'>{genderID === 1 ? 'WOMEN\'S EYEGLASSES' : 'MEN\'S EYEGLASSES' }</h3>
            <h2 className='product-name' >Shop frames below or pick five pairs to try for free</h2>
          </div>
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
            <label className='label' onClick={() => this.props.openModal('search')}>
              <i class="fas fa-search" ></i>
              Search
            </label>
          </div>
        </div>
        {message}
        {filter ? <Filter genderId={parseInt(this.props.match.params.genderId)} 
                          key='filter' 
                          fetchGenderSearchProducts={this.props.fetchGenderSearchProducts}
                          fetchGenderProducts={this.props.fetchGenderProducts}
                          totalCount={productArray.length}
                          colorSelect={this.colorSelect}

                          /> : ''}
        <div className='product-index'>
          {
            productArray.map((product, idx) => {
              return (
                <div className='product-cont' id={`product-${product.id}`} key={`${product.id}-${idx}`}>
                  {picks.includes(product.id) ? jessPicks : ''}
                  <ProductTile 
                    key={idx}
                    product={product}
                    cart={cart}
                    switchOn={tryon}
                    filterColor={colorFilter}/>
                  {tryon ? <AddTryon 
                    product={product}
                    cart={cartArray}
                    deleteTryonItem={this.props.deleteTryonItem}
                    createTryonItem={this.props.createTryonItem}
                    updateTryonCount={this.updateTryonCount}
                  /> : ''}
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