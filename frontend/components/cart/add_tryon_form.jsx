import React from 'react';
import { NavLink } from 'react-router-dom';

class AddTryon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      check: true,
      formPage: 0,
      checkPage: true,
      selectedColor: props.color,
      fwName: props.product.frame_widths[0].frame_width,
      selectedFrameWidth: props.product.frame_widths[0].id,
      tryonItem: {},
      cartCount: props.cart.length

    }
    // this.handleSelect = this.handleSelect.bind(this);
    this.tryonButton = this.tryonButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.deleteTryon = this.deleteTryon.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.update = this.update.bind(this);
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

  submitItem(currentCount) {
    return (e) => {
      e.preventDefault();
      let { selectedFrameWidth } = this.state;
      let { id } = this.props.product;
      let color = document.querySelector(`.img-${id}`);
      let colorId = parseInt(color.id);
      
      if (currentCount === 5) {
        // setTimeout(() => window.location.href = '#/carts', 3000)
        this.setState({ formPage: 3 })
        return
      }
      let item = this.props.createTryonItem({
        product_id: id,
        products_color_id: colorId,
        products_frame_width_id: selectedFrameWidth
      })
      let cartCount = document.querySelector('.circle')
      let count = cartCount.innerHTML;
      cartCount.innerHTML = parseInt(count) + 1;
      let iteminfo = {
        id: id,
        frameWidth: selectedFrameWidth,
        itemId: item.id
      }
      this.setState({ formPage: 2, cartCount: (currentCount + 1), tryonItem: iteminfo })
    }
  }

  handleSelect(value) {
    return (this.state.fwName === value)
  };

  update(fwName, fwId) {
    return () => {
      this.setState({ fwName: fwName, selectedFrameWidth: fwId })
    }
  }

  tryonButton(product, cart) {
    let { formPage, checkPage, tryonItem, selectedFrameWidth } = this.state;

    if (checkPage) {
      cart.forEach(item => {
        if (item.id === product.id)
          this.setState({ formPage: 2, fwName: item.frameWidth, tryonItem: item, checkPage: false });
      })
    }


    let final;
    
    switch (formPage) {
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
              <hr />
              <div className='option-box'>
                {this.props.product.frame_widths.map((fw) => {
                  debugger
                  return (
                    <>
                      <input type='radio'
                        className='hidden'
                        id={`fw-${fw.id}`}
                        value={fw.frame_width} 
                        checked={this.handleSelect(fw.frame_width)}
                        onChange={this.update(fw.frame_width, fw.id)}
                      />
                      <label htmlFor={`fw-${fw.id}`}> 
                        <div className='option-cont' >
                          <i class='fas fa-check-circle fa-lg' id={`${fw.id === selectedFrameWidth ? 'selected-check' : ''}`}></i>
                         <div className='option-desc'>
                           <p className='subtitle'>{fw.frame_width}</p>
                           <p className='option-description'>{fw.description}</p>
                         </div>
                       </div>
                      </label>
                    </>

                        
                    // <label htmlFor={`fw-${fw.id}`} >
                    //   <div className='option-cont' onClick={() => this.setState({ fwName: fw.frame_width, selectedFrameWidth: fw.id })}>
                    //     <input type='radio' className='hidden' name='hidden' key={`fw-${fw.id}`} value={fw.frame_width} />
                    //     <i class="fas fa-check-circle fa-lg"></i>
                    //     <div className='option-desc'>
                    //       <p className='subtitle'>{fw.frame_width}</p>
                    //       <p className='option-description'>{fw.description}</p>
                    //     </div>
                    //   </div>
                    // </label>
                  )
                })}
              </div>
              <button className='selection-button' onClick={this.submitItem(this.state.cartCount)}>Add to Home Try-On</button>
            </div>
          </>
        )
        break;
      case 2:
        // DELETE BUTTON
        final = (
          <>
            <button className='icon-button' id='tryon' onClick={this.deleteTryon(tryonItem.itemId)}>x</button>
            <div className='form-try' id='added'>
              <div className='option-cont' >
                <i class="fas fa-check-circle fa-lg"></i>
                <div className='option-desc' >
                  <p className='subtitle' >{this.state.fwName} is in your Home Try-On</p>
                </div>
              </div>
            </div>
          </>
        )
        break;
      case 3:
        // FULL MESSAGE
        final = (
          <>
            <button className='icon-button' id='tryon' onClick={this.deleteTryon(tryonItem.itemId)}>x</button>
            <div className='form-try' id='added'>
              <div className='option-cont' >
                <p className='subtitle'>Your Home Try-On is full</p>
              </div>
            </div>
          </>
        )

    }

    return final;

  }

  deleteTryon(id) {
    return (e) => {
      e.preventDefault();
      let cartCount = document.querySelector('.circle')
      let count = parseInt(cartCount.innerHTML);
      
      cartCount.innerHTML = (count - 1);
      this.props.deleteTryonItem(id)
        .then(this.setState({ formPage: 0, tryonItem: {}, cartCount: (this.state.cartCount - 1) }))
    }
  }

  // handleSelect(colorId, colorname, colorPhoto) {
  //   return (e) => {
  //     this.setState({ selectedColor: colorId, colorName: colorname, colorPhoto: colorPhoto })
  //   }
  // };

  render() {

    let { product, cart } = this.props
    return this.tryonButton(product, cart)

  }
}

export default AddTryon;
