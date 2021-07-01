import React from 'react';
import ProductTile from './product_tile';

class ProductIndex extends React.Component {
  constructor(props) {
    
    super(props);
  };

  componentDidMount() {
    this.props.fetchGenderProducts(this.props.match.params.genderId)
  };

  render() {
    let { genderId } = this.props
    if (!genderId) return null;

    let productArray = Object.values(genderId)[0]

    return (
      <div className='product-index'>
        {
          productArray.map(product => <ProductTile key={product.id} product={product} />)
        }
      </div>
    )
  }
};


export default ProductIndex; 