import React from 'react';
import { NavLink } from 'react-router-dom';

class ProductTile extends React.Component {

  render() {
    let { product } = this.props
    const color = Object.values(product.color)
    debugger
    return (
      <div className='product-tile'>
       <h2 className='product-name'>{product.name}</h2>
       <div className='tile-image'></div> 
        <div className='tile-colors'>
          {color.map((color, idx) => <NavLink to={`/products/${product.id}`} className='color-preview' key={idx} >{color.color}</NavLink>)}
        </div>
      </div>


    )

  }
}

export default ProductTile;
