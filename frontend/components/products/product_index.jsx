import React from 'react';

class ProductIndex extends React.Component {
  constructor(props) {
    debugger
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchGenderProducts(this.props.match.params.genderId)
  }

  render() {
    let { products } = this.props
    if (!products) return null;
    debugger
    return (
      <div className='product-index'>
        <h1>Get itttttt</h1>
      </div>
    )
  }
}


export default ProductIndex; 