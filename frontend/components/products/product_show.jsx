import React from 'react';
import { withRouter } from 'react-router-dom';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhoto: 'photo1',
    }

    this.handlePhoto = this.handlePhoto.bind(this)
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
  }

  handlePhoto() {
    return (e) => {
      this.setState({ currentPhoto: e.currentTarget.value });
    }
  }

  render() {
    // let product = this.props.fetchProduct(this.props.match.params.productId)
    // this.props.fetchProduct(this.props.id)
    let { product } = this.props
    if (!product) return null;

    let details = product.details

    let image;

    switch (this.state.currentPhoto) {
      case 'photo1':
        image = <img className='scroll-picture' src={product.photoUrl} alt='eyewear-picture' />
        break;
      case 'photo2':
        image = <img className='scroll-picture' src='' alt='eyewear-picture' />
        break;
      case 'photo3':
        image = <img className='scroll-picture' src={product.photoUrl} alt='eyewear-picture' />
        break;
      case 'photo4':
        image = <img className='scroll-picture' src={product.photoUrl} alt='eyewear-picture' />
        break;
    }

    return (
      <div className='index-body'>
        <div className='top' >
          <div className='pictures'>
            {image}
            <form>
              <input type='radio' name='photo-radios' value='photo1' onClick={this.handlePhoto()} defaultChecked/>
              <input type='radio' name='photo-radios' value='photo2' onClick={this.handlePhoto()} />
              <input type='radio' name='photo-radios' value='photo3' onClick={this.handlePhoto()} />
              <input type='radio' name='photo-radios' value='photo4' onClick={this.handlePhoto()} />
            </form>
          </div>
            <div className='r-side'>
              <h2>{product.name}</h2>
              <p>{product.colors}</p>
              <p>Starting at {product.price}</p>
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