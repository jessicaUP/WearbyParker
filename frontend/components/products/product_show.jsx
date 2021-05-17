import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    debugger
    this.props.fetchProduct(this.props.match.params.productId)
  }

  render() {
    // let product = this.props.fetchProduct(this.props.match.params.productId)
    // this.props.fetchProduct(this.props.id)
    // let { product } = this.props
    // if (!product) return null;
    debugger
    return (
      <div className='index-body'>
        <div className='top' >
          <div className='pictures'>
            <img className='scroll-picture' src="" alt='eyewear-picture' />
            <img className='scroll-picture' src="" alt='eyewear-picture' />
            <img className='scroll-picture' src="" alt='eyewear-picture' />
            <img className='scroll-picture' src="" alt='eyewear-picture' />
          </div>
            <div className='r-side'>
              <h2>Title</h2>
              <p>color name</p>
              <p>Starting at PRICE</p>
              <div>
                <button className='purchase' >Select lenses and purchase</button>
                <button className='try-on' >Try at home for free</button>
              </div>
            </div>
        </div>
        <div className='middle-details' >
          <h5 className='serif' >Halton's quiet confidence comes from its distinguished features: a mid-century acetate silhouette (with an angular bottom!), Art Deco-inspired metal temples, sleek temple tips, and a Graduated Rivet design.</h5>
          <ul className='materials'>
            <li>Made from hand-polished cellulose acetate and stainless steel</li>
            <li>Akulon-coated screws for durability</li>
          </ul>
        </div>
        <div className='bottom-details' >
          <div className='details-picture' >
            <img src="" alt='eyewear-picture' />
          </div>
          <div className='bottom-text'>
            <h5 className='serif' >Halton is available in a medium width</h5>
            <p>If your face is average in size, which is most common, this frame should fit you well. Unsure of your size? Select a few different options in a free Home Try-On.</p>
          </div>
        </div>
      </div>
    )
  }
}


// export default withRouter(ProductShow);
export default ProductShow; //--> breaks page