import React from "react";
import ProductShow from "../products/product_show";
// import { createCartItem } from '../../actions/cart_item_actions';

class AddItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formPage: 0,
      cartItem: { 
        frame_width: null,
        prescription_type: '',
        prescription_method: '',
        lense_type: '',
        lense_material: '',
        color_id: null,
      },
      totalPrice: 0
      
    };

    this.handleClick = this.handleClick.bind(this);
    this.exitForm = this.exitForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleClick(type, num, cost = 0) {
    return (e) => {
      e.preventDefault();
      if (this.state.formPage > 0)  {
        let oldState = Object.assign({}, this.state )
        let newState = Object.assign({}, oldState, { cartItem: Object.assign({}, this.state.cartItem, { [type]: e.target.value })})
        this.setState(newState)
      }
      if (this.state.formPage < 4) this.setState({ totalPrice: (this.state.totalPrice + cost) })
      this.setState({ formPage: num })
    }
  }

  exitForm() {
    return (e) => {
      e.preventDefault();
      this.setState({ formPage: 0 })
    }
  }

  backForm() {
    return (e) => {
      e.preventDefault();
      this.setState({ formPage: (this.state.formPage - 1) })
    }
  }
  
  startForm() {
    return (e) => {
      e.preventDefault();
      this.setState({ formPage: 1 })
    }
  }

  handleSubmit() {
    debugger
    return (e) => {
      e.preventDefault();
        this.props.createCartItem({ 
          product_id: this.props.product.id,
          quantity: 1,
          products_frame_width_id: this.state.frame_width,
          products_color_id: this.state.color_id,
          prescription_type: this.state.prescription_type,
          prescription_method: this.state.prescription_method,
          lense_type: this.state.lense_type,
          lense_material: this.state.lense
        })
      
    }
  }
  // handleClick() {
  //   return (e) => {
  //     e.preventDefault();
  //       //  HOW DO I HANDLE THE SUBMIT??
  //   }
  // }


  render() {
    
    const { product } = this.props
    const { cartItem, formPage, totalPrice } = this.state
    let options = product.frameWidths.map((frameWidth, idx) => {
      return (
        <div key={idx} className='cart-options'>
          <button onClick={this.handleClick('frame_width', 2)} value={frameWidth.frame_width} >{frameWidth.frame_width}</button>
          <p className='option-desc'>{frameWidth.description}</p>
        </div>
      )
    })

    if (formPage === 0) {
      return (
        <button className='purchase' onClick={this.handleClick('start', 1)} >Select lenses and purchase</button>
      )
    }
    if (formPage === 1) {
      return (
        <div className='add-cart-item'>
          <div className='left-select-item'>
        
          </div>
          <div className='right-select-item'>
            <button className='icon-button' onClick={this.backForm()}>←</button>
            <button className='icon-button' onClick={this.exitForm()}>X</button>
            <h2 className='icon-button' className='option-title'>Select a frame width</h2>
            {options}
          </div>
        </div>
      )
    }
    
    if (formPage === 2) {
      
      return (
        <div className='add-cart-item'>
          <div className='left-select-item'>
        
          </div>
          <div className='right-select-item'>
            <button className='icon-button' onClick={this.backForm()}>←</button>
            <button className='icon-button' onClick={this.exitForm()}>X</button>
            <h2 className='option-title'>Select a prescription type</h2>
            <div className='cart-options'>
              <button onClick={this.handleClick('prescription_type', 3, 95)} value='Single-vision'>Single-vision</button>
              <p className='option-price'>$95</p>
              <p className='option-desc'>Corrects one field of vision (near, intermediate, or distance)</p>
            </div>
            <div className='cart-options'>
              <button onClick={this.handleClick('prescription_type', 3, 295)} value='Progressives'>Progressives</button>
              <p className='option-price'>$295</p>
              <p className='option-desc'>Correct near, intermediate, and distance fields of vision in one lens so you don't have to switch between multiple pairs</p>
            </div>
            <div className='cart-options'>
              <button onClick={this.handleClick('prescription_type', 3, 95)} value='Non-prescription'>Non-prescription</button>
              <p className='option-price'>$95</p>
              <p className='option-desc'>Offers style and protection with no vision correction</p>
            </div>
            <div className='cart-options'>
              <button onClick={this.handleClick('prescription_type', 3, 95)} value='Readers'>Readers</button>
              <p className='option-price'>$95</p>
              <p className='option-desc'>Offers simple magnification for, well, reading (no prescription necessary)</p>
            </div>
          </div>
        </div>
      )
    }
    
    if (formPage === 3) {
      
      return (
        <div className='add-cart-item'>
          <div className='left-select-item'>
        
          </div>
          <div className='right-select-item'>
            <button className='icon-button' onClick={this.backForm()}>←</button>
            <button className='icon-button' onClick={this.exitForm()}>X</button>
            <h2 className='option-title'>Select a lense type</h2>
            <div className='cart-options'>
              <button onClick={this.handleClick('lense_type', 4)} value='Classic'>Classic</button>
              <p className='option-price'>Free</p>
              <p className='option-desc'>Scratch-resistant, anti-reflective lenses that block 100% of UV rays</p>
            </div>
            <div className='cart-options'>
              <button onClick={this.handleClick('lense_type', 4, 295)} value='Blue-light-filtering'>Blue-light-filtering</button>
              <p className='option-price'>+$50</p>
              <p className='option-desc'>Scratch-resistant, anti-reflective lenses that block 100% of UV rays; they also filter more blue light from digital screens and the sun then our classic or light-responsive lenses.</p>
            </div>
            <div className='cart-options'>
              <button onClick={this.handleClick('lense_type', 4, 95)} value='Light-responsive'>Light-responsive</button>
              <p className='option-price'>+$100</p>
              <p className='option-desc'>Scratch-resistant, anti-reflective lenses that block 100% of UV rays and the transition from clear to a darker tint outdoors</p>
            </div>
              <div className='sub-total'>
                <p id='sub'>Subtotal</p>
                <p id='sub'>{totalPrice}</p>
              </div>
          </div>
        </div>
      )
    }
    
    if (formPage === 3) {
      
      return (
        <div className='add-cart-item'>
          <div className='left-select-item'>
        
          </div>
          <div className='right-select-item'>
            <button className='icon-button' onClick={this.backForm()}>←</button>
            <button className='icon-button' onClick={this.exitForm()}>X</button>
            <h2 className='option-title'>Select a lense Material</h2>
            <div className='cart-options'>
              <button onClick={this.handleClick('lense_material', 4)} value='Polycarbonate'>Polycarbonate</button>
              <p className='option-price'>Free</p>
              <p className='option-desc'>High-quality and impact resistant</p>
            </div>
            <div className='cart-options'>
              <button onClick={this.handleClick('lense_material', 4, 30)} value='1.67 high-index'>1.67 high-index</button>
              <p className='option-price'>+$30</p>
              <p className='option-desc'>Thinner lenses, so you do not have coke-bottles as glasses (if total powers if +/-4.0 or higher)</p>
            </div>
              <div className='sub-total'>
                <p id='sub'>Subtotal</p>
                <p id='sub'>{totalPrice}</p>
              </div>
          </div>
        </div>
      )
    }
    
    if (formPage === 4) {
      return (
        <div className='add-cart-item'>
          <div className='left-select-item'>
        
          </div>
          <div className='right-select-item'>
            <button className='icon-button' onClick={this.backForm()}>←</button>
            <button className='icon-button' onClick={this.exitForm()}>X</button>
            <h2 className='option-title'>Review your selections</h2>
            <p>With every pair, you'll get free shipping, hassle-free returns, and our one-year, no-scratch guarantee</p>
            <div className='cart-selections'>
              <h2>{product.name}</h2>
              <label type='hidden' >Product Id

              </label>
              <label type='hidden' >Product Id

              </label>
              

              <label className='sub'>Frame width
                <p className='selected-option' >{cartItem.frame_width}</p>
                <input type='hidden' value={cartItem.frame_width.id} />
              </label>
            </div>

            <div className='cart-selections'>
              <label className='sub'>Prescription
                <p className='selected-option' >{cartItem.prescription_type}</p>
                <input type='hidden' value={cartItem.prescription_type} />
              </label>
            </div>

            <div className='cart-selections'>
              <label className='sub'>Lense type
                <p className='selected-option' >{cartItem.lense_type}</p>
                <input type='hidden' value={cartItem.lense_type} />
              </label>
            </div>

            <div className='cart-selections'>
              <label className='sub'>Lense material
                <p className='selected-option' >{cartItem.lense_material}</p>
                <input type='hidden' value={cartItem.lense_material} />
              </label>
            </div>

              <div className='sub-total'>
                <p id='sub'>Subtotal</p>
                <p id='sub'>${totalPrice}</p>
              </div>
            <button className='back-button' onClick={this.handleSubmit()}>Add to cart: ${totalPrice}</button>
            <button className='back-button' onClick={this.startForm()}>Edit Selections</button>

          </div>
        </div>
      )
    }






  }
}

export default AddItemForm;