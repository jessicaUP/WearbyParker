import React from 'react';
import ProductTile from './product_tile';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tryon: false
    };

    this.handleTryon = this.handleTryon.bind(this);
    // this.tryonElements = this.tryonElements.bind(this);
    // this.tryonAdd = this.tryonAdd.bind(this);
  };

  handleTryon() {
    let next;
    this.state.tryon ? next = false : next = true; 
    return (e) => {
      this.setState({ tryon: next })
      console.log('yup')
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
    if (!genderId) return null;

    let tryonIds = [];
    debugger
    if (cart.length > 0) {
      cart.forEach(item => tryonIds << item.id)
    }
    // <button className='icon-button' onClick={this.addItem()}>+</button>

    // let { tryon } = this.state;

    let productArray = Object.values(genderId)[0]

    return (
      <div className='product-show'>
        <div className='tryon-ribbon' >
          <label className='switch-button' >
            <input type='checkbox' onClick={this.handleTryon()} />
            <span className='slider' ></span>
          </label>
        </div>
        <div className='product-index'>
          {
            productArray.map(product => {
              return (
                <div className='product-cont' >
                  <ProductTile key={product.id} product={product} tyronIds={tryonIds} switchOn={this.state.tryon}/>
                  {/* {this.tryonElements(product, tryonIds)} */}
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