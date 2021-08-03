import React from 'react';
import { NavLink } from 'react-router-dom';

class ProductTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      check: true,
      formCheck: true,
      formPage: 0,
      selectedColor: props.product.colors[0].id,
      colorName: props.product.colors[0].color_name,
      colorPhoto: props.product.colors[0].photo0Url,
      frameWidths: props.product.frameWidths,
      fwName: '',
      selectedFrameWidth: 0,
      tryonIds: props.tryonIds,
      tryon: props.switchOn,
      tryonItem: ''


    }
    this.handleSelect = this.handleSelect.bind(this);
    this.tryonButton = this.tryonButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.deleteTryon = this.deleteTryon.bind(this);
  };




  handleClick(num) {
    //:product_id, :products_color_id, :products_frame_width_id)

    return (e) => {
      e.preventDefault();
      let { selectedColor, tryon, tryonAdd } = this.state;

      if (num > 0) {
        let oldState = Object.assign({}, this.state)
        let newState = Object.assign({}, oldState, { formPage: num })
        this.setState(newState)
      } 

    }
  };

  submitItem() {
    return (e) => {
      e.preventDefault();
      let { selectedColor, selectedFrameWidth } = this.state;
      let { id } = this.props.product;
      this.props.createTryonCartItem({
        product_id: id,
        products_color_id: selectedColor,
        products_frame_width_id: selectedFrameWidth
      })

      this.setState({ formPage: 2 })
    }
  }

  tryonButton(product, cart) {
    // if (!this.state.tryon) return;
    let { formPage } = this.state;
    let final;

    if (this.state.check) {
      cart.forEach(item => {
        if (item.product_id === product.id) {
          debugger
          this.setState({ fwName: item.frame_width, formPage: 2, check: false, tryonItem: item })
        }
      })

    }

    // if (cart.includes(item.id)) {
    //   this.setState({ formPage: 2 });
    // }

    switch ( formPage ) {
      case 0:
        // ADD BUTTON
        final = (
          <button className='icon-button' id='tryon' onClick={() => this.setState({ formPage: (formPage + 1) })}>+</button>
        )
        break;
      case 1:
          // FW AND EXIT
        final = (
          <>
          <button className='icon-button' id='tryon' onClick={() => this.setState({ formPage: 0 })}>x</button>
          <div className='form-try'>
          <p className='subtitle'>Select a frame width</p>
          <p className='option-description'>For more widths, try another color or frame</p>
          <hr/>
          <div className='option-box'>
            {this.props.product.frame_widths.map((fw) => {
              return (
                <label htmlFor={`fw-${fw.id}`} >
                <div className='option-cont' onClick={() => this.setState({ fwName: fw.frame_width, selectedFrameWidth: fw.id })}>
                  <input type='radio' className='hidden' name='hidden' key={`fw-${fw.id}`} value={fw.frame_width} />
                  <i className="fas fa-check-circle fa-lg"></i>
                  <div className='option-desc'>
                    <p className='subtitle'>{fw.frame_width}</p>
                    <p className='option-description'>{fw.description}</p>
                  </div>
                </div>
                </label>
              )
          })}
              </div>
            <button className='selection-button' onClick={this.submitItem()}>Add to Home Try-On</button>
          </div>
          </>
        )
        break; 
      case 2:
        // DELETE BUTTON
        final = (
          <>
          <button className='icon-button' id='tryon' onClick={this.deleteTryon()}>x</button>
          <div className='form-try' id='added'>
            <i className="fas fa-check-circle fa-lg"></i>
            <p className='subtitle'>{this.state.fwName} is in your Home Try-On</p>
          </div>
          </>
        )
        break;
    }

    return final;

  }

  deleteTryon() {
    return (e) => {
      debugger
      this.props.deleteTryonItem(this.state.tryonItem.id)
      this.setState({ formPage: 0 })
    }
  }

  handleSelect(colorId, colorname, colorPhoto) {
    return (e) => {
      this.setState({ selectedColor: colorId, colorName: colorname, colorPhoto: colorPhoto})
    }
  };

  render() {
    let { product } = this.props
    const colors = Object.values(product.colors)

    let form = '';
    if (this.state.formCheck) {
      form = this.tryonButton(product, this.props.cart)
    }
    
    return (
      <div className='product-tile'>
        <NavLink to={`/products/${product.id}/color/${this.state.selectedColor}`}
           colorname={this.state.colorName}
           ><div className='tile-image' >
             <img src={this.state.colorPhoto} alt="" />
          </div></NavLink>
          <h2 className='product-name'>{product.name}</h2>
        <div className='tile-colors'>
          {product.colors.map((color, idx) => (
            <input type="radio"
            className='radio-color-options'
            name={`radio-${product.id}`} 
            onChange={this.handleSelect(color.id, color.name, color.photo0Url)}
            key={color.id}
            defaultChecked={idx === 0}
            />  )) }
          
        </div>
            {form}
      </div>


    )

  }
}


export default ProductTile;
