import React from 'react';
import { withRouter } from 'react-router-dom';
import AddItemForm from '../cart/add_item_form';
import { Link } from 'react-router-dom';


class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhoto: 'photo1',
      colorId: props.match.params.colorId,
      currentColor: null,
      colorCheck: false
    };
  
    this.handlePhoto = this.handlePhoto.bind(this)
    this.handleClick = this.handleClick.bind(this)
  };

  componentDidMount() {
    this.props.fetchProduct(parseInt(this.props.match.params.productId))
    if ( this.state.colorCheck === false ) {
      debugger
      this.setState({ currentCheck: true, currentColor: "YELLOW" })
    }
  };

  handlePhoto() {
    return (e) => {
      this.setState({ currentPhoto: e.currentTarget.value });
    }
  };

  handleClick(colorId, colorName) {
    return (e) => {
      this.setState({ colorId: colorId, currentColor: colorName });
    }
  };

  render() {
    // let product = this.props.fetchProduct(this.props.match.params.productId)
    // this.props.fetchProduct(this.props.id)
    let { product } = this.props
    if (!product) return null;

    let image;
    let colorname = this.state.currentColor;
    let photo1 = product.colors[0].photo1Url;
    let photo2 = product.colors[0].photo2Url;
    let photo3 = product.colors[0].photo3Url;
    let photo4 = product.colors[0].photo4Url;

    // if (this.state.currentColor === true ) {
    //   this.props.product.colors.forEach(color => {
    //     if (this.state.colorId === color.id) colorName = color.color_name
    //   })
    // }

    product.colors.forEach(color => { 
      if (color.id === this.state.colorId) {
        // colorname = color.color_name;
        photo1 = color.photo1Url;
        photo2 = color.photo2Url;
        photo3 = color.photo3Url;
        photo4 = color.photo4Url;
      }
    })


    switch (this.state.currentPhoto) {
      case 'photo1':
        image = <img className='scroll-picture' src={photo1} alt='eyewear-picture' />
        break;
      case 'photo2':
        image = <img className='scroll-picture' src={photo2} alt='eyewear-picture' />
        break;
      case 'photo3':
        image = <img className='scroll-picture' src={photo3} alt='eyewear-picture' />
        break;
      case 'photo4':
        image = <img className='scroll-picture' src={photo4} alt='eyewear-picture' />
        break;
    };


    let details = product.details.split('#')
    let plan = Math.round(product.price / 3)

    return (
      <div className='index-body'>
        <div className='top' >
          <div className='pictures-container'>
          <div className='pictures'>
            {image}
            <form >
              <div className='options-colors'>
                <input type='radio' className='photo-radios' value='photo1' onClick={this.handlePhoto()} defaultChecked/>
                <input type='radio' className='photo-radios' value='photo2' onClick={this.handlePhoto()} />
                <input type='radio' className='photo-radios' value='photo3' onClick={this.handlePhoto()} />
                <input type='radio' className='photo-radios' value='photo4' onClick={this.handlePhoto()} />
              </div>
            </form>
          </div>
          </div>
            <div className='r-side'>
              <h2 className='product-name'>{product.name}</h2>
              <h5 className='product-color'>{colorname}</h5>
              <div className='radio-cont'>
                {product.colors.map((color, idx) => <input 
                  type='radio'
                  name='color-radios'
                  className='color-radios'
                  onClick={this.handleClick(color.id, color.color_name)}
                  key={idx}
                  defaultChecked={`${color.id === this.state.colorId}`} />  ) }
              </div>
              <p>Starting at ${product.price}, including prescription lenses or 3 payments of ${plan}</p>
              <div>
                <AddItemForm product={product} colorPhoto={photo3} pickedColor={colorname} createCartItem={this.props.createCartItem} />
                <button className='try-on' >Try at home for free</button>
              </div>
            </div>
        </div>
        <div className='middle-details' >
          <h5 className='serif' >{details[0]}</h5>
        </div>
        {/* <div className='bottom-details' >
          <div className='bottom-text'>
            <h5 className='serif-detail' >We offer a variety of prescription and lense types</h5>
            <p>Need to renew your prescription? We have an app that lets tou do it from home</p>
            
            <div>
              <h5 className='sans-details'>Prescription type</h5>
              <ul>
                <li>Non-prescription</li>
                <li>Single-vision</li>
                <li>Progressives</li>
                <li>Readers</li>
              </ul>
            </div>
            <div>
              <h5 className='sans'>Lense material</h5>
              <ul>
                <li>Polycarbonate</li>
                <li>1.67 high-index</li>
              </ul>
            </div> */}

            <div className='bottom'>
              <img src={window.case} />
              <h3 className='bottom-note-title'>Everything that's included</h3>
              <p className='bottom-note'>Each pair of sunglasses comes with a frame case and lens cloth.
                 We also offer free shipping and a 30-day, hassle-free return or
                 exchange policy as well as a one-year, no scratch guarantee for
                 our lenses; we'll replace your scratched lenses for free within the first 12 months.</p>
            </div>
          </div>
        // </div>
      // </div>
    )
  }
}


// export default withRouter(ProductShow);
export default ProductShow; //--> breaks page