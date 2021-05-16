import React from 'react'
import { withRouter } from 'react-router-dom'

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    debugger
    this.props.fetchProduct(this.props.match.params.productId)
  }

  render() {
    // this.props.fetchProduct(this.props.id)
    // let { product } = this.props
    // if (!product) return null;
    debugger
    return (
      <>
        <h2>{}</h2>

      </>
    )
  }
}

// export default withRouter(ProductShow);
export default ProductShow; //--> breaks page