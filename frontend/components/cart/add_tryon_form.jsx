import React from 'react';
import { NavLink } from 'react-router-dom';

class AddTryon extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      formPage: 0,
      selectedColor: props.selectedColor,
      colorName: props.color_name,
      frameWidths: props.product.frameWidths,
      selectedFrameWidth: 0
    }

    // this.handleSelect = this.handleSelect.bind(this);
    this.tryonElements = this.tryonElements.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
  }

  tryonElements(item, cartArray) {
    // if (!this.state.tryon) return;
    let final;

    if (cartArray.includes(item.id)) {
      final = (
        <>
          <div className='pop-up'></div>
          <button className='icon-button' id='tryon' onClick={() => this.props.deleteTryonItem(item.id)}>x</button>
        </>
      )
    } else {
      final = (
        <button className='icon-button' id='tryon' onClick={() => this.props.createTryonItem()}>+</button>
      )
    }
    return final;
  }

  // handleSelect(colorId, colorname, colorPhoto) {
  //   return (e) => {
  //     this.setState({ selectedColor: colorId, colorName: colorname, colorPhoto: colorPhoto })
  //   }
  // };

  render() {


    return (



    )

  }
}


export default AddTryon;
