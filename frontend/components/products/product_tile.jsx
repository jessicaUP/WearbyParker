import React from 'react';
import { NavLink } from 'react-router-dom';

class ProductTile extends React.Component {

  constructor(props) {
    
    super(props);

    this.state = {
      selectedColor: props.product.colors[0].id,
      colorName: props.product.colors[0].color_name,
      colorPhoto: props.product.colors[0].photo0Url

    }
    this.handleSelect = this.handleSelect.bind(this)
  };

  handleSelect(colorId, colorname, colorPhoto) {
    return (e) => {
      e.preventDefault();
      this.setState({ selectedColor: colorId, colorName: colorname, colorPhoto: colorPhoto})
    }
  };

  render() {
    let { product } = this.props
    const colors = Object.values(product.colors)
    
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
      </div>


    )

  }
}


export default ProductTile;
