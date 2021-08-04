import React from 'react';
import { NavLink } from 'react-router-dom';

class AddTryon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      check: true,
      formPage: 0,
      selectedColor: props.color,
      fwName: '',
      selectedFrameWidth: 0,



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
      let { selectedFrameWidth } = this.state;
      let { id } = this.props.product;
      let color = document.querySelector(`.img-${id}`);
      let colorId = parseInt(color.id);
      debugger
      this.props.createTryonItem({
        product_id: id,
        products_color_id: colorId,
        products_frame_width_id: selectedFrameWidth
      })

      this.setState({ formPage: 2 })
    }
  }

  tryonButton(product, cart) {
    // if (!this.state.tryon) return;
    let { formPage } = this.state;
    let final;

    // if (this.state.check) {
    //   cart.forEach(item => {
    //     if (item.product_id === product.id) {
    //       this.setState({ fwName: item.frame_width, formPage: 2, check: false, tryonItem: item })
    //     }
    //   })

    // }

    if (formPage === 0) {
      cart.forEach(item => {
        if (item.id === product.id)
          this.setState({ formPage: 2, fwName: item.frameWidth });
      })
    }
    debugger
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
                  return (
                    <label htmlFor={`fw-${fw.id}`} >
                      <div className='option-cont' onClick={() => this.setState({ fwName: fw.frame_width, selectedFrameWidth: fw.id })}>
                        <input type='radio' className='hidden' name='hidden' key={`fw-${fw.id}`} value={fw.frame_width} />
                        <i class="fas fa-check-circle fa-lg"></i>
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
              <div className='option-cont' >
                <i class="fas fa-check-circle fa-lg"></i>
                <p className='subtitle'>{this.state.fwName} is in your Home Try-On</p>
              </div>
            </div>
          </>
        )
        break;
    }

    return final;

  }

  deleteTryon() {
    return (e) => {
      this.props.deleteTryonItem(this.state.tryonItem.id)
      this.setState({ formPage: 0 })
    }
  }

  handleSelect(colorId, colorname, colorPhoto) {
    return (e) => {
      this.setState({ selectedColor: colorId, colorName: colorname, colorPhoto: colorPhoto })
    }
  };

  render() {

    let { product, cart } = this.props

    return this.tryonButton(product, cart)

  }
}

export default AddTryon;
